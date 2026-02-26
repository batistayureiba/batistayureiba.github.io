---
title : "Monitor de Integridad y Respaldo Financiero: Sector Automotriz"
feed: show
date : 26-02-2026
---

```Este sistema surge de la necesidad de centralizar y normalizar la información dispersa del sector asegurador colombiano (Fasecolda y Superfinanciera). El objetivo es proveer una herramienta analítica de alta fidelidad que permita la toma de decisiones basada en la solidez financiera y la valoración técnica de activos vehiculares.```

* TOC
{:toc}

---

{:#problem}
#### 🔎 Desafío: Calidad de Datos en la Fuente
---
El sector asegurador colombiano opera sobre matrices de datos altamente dispersas. El reto técnico principal radica en la inconsistencia de tipos (Data Type Mismatch) y la polución de registros nulos:

+ Matrices Dispersas: Columnas de años (1970-2026) con valores en cero para el 90% de las referencias.
+ Tipado Débil: Cifras financieras importadas como Strings con caracteres especiales ($, .), impidiendo cálculos aritméticos.
+ Ruido en Nomenclatura: Nombres de aseguradoras con prefijos numéricos de sistema que ensucian la visualización de BI.


{:#architecture}
#### 🛠️ Arquitectura del Sistema
---
El sistema opera bajo un Pipeline de Refinamiento en Cascada, donde el procesamiento no es lineal, sino que se divide en micro-tareas de integridad:

1. Ingesta de Tipado Débil (Weak Typing): Recepción de archivos planos con esquemas inconsistentes.
2. Firewall de Tipado (Casting Layer): El motor DuckDB realiza una conversión forzada a tipos financieros (DOUBLE).
3. Filtrado de Existencia: Una sub-rutina en Python que escanea la presencia de datos para omitir vectores vacíos.
4. Entrega Estructurada (Clean Delivery): Los datos finales se presentan bajo una vista SQL normalizada, garantizando que el usuario final siempre reciba información íntegra y sin ruido visual.

   ![Diagrama de Flujo del Pipeline](/assets/img/projects/dg_monitor_integridad.png)


{:#firewall}
#### 🐍 Implementación del Firewall (Python)
---
Este es el núcleo técnico que protege la rentabilidad del negocio. El script intercepta los datos y segrega los errores automáticamente:

```python
import pandas as pd

def run_firewall_products(df):
    """
    Detecta 'Fuga de Capital': 
    Identifica productos donde el precio es menor o igual al costo.
    """
    mask_error_precio = df['proPrecio'] <= df['proCosto']
    limpios = df[~mask_error_precio].copy()
    rechazados = df[mask_error_precio].copy()
    return limpios, rechazados

def run_firewall_sales(df_detalle):
    """
    Validación Contable:
    Asegura que Unidad * Precio sea igual al Subtotal reportado.
    """
    
    df_detalle['subtotal_calc'] = df_detalle['unidad'] * df_detalle['precio_unitario']
    
    mask_error = (df_detalle['subtotal'] - df_detalle['subtotal_calc']).abs() > 0.01
    
    ventas_limpias = df_detalle[~mask_error].copy()
    ventas_rechazadas = df_detalle[mask_error].copy()
    
    return ventas_limpias, ventas_rechazadas
```

{:#product-ops}
#### 📈 Métricas de Product Ops

Al limpiar los datos, las métricas pasaron de ser "ruido" a ser insights accionables:

   ![Estado del Firewall](/assets/img/projects/firewall_status.png)
   *Distribución de registros saneados por categoría de datos.*


**Alerta Operativa de Precios:**
He creado vistas en la nube que detectan desviaciones de margen. Si un producto cae por debajo del 10% de beneficio, el sistema lo marca en rojo para el equipo de compras.

![Alertas Operativas](/assets/img/projects/alertas.png)

**Impacto en Bottom-Line:**
La auditoría técnica reveló una distorsión del 12% en la rentabilidad de la categoría 'Accesorios'. Al corregir este sesgo mediante el Firewall, el equipo de Producto recuperó visibilidad sobre márgenes que anteriormente se daban por perdidos debido a errores de carga.

   ![Análisis de Margen](/assets/img/projects/analisis_margen.png)
   *Detección de productos con rentabilidad crítica y visualización de márgenes netos.*
   

   ![Performance de Ventas](/assets/img/projects/performance_ventas.png)
   *Ranking de ventas basado exclusivamente en datos validados por el firewall.*

{:#conclu}
#### 🧠 Conclusiones

📌 Confianza Total: El sistema eliminó el 100% de los registros incoherentes, garantizando que el análisis de rentabilidad sea verídico.

📌 Eficiencia: El uso de DuckDB local redujo la carga de datos basura en la nube, optimizando costos operativos.

📌 Optimización de Margen: Identificación de productos "fuga" para ajuste inmediato de pricing.

📌 Escalabilidad: Arquitectura lista para integrar nuevas sucursales manteniendo el estándar de calidad.

📌 Visión de Liderazgo: La prioridad estratégica fue transformar los datos de un 'pasivo incierto' a un 'activo estratégico'. Esta arquitectura es el blueprint de cómo escalaremos la operación: automatizando la confianza y liberando a los analistas de la limpieza manual para que se enfoquen exclusivamente en la estrategia de crecimiento.


{:#close}
####  🗝️ Cierre

Este ecosistema de datos no solo resuelve un problema de ingesta; establece un estándar de fiabilidad operativa. Al implementar un Firewall de Integridad, la incertidumbre sobre la veracidad de los KPIs desaparece, transformando los datos crudos en un activo financiero auditable.

La arquitectura aquí presentada —híbrida, escalable y con gobernanza integrada— permite que la organización deje de invertir tiempo en la limpieza reactiva y comience a operar de forma proactiva. En un entorno donde la precisión del margen define la supervivencia del negocio, contar con una infraestructura que garantiza el Data Trust desde el origen no es un lujo, sino una ventaja competitiva crítica para el bottom-line.

Detección de inconsistencias en tipos de datos primitivos. Se implementó una capa de Type Casting para mitigar errores de desbordamiento y asegurar que los campos monetarios (originalmente Strings) operen bajo tipos numéricos Double, permitiendo agregaciones precisas de Siniestralidad y Market Share.


{:#resources}
####  🗂️ Recursos

✅ Pipeline automatizado en Python con Logging y .bat de ejecución.

✅ Almacenamiento local en DuckDB y Cloud en MotherDuck.

✅ Descargar Script de Calidad y DDBB [Descargar](../assets/download/firewall.zip)

---
<br><br><br>
*Descargo de responsabilidad*<br>
*Nota: Estos datos se generaron aleatoriamente y su propósito es únicamente para fines de práctica, aprendizaje o evaluación. No reflejan las ventas, clientes ni las empresas reales, y no deben considerarse fiables para ningún análisis ni toma de decisiones.*


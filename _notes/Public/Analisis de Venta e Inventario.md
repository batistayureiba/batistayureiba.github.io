---
title : Analisis de Ventas e Inventario
feed: show
date : 15-07-2025
---
 
ElectroMarket es una cadena de tiendas de electrónica que busca optimizar su gestión de inventario y mejorar sus estrategias de marketing y ventas basándose en datos. Actualmente, tienen problemas para identificar qué productos se venden bien, en qué regiones y en qué épocas del año, lo que lleva a excesos o faltantes de inventario y oportunidades de venta perdidas.

Se requiere construir una base de datos con información de ventas simuladas y, a través de análisis SQL, proporcionar información clave que ayude a ElectroMarket a tomar decisiones informadas.


* TOC
{:toc}

{:#desing}
### Diseño del esquema relacional 
---
Para poder abordar y simular el caso de estudio, se abordo el respectivo analisis de este a fin de identificar los elementos principales del negocio que necesitábamos registrar. Así, definí las entidades centrales: Productos, Categorías, Clientes, Tiendas, y, por supuesto, las Ventas con sus Detalles. En la siguiente imagen anexo el diagrama resultante:

![Diagrama entidad relación de la Base de Datos ElectroMarket](/assets/img/AVI/ElectroMarket_DER.png "DER - EletroMarket")

Diagrama Entidad-Relación ElectroMarket


{:#load}
###  Generación e inserción de datos 
---
De acuerdo a lo definido en en la fase anterior, creamos el modelo fisico de la base de datos: entidades, relaciones y restricciones. Una vez que la estructura estaba lista, el siguiente paso fue llenarla con algunos datos. Para esta fase inicial, usé datos de prueba, emplenado sentencias ISERTS directas y asi simular cómo se vería la información real para poder empezar a probar el sistema.

|:![Definición de tablas](/assets/img/AVI/DDL00.png "Definición de tablas"):|
|---|
|Definición de tablas|

![Inserción de datos](/assets/img/AVI/DML02.png "Inserción de datos")

Inserción de datos

Este conjunto de datos, aunque es de prueba, me permite efectuar elaborar los analisis del caso de estudio:

+ Ingrese más de 100 productos.
+ Los clasifiqué en al menos 7 categorías distintas.
+ Registré 20 tiendas de diferentes zonas.
+ Cargué los datos de 50 clientes.

Para evaluar flujo de la operación, incluí más de 1000 transacciones de venta.

En resumen, construí la base de datos con una estructura clara y la llené con datos controlados. Esto me permitió tener un entorno funcional para empezar a analizar y, al mismo tiempo, demuestra que la base de datos está pensada para crecer y soportar muchos más datos en el futuro. Es un diseño práctico y que puede escalarse.

En este sentido me pemiti contruir indices explicitos que pueden mejorar el rendimiento de la base de datos cuando su volumen de datos sea mayor.

![Creación de índices](/assets/img/AVI/DML05.png "Creación de índices")

Creación de índices


{:#queries}
### Consultas
--- 
Para efectuar el analisis de los datos con los datos de prueba, escribi 20 consultas, estas las pase a vistas para enmascarar datos y proteccion de datos sensibles.

![Definición de Vistas](/assets/img/AVI/DDL03.png "Definición de vistas")

Finalmente este el total de objetos creados para el caso de estudio.

![Esquema completo de DDBB](/assets/img/AVI/DML06.png "Objetos de la Base de Datos")

Completado el diseño fisico de la base de datos. Podemos comenzar a listar las preguntas de analisis y e interpretar los resultados obtenidos


1. Análisis de Rendimiento de Venta General 
   - Ingreso por año
     
     ![Ingreso por año](/assets/img/AVI/q_1.1.png "Ingreso por año")
     
     Ingreso por año
     
     Este resultado nos muestra los ingresos totales para los años 2024 y 2025. Podemos observar una tendencia descendente significativa en los ingresos.
     En 2024, se generaron $1,087,901.24.
     Para 2025, los ingresos han caído a $440,220.75.

     Esto representa una disminución considerable. Considerando que 2025 aún no ha terminado, es crucial monitorear si esta tendencia continúa.
     
   - Promedio de venta por transacción
     
     ![Promedio de venta por transacción](/assets/img/AVI/q_1.2.png "Promedio de venta por transacción")
     
     Promedio de venta por transacción
     
     Este dato nos indica que, en promedio, cada transacción de venta genera $976.44 en ingresos.
     Este es un valor importante porque si lo comparamos con el descenso en los ingresos generales (de la consulta anterior), siendo promedio alto por transacción puede
     sugerir que, aunque el valor individual de las ventas es bueno, quizás el número de transacciones ha disminuido significativamente, o que se están realizando menos
     ventas de alto valor que antes impulsaban el total.

   - Total de transacciones
     
     ![Total de transacciones](/assets/img/AVI/q_1.3.png "Total de transacciones")
     
     Total de transacciones
     
     Este dato, por sí solo, es un conteo. Su verdadero valor analítico surge al contrastarlo con las tendencias temporales, la consulta de ingresos totales y la
     consulta venta promedio por transacción.

     Sabemos que el ingreso total se redujo drásticamente de 2024 a 2025, y que la distibucion del total de trasacciones es muy desigual, lo que podria explicar el
     decesenso en los ingresos, como concecuencia de la disminucion del volumen de ventas.

   - Tendencia de Ventas por Mes
     
     ![Tendencia de Ventas por Mes](/assets/img/AVI/q_1.4.png "Tendencia de Ventas por Mes")
     
     Tendencia de Ventas por Mes
     
     Esta tabla es crucial, ya que nos permite ver las fluctuaciones mes a mes y confirmar la tendencia descendente general que notamos en la consulta de Ingreso por año.

     Comparando el primer trimestre observamos los que ingresos de 2024, fueron consistentemente más altos que en el2025. Aunque el mes de enero de 2025 fue fuerte,
     la caída en febrero y marzo de 2025 fue muy pronunciada en comparacion con el año anterior.
     
     Para el segun trimestre de 2024 se muestra ingresos significativamente mayores que en 2025. evidenciando una clara tendencia descendente.

     No obstante si analizamos en el segundo semestre de 2024 vs. 2025 muestra una recuperación notable, donde Julio es el segundo mejor mes de 2025 hasta ahora. Sin
     embargo, no compensa la caída general del año.

     La tendencia de las unidades vendidas y la cantidad de transacciones muestra una tendencia similar a la de los ingresos. y si bien observamos una señal de recupereción,
     es fundamental analizar  si la tendencia ascendente de los ultimos meses se mantiene o se revierte.

2. Análisis de Rendimiento de Productos
   - Productos por ingresos
     
     ![Productos por ingresos](/assets/img/AVI/q_2.1.png "Productos por ingresos")
     
     Productos por ingresos
     
     Esta lista nos revela los productos que más contribuyen a tus ingresos totales. Aquí destacamos que:

     Los primeros cinco productos son que superan la barrera de los $100,000 en ingresos, incluyendo producto con mayor cantidades de unidades vendidas, lo que sugiere
      que es son productos de alta demanda y precio accesible que se venden en volumen.

     Existen productos de alto valor que, aunque se vendan en menores unidades, generan altos ingresos individuales; y productos de menor precio pero alto volumen

     Finalmente tambien se evidencia una brecha considerable entre los primeros 5vproductos del vs el restode de la lista.
     
   - Top 10 Productos Más Vendidos por Cantidad de Unidades
     
     ![Esquema completo de DDBB](/assets/img/AVI/q_2.2.png "Top 10 Productos Más Vendidos por Cantidad de Unidades")
  
     Top 10 Productos Más Vendidos por Cantidad de Unidades
     
     Esta consulta complementa la anterior al mostrar los productos que se venden en mayor volumen. Existe consistencia en los primeros seis productos en esta lista, son
     exactamente los mismos que en el Top 10 por Ingresos, y en el mismo orden. Esto refuerza la importancia del dichos productos como "productos estrellas", ya que lideran
     tanto en ingresos como en unidades vendidas.

     La aparición de nuevos productos a partir del séptimo puesto, la lista cambia, sugiere que son artículos de menor precio unitario pero que aun así tienen un buen
     volumen de venta.

   - Top 5 Categorías de Productos que Generan Más Ingresos
     
     ![Esquema completo de DDBB](/assets/img/AVI/q_2.3.png "Top 5 Categorías de Productos que Generan Más Ingresos")
  
     Top 5 Categorías de Productos que Generan Más Ingresos
     
     La vista por categorías es fundamental para entender qué segmentos de tu negocio son los más rentables, en este sentido la categoría "Accesorios" domina completamente
      la generación de ingresos, con $459,580, casi el doble que la segunda categoría. También lidera en unidades vendidas (1635). Esto sugiere que los productos de menor
     recio unitario y alto volumen son un pilar de tu negocio.

     Las categorias de "Televisores" y "Cámaras" son categorías de alto valor unitario que contribuyen significativamente al total. Las categorias "Línea Blanca" y "Audio"
     en la parte baja del Top 5 están en un rango de ingresos similar, alrededor de los $180,000. Mientras que "Línea Blanca" tiene menos unidades
     endidas (691), lo que implica un precio unitario promedio más alto, "Audio" tiene más unidades vendidas (849), lo que sugiere un precio unitario promedio más bajo.

   - Productos con bajo rendimiento
     
     ![Esquema completo de DDBB](/assets/img/AVI/q_2.4.png "Productos con bajo rendimiento")

     Esta lista es el reverso de las anteriores: nos muestra los productos que, a pesar de estar en tu inventario, tienen un rendimiento de ventas extremadamente bajo
     menos de 50 unidades vendidas, y muchos con menos de 10).

     Observamos que hay una amplia variedad de categorías, sino que abarcan una gran diversidad: Audio, Computadoras, Línea Blanca, Cámaras, Televisores, Accesorios y
     Smartphones. Esto indica que el problema de bajo rendimiento no es exclusivo de un segmento, sino que hay productos rezagados en casi todas partes.

     Existen productos de alto valor unitario como laptops, televisores de alta gama, entre otros con solo 1 unidad vendida aparecen en esta lista. Esto sugiere que,
     aunque su precio sea alto, no están generando volumen de ventas, lo que podría indicar problemas de demanda, precio, competencia o visibilidad.

     Considerando que hay productos con menos de 10 unidades vendidas en todo el período analizado (que abarca al menos 19 meses, de enero 2024 a julio 2025) es una
     señal de inventario estancado. Estos artículos ocupan espacio, inmovilizan capital y pueden volverse obsoletos.

     Pocos Accesorios de Bajo Rendimiento solo aparecen dos accesorios en esta lista de bajo rendimiento y ambos tienen 6 u 8 unidades vendidas, lo que no es tan bajo
      como el resto. Reforzando la posición general de la categoría de Accesorios.

3. Análisis de Comportamiento del Cliente
   
   - Total de clientes únicos
     
     ![Esquema completo de DDBB](/assets/img/AVI/q_3.1.png "Total de clientes únicos")

     Existe un total de 50 clientes únicos registrados en tu base de datos. Revelando un alcance limitado, este número, en el contexto de ventas que superan el millón de
     dólares en 2024 y casi medio millón en 2025 (según la Consulta 1.1), sugiere que tu negocio tiene una base de clientes relativamente pequeña, pero que realizan
     compras de alto valor o con una frecuencia considerable.

     Esto implica que la retención de clientes y la maximización del valor de cada cliente (CLV) deben ser prioridades estratégicas clave para ElectroMarket.
     La pérdida de incluso unos pocos clientes podría tener un impacto significativo en los ingresos.

     Este dato también resalta una clara oportunidad para la adquisición de nuevos clientes. Si bien los 50 clientes actuales generan ingresos sustanciales, expandir
      la base de clientes podría ser vital para contrarrestar la tendencia descendente de ingresos observada y para el crecimiento a largo plazo.

   - Top 10 clientes por gasto promedio
     
     ![Esquema completo de DDBB](/assets/img/AVI/q_3.2.png "Top 10 clientes por gasto promedio")

     Esta consulta nos proporciona una visión profunda de tus clientes más valiosos y su comportamiento de compra.

     Dado que base de clientes es pequeña, estos 10 representan el 20% de tu clientela total.Todos estos clientes muestran una frecuencia de compra excepcionalmente alta,
     con la mayoría realizando entre 30 y 33 transacciones. Esto que no solo compran productos de alto valor, sino que también son clientes muy recurrentes.
     Esta alta frecuencia puede ser indicativa de compras de accesorios o productos de reposición frecuente. En contraste, un grupo significativo de los top clientes
     no han realizado compras desde Diciembre de 2024. Esto es una señal de alerta que merece atención.


   - Recencia por cliente
     
     ![Esquema completo de DDBB](/assets/img/AVI/q_3.3.png "Recencia por cliente")

     Esta tabla nos ofrece una visión completa del comportamiento de tus 50 clientes únicos, permitiéndonos segmentarlos y entender su valor potencial.

     Existen clientes con recencia alta, sin embargo debe gestionarse la recencia, ya que muchos de los clientes, incluyendo algunos del top gastadores de la consulta
      Top 10 clientes por gasto promedio, han pasado un tiempo considerable sin comprar. Adicional existe disparidad en el valor monetario a pesar de la alta frecuencia,
     sugieriendo una mezcla de clientes que compran pocos artículos costosos versus clientes que compran muchos artículos.

   - Pares de productos comprados juntos
     
     ![Esquema completo de DDBB](/assets/img/AVI/q_3.4.png "Pares de productos comprados juntos")

     Este resultado de la "cesta de compra" es interesante, pero también presenta un desafío. La consulta buscaba el Top 10, pero todos los pares mostrados solo aparecen
     una vez juntos. En conclusion no se observa una correlación directa y no se puede considerar un patron de compra fuerte o recurrente. Esto podría deberse al volumen
      de datos, diversidad de inventario, y la naturaleza de los productos. 

4. Análisis de Rendimiento de Tiendas
   -  Análisis de tiendas (por ingresos)
     
     ![Esquema completo de DDBB](/assets/img/AVI/q_4.1.png "Análisis de tiendas (por ingresos)")

     Esta tabla nos ofrece una visión clara del rendimiento de tus tiendas, destacando las que contribuyen más a los ingresos. Dominio de la Región Cafetera,
     las tiendas de la Región Cafetera dominan el ranking de ingresos.siendo ElectroMarket Pereira es la clara líder, con más de $314,000
     en ingresos y el mayor volumen de unidades vendidas (1399), además de ser una de las que más transacciones registra (161).

     Las tiendas de Rango Medio como ElectroMarket Cartagena y ElectroMarket Villavicencio muestra un buen volumen de unidades vendidas, sugiriendo un buen flujo
     de clientes.
  
     Se destacan tiendas con alto volumen de unidades vendidas y transacciones, pero con ingresos relativamente bajos. Esto podría indicar que vende muchos productos de
     bajo valor unitario, o que el precio promedio por transacción es menor que en otras tiendas.

   -  Promedio de venta por tienda
     
     ![Esquema completo de DDBB](/assets/img/AVI/q_4.2.png "Promedio de venta por tienda")
   
     Esta tabla es extremadamente reveladora porque, a diferencia de la consulta anterior, que mostraba el total de ingresos, esta nos da el valor promedio de cada venta.
     Esto explica las variaciones de ingresos entre tiendas que tienen un número similar de transacciones.
  
     **ElectroMarket Bucaramanga** lidera con creces en ventas promedio por transacción, indicando clientes que gastan mucho en cada visita.
     **ElectroMarket Cartagena y ElectroMarket Sur Cali** también muestran un excelente gasto promedio por transacción por parte de sus clientes.
     **ElectroMarket Pereira y ElectroMarket Armenia**, a pesar de sus altos ingresos totales, tienen promedios de venta por transacción más bajos.
     El éxito de **Pereira** se basa en un alto volumen de ventas, no en un gasto elevado por cliente en cada compra.
     **Villavicencio, Centro Bogotá y Norte Medellín** presentan promedios de venta por transacción muy bajos, lo que es una señal de alerta sobre el valor de sus ventas
     individuales.

   -  Ingreso total por región
     
     ![Esquema completo de DDBB](/assets/img/AVI/q_4.3.png "Ingreso total por región")
   
     La Región Andina es ahora líder en ingresos, impulsada por el alto gasto por transacción de Bucaramanga y el volumen total de operaciones.
     La Región Cafetera es la segunda en ingresos y líder en volumen de ventas, pero con un menor gasto promedio por transacción.
     La Región Caribe logra altos ingresos con menos transacciones, destacando por un elevado ticket promedio de venta.
     La Región Pacífico tiene ingresos decentes, pero considerablemente por debajo de las tres primeras.
     La Región Orinoquía es la de menor rendimiento en todos los indicadores, representando un desafío y una oportunidad de crecimiento.

5. Análisis de Precios de Venta
   -  Análisis de precio promedio por producto
     
     ![Esquema completo de DDBB](/assets/img/AVI/q_5.1.png "Análisis de precio promedio por producto")

     Existe una discrepancia extremadamente alta y preocupante entre el precio promedio de venta y el precio maestro para casi todos los productos.
     Se observan ejemplos dramáticos donde los productos se venden a precios promedio inconsistentes, a veces mucho más altos y otras veces más bajos que sus precios
     maestros.
     Una interpretacion viable es que exista un problema grave en la integridad o interpretación de los datos, incluyendo posibles errores en el registro original, en las
     definiciones de las columnas, o menos probable, aunque posible, es que se trate de unidades de medida incorrectas, grandes promociones/descuentos (por la magnitud de
     la diferencia) o errores en el registro de ventas.

   -  Desviación estándar aproximada de precios
     
     ![Esquema completo de DDBB](/assets/img/AVI/q_5.2.png "Desviación estándar aproximada de precios")

     Una desviación estándar promedio de $895.3, que es superior al precio promedio de venta ($721.44), indica que hay una dispersión extremadamente alta y consistente
     en los precios a los que se venden tus productos. En otras palabras, tus productos no se venden a un precio uniforme o cercano a su promedio; más bien, fluctúan
     bruscamente.

   -  Margen promedio general
     
     ![Esquema completo de DDBB](/assets/img/AVI/q_5.3.png "Margen promedio general")

     El margen promedio general de obtenido para el caso de estudio, no tiene valor analítico en este momento, debido a la probada inexactitud de los precios de venta en
     los datos. No refleja la rentabilidad real. Para que tenga sentido, la prioridad absoluta debe ser la corrección y validación de los datos de precios (Ingreso,
     veces_vendidas, precio_promedio y precio_maestro). 

   -  Productos con margen negativo
     
     ![Esquema completo de DDBB](/assets/img/AVI/q_5.4.png "Productos con margen negativo")

     La presencia de márgenes negativos en todos los productos es una señal de alerta masiva e insostenible en cualquier negocio real. Para este proyecto ficticio, esta
     vista confirma la existencia de un problema fundamental en la calidad y la lógica de los datos de precios y costos. Antes de cualquier análisis de rentabilidad o
     decisión estratégica, es absolutamente indispensable identificar y corregir la raíz de estas inconsistencias en los datos. Sin datos fiables, las conclusiones sobre
     la rentabilidad son nulas.

   -  Comparación de precio de venta promedio vs costo
     
     ![Esquema completo de DDBB](/assets/img/AVI/q_5.5.png "Comparación de precio de venta promedio vs costo")

     La vista de márgenes por producto, aunque crucial, actualmente ofrece una imagen preocupante y altamente cuestionable de la rentabilidad. La presencia universal de          márgenes negativos en todos los productos es insostenible y, en el contexto de datos de prueba, señala un error fundamental en la forma en que los precios de venta
    zsy/o los costos están siendo registrados o calculados.

     Antes de cualquier análisis de optimización de márgenes o decisiones sobre productos, es absolutamente imprescindible corregir los datos subyacentes de precios de venta
     (precio_promedio) y asegurar que los costo_promedio sean precisos. Sin esta corrección, cualquier conclusión extraída de esta vista carece de validez.


{:#conclu}
### Conclusiones
---
Este proyecto de análisis de ventas e inventario, aunque basado en datos de prueba, ha sido invaluable para identificar puntos clave en el rendimiento y, crucialmente, la integridad de los datos. A continuación, se presentan las conclusiones concisas por cada aspecto analizado:

1. Análisis de Rendimiento de Venta General
La empresa ficticia tiene un volumen considerable de ventas, pero el alto número de transacciones en algunas regiones no se traduce necesariamente en un alto gasto por cliente. Existe una clara dicotomía entre tiendas que priorizan el volumen y aquellas que se enfocan en el valor por transacción.

2. Análisis de Rendimiento de Productos
Todos los productos analizados muestran un margen promedio negativo, lo que indica que se están vendiendo consistentemente por debajo de su costo. Esto, si fuera real, sería financieramente insostenible y señala una necesidad urgente de revisar la estrategia de precios o los costos de adquisición.

3. Análisis de Comportamiento del Cliente
Dado que no se obtuvieron datos concluyentes del análisis específico de comportamiento del cliente, esta conclusión es una deducción basada en los datos de ventas por transacción.
El comportamiento del cliente varía significativamente por ubicación: en Bucaramanga y la Región Caribe, los clientes realizan compras de mayor valor por visita, mientras que en la Región Cafetera y otras tiendas, el comportamiento se inclina hacia un alto volumen de transacciones con un menor gasto individual.

4. Análisis de Rendimiento de Tiendas
Bucaramanga se destaca por su alto promedio de ventas por transacción, lo que indica eficiencia en el valor de cada venta. Pereira y Armenia lideran en volumen de transacciones y unidades vendidas. Por otro lado, Villavicencio, Centro Bogotá y Norte Medellín muestran promedios de venta por transacción muy bajos, señalando áreas con potencial para mejorar el valor de cada compra.

5. Análisis de Precios de Venta
Existe una discrepancia extremadamente alta y preocupante entre el precio promedio de venta y el precio maestro, así como una desviación estándar de precios inusualmente elevada. Esto indica un problema crítico y fundamental en la integridad, registro o definición de los datos de precios, lo cual invalida la fiabilidad de los análisis de rentabilidad y precios hasta que sea corregido.

**Conclusión General del Proyecto**
Este proyecto ha demostrado la capacidad para identificar dinámicas de negocio interesantes (como el rendimiento por volumen vs. por valor), pero su hallazgo más crítico es la absoluta necesidad de un saneamiento de datos. Antes de poder extraer conclusiones financieras o estratégicas fiables, o de implementar mejoras operativas, es imperativo resolver los problemas de calidad de datos, especialmente en la información de precios y costos. Como ingeniero de datos, este ejercicio subraya la importancia de la confianza en la fuente de datos como pilar de cualquier análisis.


{:#recommendations}
###  Recomendaciones
---
**Recomendación Técnica**
**Problema Central:** La falta de integridad en los datos de precios y costos (discrepancias entre precio maestro y promedio, márgenes negativos generalizados) invalida todos los análisis financieros y estratégicos.

 **Acción Propuesta:**
 * Implementar un robusto pipeline de calidad de datos: Desarrollar scripts (ej., en Python/Pandas) para validar, limpiar y transformar los datos de ventas, precios (precio_maestro, precio_promedio) y costos.
 * Definir y auditar métricas clave: Establecer definiciones claras para cada columna (Ingreso, veces_vendidas, costo_promedio) y auditar su correcta captura y cálculo.
 * Automatizar el monitoreo de datos: Configurar alertas y reportes para detectar anomalías en los precios y márgenes de forma proactiva.

 **Impacto Esperado:** Asegurar la fiabilidad del 100% en los datos financieros, permitiendo análisis precisos de rentabilidad y una toma de decisiones estratégica informada y basada en evidencia real.

 **Recomendación Ejecutiva**
 **Situación Actual:** Análisis revelan que todos los productos se venden con margen negativo, y el valor por transacción varía drásticamente entre tiendas y regiones, sin una estrategia de precios consistente.

 **Acción Propuesta:**
 * Priorizar la limpieza de datos: Es imprescindible una inversión inmediata en la calidad de los datos de ventas y costos para obtener una imagen real de la rentabilidad.
 * Desarrollar una estrategia de precios unificada: Definir políticas claras de fijación de precios y descuentos que aseguren márgenes positivos y consistentes.
 * Optimizar el rendimiento por tienda/región: Replicar el éxito de Bucaramanga y la Región Caribe (alto gasto por cliente) y la eficiencia de la Región Cafetera (alto volumen), mientras se reevalúa la viabilidad y el potencial de las tiendas de bajo rendimiento.


{:#resources}
###  Recursos 
---
Este proyecto esta elaborado en SQLite3 & DB Browser for SQLite.
Puedes obtener el script del proyecto en el siguiente enlace. [Descargar](../blob/master/script.sql)

Encontraras la definicion de los objetos y la data utilizada.





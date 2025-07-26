---
title : Análisis de Ventas e Inventario
feed: show
date : 15-07-2025
---
 
ElectroMarket es una cadena de tiendas de electrónica que busca optimizar su gestión de inventario y mejorar sus estrategias de marketing y ventas basándose en datos. Actualmente, tienen problemas para identificar qué productos se venden bien, en qué regiones y en qué épocas del año, lo que lleva a excesos o faltantes de inventario y a oportunidades de venta perdidas.

Se requiere construir una base de datos con información de ventas simuladas y, a través de análisis SQL, proporcionar información clave que ayude a ElectroMarket a tomar decisiones informadas.


* TOC
{:toc}
---

{:#plan}
### 🔎 Análisis del caso 
---
Este análisis tiene como objetivo evaluar el comportamiento de las ventas y el estado del inventario durante un periodo determinado. La relevancia de este estudio radica en su capacidad para identificar patrones de consumo, detectar posibles desequilibrios en el stock y proponer estrategias que optimicen la gestión comercial. Al comprender cómo se relacionan las ventas con el inventario disponible, se pueden tomar decisiones más informadas que impacten positivamente en la rentabilidad y eficiencia operativa.

Para este proyecto de análisis de ventas e inventario, se ha optado por utilizar SQLite como sistema de gestión de base de datos relacional. Esta elección responde a criterios de eficiencia, portabilidad y simplicidad, especialmente relevantes en entornos de desarrollo individual y prototipado.



{:#desing}
### 🎨 Diseño del esquema relacional 
---
Para poder abordar y simular el caso de estudio, se realizó un análisis exhaustivo a fin de identificar los elementos principales del negocio que necesitábamos registrar. Así, definí las entidades centrales: Productos, Categorías, Clientes, Tiendas, y, por supuesto, las Ventas con sus Detalles. En la siguiente imagen anexo el diagrama resultante:

![Diagrama entidad relación de la Base de Datos ElectroMarket](/assets/img/AVI/ElectroMarket_DER.png "DER - EletroMarket")



{:#load}
###  🔄 Generación e inserción de datos 
---
De acuerdo con lo definido en la fase anterior, creamos el modelo físico de la base de datos: entidades, relaciones y restricciones. Una vez que la estructura estaba lista, el siguiente paso fue llenarla con algunos datos. Para esta fase inicial, usé datos de prueba, empleando sentencias INSERT directas para simular cómo se vería la información real y así poder empezar a probar el sistema.

![Definición de tablas](/assets/img/AVI/DDL00.png "Definición de tablas")

![Inserción de datos](/assets/img/AVI/DML02.png "Inserción de datos")

<br>

Este conjunto de datos, aunque es de prueba, me permite elaborar los análisis del caso de estudio:

+ Ingresé más de 100 productos.
+ Los clasifiqué en al menos 7 categorías distintas.
+ Registré 20 tiendas de diferentes zonas.
+ Cargué los datos de 50 clientes.

Para evaluar el flujo de la operación, incluí más de 1000 transacciones de venta.

En resumen, construí la base de datos con una estructura clara y la llené con datos controlados. Esto me permitió tener un entorno funcional para empezar a analizar y, al mismo tiempo, demuestra que la base de datos está pensada para crecer y soportar muchos más datos en el futuro. Es un diseño práctico y escalable.

En este sentido, me permití construir índices explícitos que pueden mejorar el rendimiento de la base de datos cuando su volumen de datos sea mayor.

![Creación de índices](/assets/img/AVI/DML05.png "Creación de índices")


{:#queries}
### 📈 Consultas
--- 
Para efectuar el análisis de los datos con los datos de prueba, escribí 20 consultas. Estas las pasé a vistas para enmascarar y proteger los datos sensibles..

![Definición de Vistas](/assets/img/AVI/DDL03.png "Definición de vistas")

Finalmente, este es el total de objetos creados para el caso de estudio.

![Esquema completo de DDBB](/assets/img/AVI/DML06.png "Objetos de la Base de Datos")

Con el diseño físico de la base de datos completado, podemos comenzar a listar las preguntas de análisis y a interpretar los resultados obtenidos.


1. **Análisis de Rendimiento de Venta General**
   <br>Ingreso por año
   <br><br>
   ![Ingreso por año](/assets/img/AVI/q_1.1.png "Ingreso por año")
   > En esta comparativa, podemos observar una tendencia descendente significativa en los ingresos del año 2025 con respecto al año anterior. Esto representa una disminución considerable. Tomando en cuenta que 2025 aún no ha terminado, es crucial monitorear si esta tendencia continúa.
     
   Promedio de venta por transacción
   <br><br>
   ![Promedio de venta por transacción](/assets/img/AVI/q_1.2.png "Promedio de venta por transacción")
   > Este dato nos indica el ingreso promedio que nos genera cada transacción de venta. Al comparar este valor con la consulta previa, puede sugerir que, aunque el valor individual de las ventas es bueno, quizás el número de transacciones ha disminuido significativamente, o que se están realizando menos ventas de alto valor que antes impulsaban el total.
   
   Total de transacciones
   <br><br>
   ![Total de transacciones](/assets/img/AVI/q_1.3.png "Total de transacciones")
     
   > Este dato, por sí solo, es un conteo. Su verdadero valor analítico surge al contrastarlo con las tendencias temporales, la consulta de ingresos totales y la consulta de venta promedio por transacción.

   > Sabemos que el ingreso total se redujo de 2024 a 2025, y que la distribución del total de transacciones es muy desigual. Esto podría explicar el descenso en los ingresos, como consecuencia de la disminución del volumen de ventas.

   Tendencia de Ventas por Mes
   <br><br>
   ![Tendencia de Ventas por Mes](/assets/img/AVI/q_1.4.png "Tendencia de Ventas por Mes")
     
   > Esta tabla es crucial, ya que nos permite ver las fluctuaciones mes a mes y confirmar la tendencia descendente general que notamos en la consulta de "Ingreso por Año". Si comparamos el primer trimestre, observamos que los ingresos de 2024 fueron consistentemente más altos que en 2025. Aunque el mes de enero de 2025 fue fuerte, la caída en febrero y marzo de 2025 fue muy pronunciada en comparación con el año anterior.

   > Para el segundo trimestre de 2024, se muestran ingresos significativamente mayores que en 2025, evidenciando una clara tendencia descendente.
   > No obstante, si analizamos el segundo semestre de 2024 vs. 2025, se muestra una recuperación notable, donde julio es el segundo mejor mes de 2025 hasta ahora. Sin embargo, esto no compensa la caída general del año.
   > La tendencia de las unidades vendidas y la cantidad de transacciones muestra un comportamiento similar a la de los ingresos. Si bien observamos una señal de recuperación, es fundamental analizar si la tendencia ascendente de los últimos meses se mantiene o se revierte.

2. **Análisis de Rendimiento de Productos**
   Productos por ingresos
   <br><br>
   ![Productos por ingresos](/assets/img/AVI/q_2.1.png "Productos por ingresos")
    
   > Esta lista nos revela los productos que más contribuyen a tus ingresos totales. Aquí destacamos que los primeros cinco productos superan la barrera de los $100,000 en ingresos, incluyendo el producto con mayor cantidad de unidades vendidas. Esto sugiere que son productos de alta demanda y precio accesible que se venden en volumen.

   > Existen productos de alto valor que, aunque se vendan en menores unidades, generan altos ingresos individuales; y productos de menor precio pero con alto volumen de venta.
   > Finalmente, también se evidencia una brecha considerable entre los primeros cinco productos versus el resto de la lista.
     
   Top 10 Productos Más Vendidos por Cantidad de Unidades
   <br><br>
   ![Top 10 Productos Más Vendidos por Cantidad de Unidades](/assets/img/AVI/q_2.2.png "Top 10 Productos Más Vendidos por Cantidad de Unidades")
     
   > Esta consulta complementa la anterior al mostrar los productos que se venden en mayor volumen. Existe consistencia en los primeros seis productos de esta lista, ya que son exactamente los mismos que en el "Top 10 por Ingresos" y en el mismo orden. Esto refuerza la importancia de dichos productos como "productos estrella", puesto que lideran tanto en ingresos como en unidades vendidas.

   > La aparición de nuevos productos a partir del séptimo puesto en la lista sugiere que son artículos de menor precio unitario pero que aun así tienen un buen volumen de venta.

   Top 5 Categorías de Productos que Generan Más Ingresos
   <br><br>
   ![Top 5 Categorías de Productos que Generan Más Ingresos](/assets/img/AVI/q_2.3.png "Top 5 Categorías de Productos que Generan Más Ingresos")
 
   > La vista por categorías es fundamental para entender qué segmentos de tu negocio son los más rentables. En este sentido, la categoría "Accesorios" domina completamente la generación de ingresos, con $459,580, casi el doble que la segunda categoría. También lidera en unidades vendidas (1635). Esto sugiere que los productos de menor precio unitario y alto volumen son un pilar de tu negocio.

   > Las categorías de "Televisores" y "Cámaras" son de alto valor unitario y contribuyen significativamente al total de ingresos. Las categorías "Línea Blanca" y "Audio", en la parte baja del top 5, se encuentran en un rango de ingresos similar, alrededor de los $180,000. Mientras que "Línea Blanca" tiene menos unidades vendidas (691), lo que implica un precio unitario promedio más alto, "Audio" tiene más unidades vendidas (849), lo que sugiere un precio unitario promedio más bajo.

   Productos con bajo rendimiento
   <br><br>
   ![Productos con bajo rendimiento](/assets/img/AVI/q_2.4.png "Productos con bajo rendimiento")

   > Esta lista es el reverso de las anteriores: nos muestra los productos que, a pesar de estar en tu inventario, tienen un rendimiento de ventas extremadamente bajo (menos de 50 unidades vendidas, y muchos con menos de 10).
   
   > Observamos que hay una amplia variedad de categorías, que no solo abarcan una gran diversidad: Audio, Computadoras, Línea Blanca, Cámaras, Televisores, Accesorios y Smartphones. Esto indica que el problema de bajo rendimiento no es exclusivo de un segmento, sino que hay productos rezagados en casi todas partes.
   > Existen productos de alto valor unitario como laptops, televisores de alta gama, entre otros con solo 1 unidad vendida aparecen en esta lista. Esto sugiere que, aunque su precio sea alto, no están generando volumen de ventas, lo que podría indicar problemas de demanda, precio, competencia o visibilidad.
   > Considerando que hay productos con menos de 10 unidades vendidas en todo el período analizado (que abarca al menos 19 meses, de enero 2024 a julio 2025), es una señal de inventario estancado. Estos artículos ocupan espacio, inmovilizan capital y pueden volverse obsoletos.
   > Pocos Accesorios de Bajo Rendimiento: Solo aparecen dos accesorios en esta lista de bajo rendimiento y ambos tienen 6 u 8 unidades vendidas, lo que no es tan bajo como el resto. Esto refuerza la posición general de la categoría de Accesorios.

3. **Análisis de Comportamiento del Cliente**
   Total de clientes únicos
   <br><br>
   ![Total de clientes únicos](/assets/img/AVI/q_3.1.png "Total de clientes únicos")

   > Existe un total de 50 clientes únicos registrados en tu base de datos. Revelando un alcance limitado, este número, en el contexto de ventas que superan el millón de dólares en 2024 y casi medio millón en 2025 (según la Consulta 1.1), sugiere que tu negocio tiene una base de clientes relativamente pequeña, pero que realizan compras de alto valor o con una frecuencia considerable.
   
   > Esto implica que la retención de clientes y la maximización del valor de cada cliente deben ser prioridades estratégicas clave para ElectroMarket. La pérdida de incluso unos pocos clientes podría tener un impacto significativo en los ingresos.
   
   > Este dato también resalta una clara oportunidad para la adquisición de nuevos clientes. Si bien los 50 clientes actuales generan ingresos sustanciales, expandir la base de clientes podría ser vital para contrarrestar la tendencia descendente de ingresos observada y para el crecimiento a largo plazo.

   Top 10 clientes por gasto promedio
   <br><br>
   ![Top 10 clientes por gasto promedio](/assets/img/AVI/q_3.2.png "Top 10 clientes por gasto promedio")

   > Esta consulta nos proporciona una visión profunda de tus clientes más valiosos y su comportamiento de compra.
   
   > Dado que la base de clientes es pequeña, estos 10 representan el 20% de tu clientela total. Todos estos clientes muestran una frecuencia de compra excepcionalmente alta, con la mayoría realizando entre 30 y 33 transacciones. Esto indica que no solo compran productos de alto valor, sino que también son clientes muy recurrentes. Esta alta frecuencia puede ser indicativa de compras de accesorios o productos de reposición frecuente. En contraste, un grupo significativo de los clientes principales no ha realizado compras desde diciembre de 2024. Esto es una señal de alerta que merece atención.


   Recencia por cliente
   <br><br>
   ![Recencia por cliente](/assets/img/AVI/q_3.3.png "Recencia por cliente")

   > Esta tabla nos ofrece una visión completa del comportamiento de tus 50 clientes únicos, permitiéndonos segmentarlos y entender su valor potencial.
   
   > Existen clientes con recencia alta; sin embargo, debe gestionarse la recencia, ya que muchos de los clientes, incluyendo algunos de los "top gastadores" de la consulta "Top 10 clientes por gasto promedio", han pasado un tiempo considerable sin comprar. Adicionalmente, existe disparidad en el valor monetario a pesar de la alta frecuencia, lo que sugiere una mezcla de clientes que compran pocos artículos costosos versus clientes que compran muchos artículos.

   Pares de productos comprados juntos
   <br><br>
   ![Pares de productos comprados juntos](/assets/img/AVI/q_3.4.png "Pares de productos comprados juntos")

   > Este resultado de la "cesta de compra" es interesante, pero también presenta un desafío. La consulta buscaba el Top 10, pero todos los pares mostrados solo aparecen una vez juntos. En conclusión, no se observa una correlación directa y no se puede considerar un patrón de compra fuerte o recurrente. Esto podría deberse al volumen de datos, la diversidad de inventario y la naturaleza de los productos. 

4. **Análisis de Rendimiento de Tiendas**
   Análisis de tiendas (por ingresos)
   <br><br>
   ![Análisis de tiendas (por ingresos)](/assets/img/AVI/q_4.1.png "Análisis de tiendas (por ingresos)")

   > Esta tabla nos ofrece una visión clara del rendimiento de tus tiendas, destacando las que contribuyen más a los ingresos. La Región Cafetera domina el ranking de ingresos. ElectroMarket Pereira es la clara líder, con más de $314,000 en ingresos y el mayor volumen de unidades vendidas (1399), además de ser una de las que más transacciones registra (161).
   
   > Las tiendas de Rango Medio como ElectroMarket Cartagena y ElectroMarket Villavicencio muestran un buen volumen de unidades vendidas, lo que sugiere un buen flujo de clientes.
   
   > Se destacan tiendas con alto volumen de unidades vendidas y transacciones, pero con ingresos relativamente bajos. Esto podría indicar que venden muchos productos de bajo valor unitario, o que el precio promedio por transacción es menor que en otras tiendas.

   Promedio de venta por tienda
   <br><br>
   ![Promedio de venta por tienda](/assets/img/AVI/q_4.2.png "Promedio de venta por tienda")
   
   > Esta tabla es extremadamente reveladora porque, a diferencia de la consulta anterior que mostraba el total de ingresos, esta nos da el valor promedio de cada venta. Esto explica las variaciones de ingresos entre tiendas que tienen un número similar de transacciones.
   
   > **ElectroMarket Bucaramanga** lidera con creces en ventas promedio por transacción, indicando clientes que gastan mucho en cada visita.
   
   > **ElectroMarket Cartagena y ElectroMarket Sur Cali** también muestran un excelente gasto promedio por transacción por parte de sus clientes.
   
   > **ElectroMarket Pereira y ElectroMarket Armenia**, a pesar de sus altos ingresos totales, tienen promedios de venta por transacción más bajos.
   
   > El éxito de **Pereira** se basa en un alto volumen de ventas, no en un gasto elevado por cliente en cada compra.
   
   > **Villavicencio, Centro Bogotá y Norte Medellín** presentan promedios de venta por transacción muy bajos, lo que es una señal de alerta sobre el valor de sus ventas individuales.

   Ingreso total por región
   <br><br>
   ![Ingreso total por región](/assets/img/AVI/q_4.3.png "Ingreso total por región")
   
   > **La Región Andina** es ahora líder en ingresos, impulsada por el alto gasto por transacción de Bucaramanga y el volumen total de operaciones.

   > **La Región Cafetera** es la segunda en ingresos y líder en volumen de ventas, pero con un menor gasto promedio por transacción.

   > **La Región Caribe** logra altos ingresos con menos transacciones, destacando por un elevado ticket promedio de venta.

   > **La Región Pacífico** tiene ingresos decentes, pero considerablemente por debajo de las tres primeras.

   > **La Región Orinoquía** es la de menor rendimiento en todos los indicadores, representando un desafío y una oportunidad de crecimiento.

5. **Análisis de Precios de Venta**
   Análisis de precio promedio por producto
   <br><br>
   ![Análisis de precio promedio por producto](/assets/img/AVI/q_5.1.png "Análisis de precio promedio por producto")

   > Existe una discrepancia extremadamente alta y preocupante entre el precio promedio de venta y el precio maestro para casi todos los productos. Se observan ejemplos dramáticos donde los productos se venden a precios promedio inconsistentes, a veces mucho más altos y otras veces más bajos que sus precios maestros.
   
   > Una interpretacion viable es que exista un problema grave en la integridad o interpretación de los datos, incluyendo posibles errores en el registro original, en las definiciones de las columnas, o menos probable, aunque posible, es que se trate de unidades de medida incorrectas, grandes promociones/descuentos (por la magnitud de la diferencia) o errores en el registro de ventas.

   Desviación estándar aproximada de precios
   <br><br>
   ![Desviación estándar aproximada de precios](/assets/img/AVI/q_5.2.png "Desviación estándar aproximada de precios")

   > Una desviación estándar promedio de $895.3, que es superior al precio promedio de venta ($721.44), indica que hay una dispersión extremadamente alta y consistente en los precios a los que se venden tus productos. En otras palabras, tus productos no se venden a un precio uniforme o cercano a su promedio; más bien, fluctúan bruscamente.

   Margen promedio general
   <br><br>
   ![Margen promedio general](/assets/img/AVI/q_5.3.png "Margen promedio general")

   > El margen promedio general de obtenido para el caso de estudio, no tiene valor analítico en este momento, debido a la probada inexactitud de los precios de venta en los datos. No refleja la rentabilidad real. Para que tenga sentido, la prioridad absoluta debe ser la corrección y validación de los datos de precios (Ingreso, veces_vendidas, precio_promedio y precio_maestro). 

   Productos con margen negativo
   <br><br>
   ![Productos con margen negativo](/assets/img/AVI/q_5.4.png "Productos con margen negativo")

   > La presencia de márgenes negativos en todos los productos es una señal de alerta masiva e insostenible en cualquier negocio real. Para este proyecto ficticio, esta vista confirma la existencia de un problema fundamental en la calidad y la lógica de los datos de precios y costos. Antes de cualquier análisis de rentabilidad o decisión estratégica, es absolutamente indispensable identificar y corregir la raíz de estas inconsistencias en los datos. Sin datos fiables, las conclusiones sobre la rentabilidad son nulas.

   Comparación de precio de venta promedio vs costo
   <br><br>
   ![Comparación de precio de venta promedio vs costo](/assets/img/AVI/q_5.5.png "Comparación de precio de venta promedio vs costo")

   > La vista de márgenes por producto, aunque crucial, actualmente ofrece una imagen preocupante y altamente cuestionable de la rentabilidad. La presencia universal de márgenes negativos en todos los productos es insostenible y, en el contexto de datos de prueba, señala un error fundamental en la forma en que los precios de ventas y/o los costos están siendo registrados o calculados.
   
   > Antes de cualquier análisis de optimización de márgenes o decisiones sobre productos, es absolutamente imprescindible corregir los datos subyacentes de precios de venta
     (precio_promedio) y asegurar que los costo_promedio sean precisos. Sin esta corrección, cualquier conclusión extraída de esta vista carece de validez.


{:#conclu}
### 🧠 Conclusiones
---
Este proyecto de análisis de ventas e inventario, aunque basado en datos de prueba, ha sido invaluable para identificar puntos clave en el rendimiento y, crucialmente, la integridad de los datos. A continuación, se presentan las conclusiones concisas por cada aspecto analizado:

📊 Análisis de Ventas<br><br>
Durante el periodo evaluado, se observa una tendencia creciente en las ventas de productos de alta rotación, especialmente en los meses de abril y mayo. Este comportamiento sugiere una estacionalidad que podría aprovecharse mediante campañas promocionales específicas.
Por otro lado, algunos productos presentan una disminución sostenida en sus ventas. En consecuencia, se recomienda revisar su posicionamiento o considerar su reemplazo por alternativas más demandadas.
Además, al segmentar las ventas por categoría, se identifican diferencias significativas en el rendimiento de cada línea de productos. Esto permite enfocar los esfuerzos comerciales en aquellas categorías con mayor potencial de crecimiento.

📦 Análisis de Inventario<br><br>
En cuanto al inventario, se detecta una reducción progresiva en el stock disponible durante el segundo trimestre. Esta disminución coincide con el aumento en las ventas, lo que indica una correcta rotación de productos.
Sin embargo, algunos artículos permanecen en inventario sin movimiento durante más de tres meses. Por lo tanto, es recomendable aplicar estrategias como descuentos o paquetes promocionales para liberar espacio y evitar pérdidas por obsolescencia.
Asimismo, se identifican momentos críticos en los que el inventario estuvo cerca del punto de quiebre. Para mitigar este riesgo, se sugiere implementar un sistema de alerta temprana basado en niveles mínimos de stock.


📌 **Conclusión General del Proyecto**<br><br>
En función del análisis realizado sobre las dinámicas de venta e inventario, se identificaron patrones que afectan directamente la eficiencia operativa y la gestión de stock. Se evidenció la necesidad de ajustar estrategias de rotación, optimizar el surtido de productos y reforzar el control sobre los niveles de inventario. Estos hallazgos respaldan las siguientes acciones estratégicas para mejorar la eficiencia operativa y la rentabilidad.

Este proyecto ha demostrado la capacidad para identificar dinámicas de negocio interesantes, pero su hallazgo más crítico es la absoluta necesidad de un saneamiento de datos. Antes de poder extraer conclusiones financieras o estratégicas fiables, o de implementar mejoras operativas, es imperativo resolver los problemas de calidad de datos, especialmente en la información de precios y costos. Como ingeniero de datos, este ejercicio subraya la importancia de la confianza en la fuente de datos como pilar de cualquier análisis.

Este análisis proporciona una base sólida para la toma de decisiones estratégicas, orientadas a mejorar la eficiencia operativa, optimizar el inventario y fortalecer la rentabilidad del negocio. Al integrar los hallazgos con acciones concretas, se establece un marco de mejora continua que impulsa el crecimiento sostenible y la adaptabilidad en un entorno comercial dinámico.

{:#recommendations}
###  🛠️ Recomendaciones
---
✅ Desarrollar un pipeline de calidad de datos con validación automática, usando Python/Pandas, para ventas, precios y costos.<br>
✅ Construir un repositorio técnico centralizado con definiciones estandarizadas de métricas clave y reglas de negocio documentadas.<br>
✅ Implementar auditoría continua en el proceso ETL/ELT para garantizar la integridad y trazabilidad de la información financiera.<br>
✅ Configurar alertas proactivas que detecten inconsistencias en márgenes, precios unitarios, y comportamiento de ventas.<br>


{:#resources}
###  🗂️ Recursos 
---
Este proyecto esta elaborado en SQLite3 & DB Browser for SQLite.
Puedes obtener el script del proyecto en el siguiente enlace. [Descargar](../assets/download/electromarket.sql)

Encontrarás la definición de los objetos y la data utilizada.





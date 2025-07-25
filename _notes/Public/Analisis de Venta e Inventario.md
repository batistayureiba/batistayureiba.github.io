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

![Definición de tablas](/assets/img/AVI/DDL00.png "Definición de tablas")

![Definición de tablas](/assets/img/AVI/DDL01.png "Definición de tablas")

![Inserción de datos](/assets/img/AVI/DML00.png "Inserción de datos")

![Inserción de datos](/assets/img/AVI/DML02.png "Inserción de datos")

Este conjunto de datos, aunque es de prueba, me permite efectuar elaborar los analisis del caso de estudio:

+ Ingrese más de 100 productos.
+ Los clasifiqué en al menos 7 categorías distintas.
+ Registré 20 tiendas de diferentes zonas.
+ Cargué los datos de 50 clientes.

Para evaluar flujo de la operación, incluí más de 1000 transacciones de venta.

En resumen, construí la base de datos con una estructura clara y la llené con datos controlados. Esto me permitió tener un entorno funcional para empezar a analizar y, al mismo tiempo, demuestra que la base de datos está pensada para crecer y soportar muchos más datos en el futuro. Es un diseño práctico y que puede escalarse.

En este sentido me pemiti contruir indices explicitos que pueden mejorar el rendimiento de la base de datos cuando su volumen de datos sea mayor.

![Creación de índices](/assets/img/AVI/DML05.png "Creación de índices")


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
     
     Este resultado nos muestra los ingresos totales para los años 2024 y 2025. Podemos observar una tendencia descendente significativa en los ingresos.
     En 2024, se generaron $1,087,901.24.
     Para 2025, los ingresos han caído a $440,220.75.

     Esto representa una disminución considerable. Considerando que 2025 aún no ha terminado, es crucial monitorear si esta tendencia continúa.
     
   - Promedio de venta por transacción
     ![Promedio de venta por transacción](/assets/img/AVI/q_1.2.png "Promedio de venta por transacción")
     
     Este dato nos indica que, en promedio, cada transacción de venta genera $976.44 en ingresos.
     Este es un valor importante porque si lo comparamos con el descenso en los ingresos generales (de la consulta anterior), siendo promedio alto por transacción puede
     sugerir que, aunque el valor individual de las ventas es bueno, quizás el número de transacciones ha disminuido significativamente, o que se están realizando menos
     ventas de alto valor que antes impulsaban el total.

   - Total de transacciones
     ![Total de transacciones](/assets/img/AVI/q_1.3.png "Total de transacciones")
     
     Este dato, por sí solo, es un conteo. Su verdadero valor analítico surge al contrastarlo con las tendencias temporales, la consulta de ingresos totales y la
     consulta venta promedio por transacción.

     Sabemos que el ingreso total se redujo drásticamente de 2024 a 2025, y que la distibucion del total de trasacciones es muy desigual, lo que podria explicar el
     decesenso en los ingresos, como concecuencia de la disminucion del volumen de ventas.

   - Tendencia de Ventas por Mes
     ![Tendencia de Ventas por Mes](/assets/img/AVI/q_1.4.png "Tendencia de Ventas por Mes")
     
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
     ![Esquema completo de DDBB](/assets/img/AVI/.png "Productos por ingresos")
     
     Esta lista nos revela los productos que más contribuyen a tus ingresos totales. Aquí destacamos que:

     Los primeros cinco productos son que superan la barrera de los $100,000 en ingresos, incluyendo producto con mayor cantidades de unidades vendidas, lo que sugiere
      que es son productos de alta demanda y precio accesible que se venden en volumen.

     Existen productos de alto valor que, aunque se vendan en menores unidades, generan altos ingresos individuales; y productos de menor precio pero alto volumen

     Finalmente tambien se evidencia una brecha considerable entre los primeros 5vproductos del vs el restode de la lista.
     
   - Top 10 Productos Más Vendidos por Cantidad de Unidades
     ![Esquema completo de DDBB](/assets/img/AVI/.png "Top 10 Productos Más Vendidos por Cantidad de Unidades")
     
     Esta consulta complementa la anterior al mostrar los productos que se venden en mayor volumen. Existe consistencia en los primeros seis productos en esta lista, son
     exactamente los mismos que en el Top 10 por Ingresos, y en el mismo orden. Esto refuerza la importancia del dichos productos como "productos estrellas", ya que lideran
     tanto en ingresos como en unidades vendidas.

     La aparición de nuevos productos a partir del séptimo puesto, la lista cambia, sugiere que son artículos de menor precio unitario pero que aun así tienen un buen
     volumen de venta.

   - Top 5 Categorías de Productos que Generan Más Ingresos
     ![Esquema completo de DDBB](/assets/img/AVI/.png "Top 5 Categorías de Productos que Generan Más Ingresos")
     
     La vista por categorías es fundamental para entender qué segmentos de tu negocio son los más rentables, en este sentido la categoría "Accesorios" domina completamente
      la generación de ingresos, con $459,580, casi el doble que la segunda categoría. También lidera en unidades vendidas (1635). Esto sugiere que los productos de menor
     recio unitario y alto volumen son un pilar de tu negocio.

     Las categorias de "Televisores" y "Cámaras" son categorías de alto valor unitario que contribuyen significativamente al total. Las categorias "Línea Blanca" y "Audio"
     en la parte baja del Top 5 están en un rango de ingresos similar, alrededor de los $180,000. Mientras que "Línea Blanca" tiene menos unidades
     endidas (691), lo que implica un precio unitario promedio más alto, "Audio" tiene más unidades vendidas (849), lo que sugiere un precio unitario promedio más bajo.


   - Productos con bajo rendimiento
     ![Esquema completo de DDBB](/assets/img/AVI/.png "Productos con bajo rendimiento")

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
     ![Esquema completo de DDBB](/assets/img/AVI/.png "Total de clientes únicos")

     Existe un total de 50 clientes únicos registrados en tu base de datos. Revelando un alcance limitado, este número, en el contexto de ventas que superan el millón de
     dólares en 2024 y casi medio millón en 2025 (según la Consulta 1.1), sugiere que tu negocio tiene una base de clientes relativamente pequeña, pero que realizan
     compras de alto valor o con una frecuencia considerable.

     Esto implica que la retención de clientes y la maximización del valor de cada cliente (CLV) deben ser prioridades estratégicas clave para ElectroMarket.
     La pérdida de incluso unos pocos clientes podría tener un impacto significativo en los ingresos.

     Este dato también resalta una clara oportunidad para la adquisición de nuevos clientes. Si bien los 50 clientes actuales generan ingresos sustanciales, expandir
      la base de clientes podría ser vital para contrarrestar la tendencia descendente de ingresos observada y para el crecimiento a largo plazo.

   - Top 10 clientes por gasto promedio
     ![Esquema completo de DDBB](/assets/img/AVI/.png "Top 10 clientes por gasto promedio")
   - Recencia por cliente
     ![Esquema completo de DDBB](/assets/img/AVI/.png "Recencia por cliente")
   - Pares de productos comprados juntos
     ![Esquema completo de DDBB](/assets/img/AVI/.png "Pares de productos comprados juntos")

4. Análisis de Rendimiento de Tiendas
   -  Análisis de tiendas (por ingresos)
     ![Esquema completo de DDBB](/assets/img/AVI/.png "Análisis de tiendas (por ingresos)")
   -  Promedio de venta por tienda
     ![Esquema completo de DDBB](/assets/img/AVI/.png "Promedio de venta por tienda")
   -  Ingreso total por región
     ![Esquema completo de DDBB](/assets/img/AVI/.png "Ingreso total por región")

5. Análisis de Precios de Venta 
   -  Análisis de precio promedio por producto
     ![Esquema completo de DDBB](/assets/img/AVI/.png "Análisis de precio promedio por producto")
   -  Desviación estándar aproximada de precios
     ![Esquema completo de DDBB](/assets/img/AVI/.png "Desviación estándar aproximada de precios")
   -  Margen promedio general
     ![Esquema completo de DDBB](/assets/img/AVI/.png "Margen promedio general")
   -  Productos con margen negativo
     ![Esquema completo de DDBB](/assets/img/AVI/.png "Productos con margen negativo")
   -  Comparación de precio de venta promedio vs costo
     ![Esquema completo de DDBB](/assets/img/AVI/.png "Comparación de precio de venta promedio vs costo")

{:#conclu}
### Conclusiones y recomendaciones
---
Destaque las habilidades de Ingeniero de Datos demostradas (modelado de datos, DDL, DML, SQL avanzado, análisis de datos, extracción de insights).

1. Análisis de Rendimiento de Venta General
   Es un buen punto de referencia. Para determinar si este promedio es "bueno" o "malo", necesitaríamos compararlo con promedios históricos, con la competencia,
   o con los objetivos de negocio. Sin embargo, por sí mismo, nos dice que cada vez que se cierra una venta, aporta casi mil dólares.
   
2. Análisis de Rendimiento de Productos
3. Análisis de Comportamiento del Cliente
4. Análisis de Rendimiento de Tiendas
5. Análisis de Precios de Venta 


{:#resources}
###  Recursos 
---
Proporcione instrucciones claras sobre cómo alguien puede replicar tu trabajo (ej. "clonar el repo, ejecutar schema.sql, luego insert_data.py o insert_data.sql").

Este proyecto esta elaborado en SQLite3 & DB Browser for SQLite.

Puedes obtener el script del proyecto en el siguiente enlace. [Descargar](../blob/master/script.sql)

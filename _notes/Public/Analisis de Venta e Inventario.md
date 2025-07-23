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

{:#conclu}
### Conclusiones
---
Completado el diseño fisico de la base de datos. Podemos comenzar a listar las preguntas de analisis y e interpretar los resultados obtenidos

1. Análisis de Rendimiento de Venta General
   1. Ingreso por año
   2. Promedio de venta por transacción
   3. Total de transacciones
   4. Tendencia de Ventas por Mes

3. Análisis de Rendimiento de Productos
   - Productos por ingresos
   - Top 10 Productos Más Vendidos por Cantidad de Unidades
   - Top 5 Categorías de Productos que Generan Más Ingresos
   - Productos con bajo rendimiento

4. Análisis de Rendimiento de Productos
...* Productos por ingresos
...* Top 10 Productos Más Vendidos por Cantidad de Unidades 
...* Top 5 Categorías de Productos que Generan Más Ingresos 
...* Productos con bajo rendimiento

5. Análisis de Comportamiento del Cliente
...* Total de clientes únicos
...* Top 10 clientes por gasto promedio
...* Recencia por cliente
...* Pares de productos comprados juntos

6. Análisis de Rendimiento de Tiendas
...* Análisis de tiendas (por ingresos)
...* Promedio de venta por tienda
...* Ingreso total por región

7. Análisis de Precios de Venta 
...* Análisis de precio promedio por producto
...* Desviación estándar aproximada de precios
...* Margen promedio general
...* Productos con margen negativo
...* Comparación de precio de venta promedio vs costo


{:#resources}
###  Recursos 
---
Este proyecto esta elaborado en SQLite3 & DB Browser for SQLite.

Puedes obtener el script del proyecto en el siguiente enlace. [Descargar](../blob/master/script.sql)

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

{:#load}
###  Generacion e inserción de datos 
---

{:#queries}
### Consultas
--- 
texto

Diagrama Entidad relación ElectroMarket

![Diagrama entidad relación de la Base de Datos ElectroMarket](/assets/img/ElectroMarket_DER.png "DER - EletroMarket")

{:#conclu}
### Conclusiones
---
consultas

```sql
SELECT NULL AS IngresosXAnnio, SUBSTR(vtaFecha,0,5) AS annio, SUM(vtaTotal) AS total_ingreso
FROM venta
GROUP BY annio
LIMIT 5;
```
 
```python
s = "Python syntax highlighting"
print s
```

License: CC-BY

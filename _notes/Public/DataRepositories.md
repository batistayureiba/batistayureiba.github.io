---
title : Fundamentos de los Almacenes de Datos
feed: show
date : 31-05-2025
---

Data Warehouse
Un almacén de datos es un sistema que agrega datos de una o más fuentes en un único almacén de datos central y coherente para dar soporte a diversos requisitos de análisis de datos.

Los almacenes de datos soportan:
Mineria de datos
Inteligencia de datos
Aprendizaje automatico
Reportes
Procesamiento analitico en linea

Beneficios de los data warehouse
Centraliza datos de diversas fuentes
Crea una unica fuente de información 
Aprovecha todos los datos a la vez que mejora la velocidad de acceso
Facilita decisiones mas inteligentes usando BI que se traducen en:
Mejor calidad de los datos
Perspectivas empresariales más rápidas
Decisiones más inteligentes
Ventajas y ganancias competitivas

Los sistemas de almacenamiento de datos más populares. 

La mayoría de los sistemas de almacenamiento de datos son compatibles con una o más de tres plataformas. En primer lugar, están los dispositivos, que son paquetes preintegrados de hardware y software que proporcionan un alto rendimiento para las cargas de trabajo y reducen los gastos de mantenimiento.

Por ejemplo:

Oracle Exadata: Desplegable en implemetaciones locales y Oracle Public Cloud. Incluye algoritmos integrados y ejecuta todo tipo de cargas de trabajo, incluidas las OLTP, el análisis de almacenes de datos, el análisis en memoria y las cargas de trabajo mixtas. 

IBM Netezza: Puede implementar IBM Netezza en IBM Cloud, Amazon Web Services, Microsoft Azure y nubes privadas mediante el IBM Cloud Pak for Data System. IBM Netezza es ampliamente reconocida por sus capacidades de ciencia de datos y aprendizaje automático.

Otros proveedores solo admiten las implementaciones en la nube, lo que ofrece las ventajas de la escalabilidad de la nube y la economía de pago por uso y, en muchos casos, ofrecen sus almacenes de datos como servicios totalmente gestionados.

Por ejemplo:

Amazon RedShift: utiliza hardware y software propietario específicos de Amazon Web Services en la nube para acelerar la compresión y el cifrado de datos, el aprendizaje automático y los algoritmos de optimización de gráficos que organizan y almacenan los datos automáticamente.

Snowflake: ofrece una solución de análisis multinube que cumple con las normas de privacidad de datos del GDPR y la CCPA. Snowflake anuncia su sistema de cifrado permanente de los datos en tránsito y en reposo. Snowflake está autorizado por FedRAMP Moderate.

Google BigQuery: Se describe como un sistema de almacenamiento de datos flexible multinube». el tiempo de actividad del almacén de datos es del 99,99% y ofrece tiempos de respuesta a las consultas inferiores a un segundo desde cualquier herramienta de inteligencia empresarial. El sistema de Google BigQuery especifica una velocidad de petabytes y una simultaneidad masiva para ofrecer análisis en tiempo real.

Ahora echemos un vistazo a los proveedores que ofrecen sistemas de almacenamiento de datos tanto locales como basados en la nube.

Microsoft Azure Synapse Analytics: ofrece procesos ETL/ELT visuales sin código para ingerir datos de más de 95 conectores nativos. Azure Synapse Analytics admite casos de uso de lagos de datos y almacenes de datos y admite el uso de T-SQL, Python, Scala, Spark SQL y dot Net tanto para recursos dedicados como sin servidor.

Teradata Vantage: adopta un enfoque ligeramente diferente. Teradata Vantage anuncia su plataforma de datos multinube para el análisis empresarial, que unifica los lagos de datos, los almacenes de datos, los análisis y las nuevas fuentes y tipos de datos. Teradata Vantage combina tecnologías comerciales y de código abierto para poner en práctica la información y ofrecer rendimiento para cargas de trabajo mixtas con una alta concurrencia de consultas mediante la gestión de la carga de trabajo y la optimización adaptativa. Como soporte, Teradata proporciona un punto de contacto único para los servicios de tareas operativas, como la supervisión, las solicitudes de cambios, el ajuste del rendimiento, la gestión de la seguridad y la elaboración de informes. 

IBM Db2 Warehouse:  es ampliamente reconocido por su escalabilidad, sus capacidades de procesamiento masivo en paralelo, sus velocidades de petaflop, sus funciones de seguridad y su tiempo de actividad del servicio del 99,99%. IBM Db2 Warehouse proporciona una solución de almacenamiento de datos escalable en contenedores.
Puede mover las cargas de trabajo donde sea necesario, incluida la nube pública, la nube privada o las instalaciones, con cambios mínimos o nulos. 

Vertica: otro conocido sistema de almacenamiento de datos de nube híbrida, ofrece soporte multicloud para Amazon Web Services, Google, Microsoft Azure y hardware Linux local. Vertica presenta velocidades de transferencia de datos rápidas de varios GB, capacidad de procesamiento y almacenamiento escalables y elásticos y una notable tolerancia a los fallos del sistema cuando utiliza el modo Eon. 

Oracle Autonomous Data Warehouse: se ejecuta en Oracle Public Cloud y de forma local, y admite datos de varios modelos y múltiples cargas de trabajo. Oracle describe su sistema como diseñado para eliminar la gestión manual de datos e informa de que proporciona amplias funciones de seguridad automatizadas, como el cifrado autónomo de datos tanto en reposo como en movimiento, la protección de los datos regulados, la aplicación de parches de seguridad y la detección de amenazas. 

Criterios para la seleccion de un sistema de almacenamiento de datos

Características y capacidades:

1. las consideraciones de compatibilidad e implementación, 
2. la facilidad de uso y las habilidades, 
3. las consideraciones de soporte 
4. los costos. 

1. las consideraciones de compatibilidad e implementación:
Una de las principales características o consideraciones del almacén de datos para una organización es la ubicación. Los almacenes de datos pueden existir de forma local, en dispositivos y en una o más ubicaciones en la nube.

 Para seleccionar una ubicación, las organizaciones deben equilibrar las múltiples demandas relacionadas con la ingesta, el almacenamiento y el acceso a los datos. 
 
 Para algunas organizaciones, la protección de sus datos es su máxima prioridad y requieren una solución local obligatoria. Las empresas con múltiples ubicaciones que cumplen requisitos de privacidad de datos, como la CCPA o el GDPR, necesitan ubicaciones de almacenamiento de datos locales o geoespecíficas. 
 
 Todas las organizaciones equilibran los requisitos de seguridad y privacidad de los datos con la necesidad de velocidad para ofrecer información empresarial fundamental que genere beneficios.

Data Marts 

Un data mart es una parte aislada del almacén de datos empresarial más grande que está diseñado específicamente para servir a una función empresarial, un propósito o una comunidad de usuarios en particular. Por ejemplo, los departamentos de ventas y finanzas de una empresa pueden tener acceso a mercados de datos específicos que proporcionan los datos necesarios para sus informes y proyecciones de ventas trimestrales.

La estructura típica de un data mart es una base de datos relacional con una estrella o, más a menudo, un esquema de copo de nieve, lo que significa que contiene una tabla de datos central que consiste en las métricas empresariales relevantes para un proceso empresarial, que está rodeada por una jerarquía relacionada de tablas de dimensiones que proporcionan contexto para los hechos. 

Veamos algunas diferencias típicas entre tres tipos de repositorios de datos: data marts, bases de datos transaccionales y data warehouses, empezando por los data marts y bases de datos. 

Tanto los data marts como los almacenes de datos son sistemas de procesamiento analítico en línea (OLAP) optimizados para consultas y operaciones de lectura intensiva, mientras que las bases de datos transaccionales son sistemas de procesamiento de transacciones en línea (OLTP) que están optimizados para consultas y aplicaciones de escritura intensiva.


Los data marts utilizan bases de datos transaccionales o almacenes de datos como fuentes de datos, mientras que en las bases de datos transaccionales, las aplicaciones operativas, como los sistemas de puntos de venta, sirven como fuentes de datos.

Un data mart almacena datos validados, transformados y limpiados, mientras que una base de datos tendrá datos sin procesar que aún no se han limpiado. Los data marts acumulan datos históricos que se pueden utilizar para el análisis de tendencias, mientras que las bases de datos transaccionales no siempre almacenan datos antiguos. 

Un data mart es muy parecido a un almacén de datos, excepto que tiene un alcance táctico más reducido. Los almacenes de datos respaldan en general los requisitos estratégicos de la empresa. Los data marts son ágiles y rápidos en comparación con los almacenes de datos, que pueden ser muy grandes y, por lo tanto, más lentos.

Existen tres tipos básicos de data marts: dependientes, independientes e híbridos. La diferencia entre estos tres tipos de data marts depende de su relación con el almacén de datos y las fuentes utilizadas para suministrar los datos a cada uno de ellos. 

Los data marts dependientes extraen datos del almacén de datos empresarial, mientras que los data marts independientes eluden el almacén de datos y se crean directamente a partir de fuentes, que pueden incluir sistemas operativos internos o datos externos de proveedores u otras fuentes ajenas a la empresa.
Los data marts híbridos solo dependen parcialmente del almacén de datos empresarial. Combinan las entradas de los almacenes de datos con los datos de los sistemas operativos y otros sistemas externos al almacén.

Los data marts dependientes ofrecen capacidades analíticas dentro de un área restringida del almacén de datos empresarial. Por lo tanto, heredan la seguridad que viene con el almacén de datos empresarial. Y dado que los data marts dependientes extraen los datos directamente del almacén de datos, donde los datos ya se han limpiado y transformado, suelen tener canalizaciones de datos más sencillas que los data marts independientes.

Los data marts independientes se diferencian de los data marts dependientes porque requieren canalizaciones personalizadas de extracción, transformación y carga de datos para llevar a cabo los procesos de transformación e integración de los datos de origen, ya que provienen directamente de sistemas operativos y fuentes externas, y los data marts independientes también pueden requerir medidas de seguridad independientes. 

Data Lakes 
Un lago de datos es un repositorio de almacenamiento que puede almacenar grandes cantidades de datos estructurados, semiestructurados y no estructurados en su formato nativo, clasificados y etiquetados con metadatos.

Mientras que un almacén de datos almacena los datos procesados para una necesidad específica, un lago de datos es un conjunto de datos sin procesar en el que cada elemento de datos recibe un identificador único y se etiqueta con metatags para su uso posterior. Optaría por un lago de datos si genera grandes cantidades de datos de forma continua o si tiene acceso a ellas, pero no quiere limitarse a casos de uso específicos o predefinidos.

Un lago de datos es un repositorio de datos que puede almacenar una gran cantidad de datos estructurados, semiestructurados y no estructurados en su formato nativo. No es necesario definir la estructura y el esquema de los datos antes de cargarlos en el lago de datos. Ni siquiera necesita conocer todos los casos de uso para los que analizará los datos. Un lago de datos existe como un repositorio de datos sin procesar, directamente desde la fuente, para transformarlos en función del caso de uso para el que se deban analizar, lo que no significa que un lago de datos sea un lugar al que se puedan descargar datos sin control.

Algunos de los proveedores que ofrecen tecnologías, plataformas y arquitecturas de referencia para los lagos de datos son: Amazon Cloudera, Google, IBM Informatica, Microsoft Oracle SAS, Snowflake, Teradata y Zaloni. 
Data LakeHouse

Es una arquitectura de datos que combina las fortalezas de un data lake y un data warehouse. Permite almacenar datos de manera flexible y a bajo costo, al tiempo que ofrece funciones de gestión y análisis de datos estructurados. 

En resumen, un data lakehouse:
Almacena datos sin procesar (como un data lake), pero también datos estructurados (como un data warehouse) . 
Ofrece flexibilidad para diversos tipos de datos: (estructurados, semiestructurados y no estructurados). 
Facilita el análisis de datos, la inteligencia empresarial y el aprendizaje automático . 
Reduce la necesidad de duplicar datos y procesos ETL . 
Permite una gestión más eficiente de los datos y una mejor gobernanza . 
Beneficios de un data lakehouse:
Unificar la gestión de datos:
Permite a los equipos de datos acceder a los datos desde una única fuente, lo que reduce la complejidad y los costos. 
Mejorar la gobernanza y la seguridad de los datos:
Ofrece herramientas para gestionar el ciclo de vida de los datos, desde la recopilación hasta la eliminación, lo que garantiza que se utilicen de forma segura y rentable. 
Acelerar los análisis y la toma de decisiones:
Facilita la creación de modelos de aprendizaje automático y la generación de informes de inteligencia empresarial a partir de los mismos datos. 
Reducir costos:
El almacenamiento de datos sin procesar a bajo costo reduce la necesidad de procesos ETL y la duplicación de datos. 
Escalabilidad:
Permite escalar la capacidad de computación y almacenamiento independientemente, según las necesidades del negocio


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

las consideraciones de compatibilidad e implementación, 
la facilidad de uso y las habilidades, 
las consideraciones de soporte 
los costos. 

Una de las principales características o consideraciones del almacén de datos para una organización es la ubicación. Los almacenes de datos pueden existir de forma local, en dispositivos y en una o más ubicaciones en la nube. Para seleccionar una ubicación, las organizaciones deben equilibrar las múltiples demandas relacionadas con la ingesta, el almacenamiento y el acceso a los datos. Para algunas organizaciones, la protección de sus datos es su máxima prioridad y requieren una solución local obligatoria. Las empresas con múltiples ubicaciones que cumplen requisitos de privacidad de datos, como la CCPA o el GDPR, necesitan ubicaciones de almacenamiento de datos locales o geoespecíficas. Todas las organizaciones equilibran los requisitos de seguridad y privacidad de los datos con la necesidad de velocidad para ofrecer información empresarial fundamental que genere beneficios.

Las organizaciones también querrán considerar las características y capacidades relacionadas con la arquitectura y la estructura. ¿Está la organización preparada para comprometerse con una arquitectura específica del proveedor?

¿Necesita la organización una instalación multinube, como varios almacenes de datos en varias ubicaciones? ¿La solución se amplía para satisfacer las necesidades futuras previstas? ¿Qué tipos de datos se admiten y qué tipos de datos ingiere la organización? Si su organización analiza actualmente datos oscuros o planea implementar el uso de datos semiestructurados y no estructurados, querrá un sistema de almacenamiento de datos que admita estos tipos de datos. Además, una organización que procesa macrodatos necesita un sistema que admita datos por lotes y en streaming. Las capacidades que afectan a la facilidad de implementación incluyen las capacidades de gobierno, migración y transformación de datos. Una vez implementado el sistema de almacenamiento de datos, ¿con qué facilidad puede la organización optimizar y reoptimizar el rendimiento del sistema a medida que cambien las necesidades? Otra consideración es la administración de usuarios. Dado que cada vez más organizaciones implementan una política de seguridad de confianza cero debido a las costosas violaciones de datos, es obligatorio implementar programas que administren y validen a los usuarios del sistema. Además, las notificaciones y los informes son esenciales para que las organizaciones corrijan los errores y mitiguen los riesgos antes de que los problemas menores se conviertan en problemas mayores. Exploremos la facilidad de uso y las habilidades. ¿El personal de su organización tiene las habilidades necesarias para implementar la tecnología de un proveedor de almacenamiento de datos específico y, de no ser así, con qué rapidez y facilidad pueden adquirir esas habilidades? Las implementaciones de almacenes de datos grandes y complejas pueden requerir trabajo adicional por parte de su socio de implementación, por lo que su experiencia también es muy importante.
Play video starting at :3:43 and follow transcript3:43
Por último, ¿el personal de tecnología e ingeniería que diseña, implementa y administra las herramientas de consulta, elaboración de informes y visualización front-end tiene las habilidades necesarias para configurar su nuevo sistema rápidamente? A continuación, repasemos algunas consideraciones de soporte. El soporte es esencial y puede resultar frustrante y costoso si no se planifica bien. Puede darse cuenta de que, al utilizar un solo proveedor, puede recurrir a una fuente altamente responsable y responsable, lo que podría ahorrarle tiempo, dinero y frustraciones. También querrá comprobar la disponibilidad de los acuerdos de nivel de servicio en relación con el tiempo de actividad, la seguridad, la escalabilidad y otros problemas del sistema de almacenamiento de datos.
Play video starting at :4:25 and follow transcript4:25
Valide el horario y los canales de soporte del proveedor, por ejemplo, por teléfono, correo electrónico, chat o mensaje de texto. Por último, ¿ofrece el proveedor soluciones de autoservicio y una comunidad de usuarios rica y activa? Tras todo este análisis, es hora de evaluar y comparar los costes. Al calcular los costos de un sistema de almacenamiento de datos, tenga en cuenta algo más que los costos iniciales. Tenga en cuenta el costo total de propiedad, o TCO, de los sistemas en funcionamiento durante varios años. El TCO incluye: los costos de infraestructura, como los costos de computación y almacenamiento, ya sean locales o en la nube; las licencias de software o, en el caso de las ofertas en la nube, sus costos de suscripción o uso; los costos de migración e integración de datos para mover los datos
Play video starting at :5:11 and follow transcript5:11
al almacén y eliminarlos según sea necesario; los costos de administración del personal que administra los sistemas y los capacita; y los costos recurrentes de soporte y mantenimiento pagados al proveedor de almacenamiento o al socio de implementación. En este vídeo, aprendió que: las empresas evalúan los sistemas de almacenamiento de datos en función de las características y capacidades, la compatibilidad y la implementación, la facilidad de uso y las habilidades requeridas, la calidad y disponibilidad del soporte y múltiples consideraciones de costos. Es posible que una organización necesite una instalación local tradicional para cumplir con los requisitos de seguridad y privacidad de los datos. Los sitios de nube pública ofrecen a las organizaciones los beneficios de las economías de escala, incluida una potente potencia de procesamiento y un almacenamiento escalable, lo que se traduce en opciones flexibles de precio en función del rendimiento. Además, al seleccionar un sistema de almacenamiento de datos, tenga en cuenta en sus cálculos el costo total de propiedad, incluidos los costos de infraestructura, procesamiento y almacenamiento, migración de datos, administración y mantenimiento de datos.
Data Marts, Data Lakes, DataWarehouse, Data Lake House


# Descripción del proyecto
**Desarrollo de un visor web de cartografía interactiva para monitorear indicadores urbanos en Brasil.**

**Resumen:** El objetivo de este proyecto es crear un visor web que permita visualizar y analizar diferentes mapas relacionados con el crecimiento urbano y la formación de barrios marginales en tres regiones metropolitanas de Brasil. El visor se basa en los resultados de mi tesis de máster en Geo-Information Science, donde calculé dos indicadores de los Objetivos de Desarrollo Sostenible (ODS) de las Naciones Unidas: el 11.1.1 (porcentaje de población que vive en barrios marginales) y el 11.3.1 (relación entre la tasa de consumo de suelo y la tasa de crecimiento de la población). El visor pretende ser una herramienta útil para comprender mejor la dinámica urbana y social de los barrios marginales y proporcionar información para diseñar políticas eficaces y sostenibles.

**Justificación:** El crecimiento urbano rápido e incontrolado y el aumento de la población pueden provocar problemas ambientales y sociales, siendo la formación de barrios marginales uno de ellos. Brasil es un país que experimentó un rápido crecimiento urbano durante las últimas décadas y cuyas favelas son especialmente conocidas. Sin embargo, no existen muchas plataformas web que permitan acceder fácilmente a los datos geográficos e indicadores relacionados con esta cuestión. Por eso, este proyecto busca llenar ese vacío y ofrecer una solución innovadora basada en tecnologías web abiertas y gratuitas. Además, este proyecto busca de alguna manera completar mi tesis de máster, donde presenté muchos mapas sobre el tema, pero sin un soporte de cartografía interactiva y online.

**Objetivos:** Los objetivos específicos del proyecto son:
- Desarrollar un visor web que muestre diferentes mapas temáticos sobre el crecimiento urbano y las favelas en tres regiones metropolitanas de Brasil: São Paulo, Rio de Janeiro y Belo Horizonte.
- Incorporar funcionalidades interactivas al visor, como pop-ups informativos, cambios de estilo, selección de mapas...
- Integrar los datos e indicadores calculados en mi tesis de máster sobre las regiones metropolitanas brasileñas.

**Desarrollo:** El desarrollo del visor web se realizará usando las siguientes tecnologías:
- **Leaflet:** Es una librería open source para crear mapas interactivos en la web. Se ha elegido por su buena documentación, su amplia comunidad de usuarios y desarrolladores, y su facilidad de uso e integración con otras librerías.
- **JavaScript, HTML y CSS:** Son los lenguajes básicos para programar la interfaz web del visor. Se ha optado por usar plain JavaScript, HTML y CSS en lugar de algún framework por limitaciones de tiempo y para simplificar el código.
- **GeoJSON:** Es un formato estándar para representar datos geográficos en la web. Se ha usado para almacenar los datos geográficos del proyecto en la carpeta ./data, ya que no se dispone de ningún servidor hosteado para usar GeoServer u otra herramienta similar. Esta opción facilita la visualización de los datos en el visor web y la reproducibilidad del código por parte de los profesores. En una situación ideal con todas las herramientas disponibles, se hubiera usado GeoServer como backend geográfico para gestionar los datos espaciales.

El desarrollo del visor web consta de los siguientes pasos:
1. Instalar Leaflet y otras librerías necesarias para el proyecto.
2. Crear los mapas temáticos usando Leaflet y los datos geográficos almacenados en formato GeoJSON.
3. Programar y diseñar la apariencia visual del visor web usando HTML y CSS para crear un estilo limpio y atractivo. Se ha incluido una sidebar lateral con descripción del proyecto y una topbar con botones para cambiar de mapa. Las barras tienen un color blanco que contrasta con el fondo oscuro del mapa.
4. Integrar los datos e indicadores calculados en mi tesis con los mapas temáticos usando Leaflet y JavaScript para crear funcionalidades interactivas.
5. Probar el funcionamiento del visor web y corregir posibles errores o mejoras.

Dado que el proyecto tiene una duración limitada de pocas semanas y a ciertas limitaciones tecnológicas, el visor web no reflejará todo el estudio sino que será una pequeña demostración que mostrará algunas capas e indicadores relevantes.

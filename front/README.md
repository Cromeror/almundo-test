## FrontEnd
### Configuración
En la carpeta **/front/config** se encuentra un archivo **localConfig.js** el cual debe contener lo siguiente:
```sh
   export const apiUrl = "http://localhost:XXX"
```
Donde *http://localhost:XXX* corresponde a la url donde se encuentra la API ejecutandose.

### Ejecutando el frontent
  - Usando la terminar navegamos hasta la la carpeta **/front** del proyecto.
  - Ejecuta el comando **npm i**
  - Despues de esperar la instalación de dependencias, debemos ejecutar el comando **npm run dev**
  - Deberá aparecer un mensaje con lo siguiente: *｢wdm｣: Compiled successfully.*

**Nota:** Estar atento al momento de ejcutar el front aparecerá un mensaje que dice:
```sh
｢wds｣: Project is running at http://localhost:8080/
```
Por defecto el front se ejecuta en el *http://localhost:8080/*
  

# API-SaveTheOcean
## Intro

Esta API está diseñada para ser consultada por una aplicación fron-end que se encargará de requerir la información solicitada de cada especie que está en peligro de extinción, a través de distintos endpoints definidos en `/lib/server.js`. Ya sea por su nombre, su ID o requerir todas las especies almacenadas.

El proyecto fue diseñado en el sistema operativo ubuntu 20.04 LTS

**¡Accede a la API!**: https://oceandex.azurewebsites.net

## Requisitos

+ Tener instalada la versión 12 de postgresql
+ Tener instalado node 16.15.0
+ Si quieres desplegarlo en azure, necesitarás una cuenta de azure

### Instalación

1. Para poder clonar y utilizar efectivamente este proyecto ejecuta:
```
git clone git@github.com:3rickDJ/API-SaveTheOcean.git
```
2. Instala las dependencias con `npm install`
3. Crea un archivo `.env` en la raiz de tu repositorio y configura la variable `DATABASE_URL`, copia la linea de código según sea tu caso
```
// si estas ejecutando en local, copia la siguiente linea
DATABASE_URL="postgresql://{user}:{password}@localhost:5432/{table}?schema=public"
```
5. Inicia el servidor con el comando `npm run start`
7. Podrás entrar a la url: `http://localhost:3000/` para consultar la API
#### Si planeas utilizar Azure
1. Realiza un fork de este repositorio
2. Crea tu base de datos y tu web app en Azure
    1. Inicia sesión
    2. Busca el sevicio de **App Service** en la barra de búsqueda y crea un nuevo App Service con Node versión 16 LTS
    3. Busca el servicio de **Database for postgreSQL** en la barra de búsqueda y clickea en el apartado **PostgreSQL flexible server**. Crea tu base de datos (postgres versión 11) y asegúrate de permitir la conexión a esta base de datos desde la dirección **IP** de tu **App Service**.
        + Guarda tu usuario y contraseña
        + Dirígete al panel de configuración de tu base de datos; en tu barra lateral izquierda clickea en ***Connection String*** y guarda la sección `PostgreSQL connection URL`. A través de esta url nos comunicaremos con nuestra base de datos
      
4. Ingresa a Azure Portal. En la barra lateral izquierda busca el apartado y entra a **Deployment Center**. Una vez ahí:
    1. En el apartado **Source**  selecciona GitHub. Ingresa a tu cuenta de GitHub y otórgale permisos a Azure para acceder a tus repositorios.
    2. En **Organization** selecciona tu usuario, tu repositorio y la rama que deseas desplegar.
    3. Podrás visualizar un workflow. El cual se agregará a tu **GitHub Actions**.
    4. Al entrar a tu repositorio en GitHub, notarás que se ha hecho un commit agregando un solo archivo (el Workflow). Este workflow carga tu repositorio en una VR (Virtual Machine); instala las dependencias; ejecuta los test; si los test pasaron, empezará a comprimir y desplegar tu repositorio en la **App Service de Azure**

#### Desplegar usando FTPS

Alternativamente puedes utilizar un cliente FTP para acceder a tu **App Service**. Por ejemplo FileZilla. Simplemente completa hasta el paso 3 de la sección anterior ('Si planeas utilizar Azure'), configura tu .env (crea la variable `DATABASE_URL` y configurala) adecuadamente y configura tu cliente FTP para acceder al endpoint de tu App Service. Tanto el FTPS endpoint, como el usuario y contraseña los encontrarás en Azure Portal, en la misma sección de **Deployment Center**, en la pestaña de ***FTPS credentials***.

En tu archivo .env, situado en la raíz de tu projecto agrega lo siguiente
```
DATABASE_URL="postgres://{user}:{password}@{url}=require"
```

### EndPoints
Descripción y path de todos los endpoints:

+ Obtener todas las especies, path: `/especies`
+ Obtener especie por id, path: `/especies/:id`
+ Obtener especie por nombre, path: `/especies/name/:name`

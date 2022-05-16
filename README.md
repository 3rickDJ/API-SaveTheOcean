# API-SaveTheOcean
## Intro

Esta API está diseñada para ser consultada por una aplicación fron-end que se encargará de requerir la información solicitada de cada especie que está en peligro de extinción, a través de distintos endpoints definidos en `/lib/server.js`. Ya sea por su nombre, su ID o requerir todas las especies almacenadas.

El proyecto fue diseñado en el sistema operativo ubuntu 20.04 LTS

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
Después del paso 2 del procedimiento
1. Crea un archivo `.env` en la raiz de tu repositorio y configura la variable `DATABASE_URL`, copia la linea de código según sea tu caso.
 `nota`: Necesitas haber creado una **Web app** y una base de datos para **Postgres**(aquí consigues el user, password y url), ambas alojadas en Azure y configurar la base de datos para admitir peticiones por parte de la web app.
// O si ya tienes una base de datos lista como servidor, copia la siguiente linea y reemplaza según corresponda
DATABASE_URL="postgres://{user}:{password}@{url}=require"
2. Configura tu **Web App** para realizar el deployment con tu repositorio de GitHub (local git, ftp), sigue los pasos que se te indican, otorga permisos para acceder a tu cuenta de GitHub. Se te mostrará un preview del workflow que se agregará a tu repositorio. Acéptalo y en consecuencia tendrás un nuevo workflow en tu **GitHub Actions**. Este workflow carga el repositorio, instala las dependencias del package.json , ejecuta los tests, comprime y transfiere los datos al servidor de tu Web App. ***IMPORTANTE***: Este workflow lo realiza cada commit. 
3. Podrás acceder a tu servidor y realizar peticiones a tu API en la url de tu **Web App** creada y hosteada por Azure

### EndPoints
Descripción y path de todos los endpoints:

+ Obtener todas las especies, path: `/especies`
+ Obtener especie por id, path: `/especies/:id`
+ Obtener especie por nombre, path: `/especies/name/:name`

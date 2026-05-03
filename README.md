# Portafolio API

API REST desarrollada con **Node.js** y **Express** para servir la información estática del portafolio: proyectos y habilidades. Pensada para ser consumida por un front-end (por ejemplo React) y puede alojarse en **Vercel** u otros entornos Node.

## Producción en Vercel

Sustituye la URL siguiente por la de tu proyecto en el dashboard de Vercel (`Settings → Domains`):

**URL base:** `https://TU-PROYECTO.vercel.app`

> Actualiza ese enlace en este README cuando tengas el dominio definitivo.

## Características

- Respuestas en **JSON**
- **CORS** habilitado para consumo desde otros orígenes
- Datos definidos en el servidor (**en memoria**), sin persistencia externa por ahora

## Stack

| Tecnología | Uso |
|------------|-----|
| [Node.js](https://nodejs.org/) | Motor de ejecución |
| [Express 5](https://expressjs.com/) | Framework HTTP |
| [cors](https://www.npmjs.com/package/cors) | Cabeceras CORS |

En `package.json` también figura **`mysql2`** como dependencia futura si migras los datos a MySQL.

## Endpoints

| Método | Ruta | Descripción |
|--------|------|-------------|
| `GET` | `/` | Comprueba que la API responde |
| `GET` | `/api/proyectos` | Lista de proyectos del portafolio |
| `GET` | `/api/habilidades` | Lista de habilidades y niveles |

### Ejemplo (raíz)

```http
GET /
```

Respuesta ejemplo:

```json
{
  "mensaje": "API del Portafolio funcionando ✅"
}
```

### Ejemplo proyectos / habilidades

```bash
curl https://TU-PROYECTO.vercel.app/api/proyectos
curl https://TU-PROYECTO.vercel.app/api/habilidades
```

## Estructura del repositorio

```
portafolio-API/
├── index.js           # Servidor Express, rutas y datos en memoria
├── package.json
├── package-lock.json
└── src/               # Carpeta reservada (actualmente sin archivos)
```

## Requisitos

- **Node.js** versión recomendada: **18** o superior (LTS).

## Instalación y uso en local

```bash
git clone <URL-de-tu-repositorio>
cd portafolio-API
npm install
```

| Script | Descripción |
|--------|-------------|
| `npm start` | Ejecuta `node index.js` |
| `npm run dev` | Ejecuta con **nodemon** (recarga al guardar cambios) |

Por defecto el servidor escucha en el **puerto 3000**:

- Servidor: [http://localhost:3000](http://localhost:3000)

## Despliegue en Vercel

1. Conecta este repositorio en [vercel.com](https://vercel.com) (**Add New → Project**).
2. Elige el preset adecuado para una app Node si el builder lo solicita y define el comando de instalación habitual (`npm install`).
3. Asegura que el proyecto arranque como indica tu configuración actual en Vercel (muchas configuraciones exponen esta API como servidor Node o mediante funciones sin estado; revisa los logs si algo falla al desplegar).
4. Tras el despliegue, prueba `/`, `/api/proyectos` y `/api/habilidades` con la URL pública que te asigne Vercel.

## Respuesta de errores / limitaciones actual

- No hay rutas **POST**, **PUT** ni **DELETE**; los datos se editan en `index.js` y exigen nuevo despliegue.
- Las credenciales o URL de una base MySQL **no están configuradas** en el código actual aunque el paquete `mysql2` esté instalado.

## Licencia

Proyecto con licencia **ISC** (véase `package.json`).

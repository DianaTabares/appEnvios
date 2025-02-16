# API de Envíos 📦🚀

## Descripción

Esta API de envíos está desarrollada con **Node.js** y **TypeScript**, utilizando **Express** y siguiendo **Clean Architecture**. Incluye autenticación con **JWT**, almacenamiento en caché con **Redis**, base de datos **MySQL**, pruebas unitarias y documentación con **Swagger**.

---

## Tecnologías Utilizadas 🛠️

- **Node.js** + **TypeScript**
- **Express**
- **MySQL** (con `mysql2`)
- **Redis** (para optimización y caché)
- **JWT** para autenticación
- **bcryptjs** para encriptación de contraseñas
- **Jest** y **Supertest** para pruebas unitarias
- **Swagger** para documentación

---

## Instalación 🚀

### 1️⃣ Clonar el repositorio

```sh
git clone https://github.com/tu-usuario/envios-api.git
cd envios-api
```

### 2️⃣ Instalar dependencias

```sh
npm install
```

### 3️⃣ Configurar variables de entorno (`.env`)

Crea un archivo `.env` en la raíz del proyecto y agrega:

```env
PORT=5000
DB_HOST=localhost
DB_USER=root
DB_PASS=admin
DB_NAME=envios_db
JWT_SECRET=supersecreto
REDIS_HOST=127.0.0.1
REDIS_PORT=6379
```

### 4️⃣ Ejecutar la base de datos (MySQL y Redis deben estar en ejecución)

```sh
mysql -u root -p -e "CREATE DATABASE envios_db;"
```

### 5️⃣ Iniciar el servidor en desarrollo

```sh
npm run dev
```

---

## Endpoints Principales 🚏

### 🔑 Autenticación (`/auth`)

| Método | Ruta             | Descripción         |
| ------ | ---------------- | ------------------- |
| `POST` | `/auth/register` | Registro de usuario |
| `POST` | `/auth/login`    | Inicio de sesión    |

### 📦 Gestión de Envíos (`/envios`)

| Método   | Ruta          | Descripción              |
| -------- | ------------- | ------------------------ |
| `GET`    | `/envios`     | Obtener todos los envíos |
| `POST`   | `/envios`     | Crear un nuevo envío     |
| `GET`    | `/envios/:id` | Obtener un envío por ID  |
| `PUT`    | `/envios/:id` | Actualizar un envío      |
| `DELETE` | `/envios/:id` | Eliminar un envío        |

### 📦 Caché con Redis

Los envíos más consultados se almacenan en **Redis** para mejorar la respuesta del servidor.

---

## Pruebas 🧪

Ejecuta los tests con:

```sh
npm test
```

---

## Documentación con Swagger 📄

Para acceder a la documentación, inicia el servidor y visita:

```
http://localhost:5000/api-docs
```

---

## Despliegue 🚀

### 📌 Construcción del proyecto

```sh
npm run build
```

### 📌 Ejecutar en producción

```sh
npm start
```

---

## Contribuciones 👥

Si deseas contribuir, por favor crea un **fork** del repositorio, haz tus cambios en una nueva rama y envía un **Pull Request**.

---

## Autor ✍️

**Diana Marcela Tabares Marin**\
📧 Contacto: (dianis_933@hotmail.com)
🔗 GitHub: [https://github.com/DianaTabares](https://github.com/DianaTabares/appEnvios)

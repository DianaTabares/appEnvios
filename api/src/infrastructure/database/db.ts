import mysql from "mysql2/promise";
import dotenv from "dotenv";

dotenv.config();

function validaVariablesEnv() {
  const requiredEnvVars = ["DB_HOST", "DB_USER", "DB_PASS", "DB_NAME"];
  requiredEnvVars.forEach((varNombre) => {
    if (!process.env[varNombre]) {
      throw new Error(`La variable de entorno ${varName} no está definida`);
    }
  });
}

export async function startConnection() {
  try {
    validaVariablesEnv();

    const pool = mysql.createPool({
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASS,
      database: process.env.DB_NAME,
      waitForConnections: true,
      connectionLimit: 10,
    });
    console.log("Conexión a la base de datos establecida correctamente");
    return pool;
  } catch (err) {
    console.error("Error al conectar a la base de datos:", err.message);
    console.error(err.stack); // Mostrar el stack completo para depuración
    // No salir del proceso, lanzar el error para que sea manejado por el llamador
    throw err;
  }
}

import { Sequelize } from "sequelize-typescript";
import dotenv from "dotenv";

dotenv.config();

function validaVariablesEnv() {
  const requiredEnvVars = ["DB_HOST", "DB_USER", "DB_PASS", "DB_NAME"];
  requiredEnvVars.forEach((varNombre) => {
    if (!process.env[varNombre]) {
      throw new Error(`La variable de entorno ${varNombre} no está definida`);
    }
  });
}

validaVariablesEnv();

export const sequelize = new Sequelize({
  database: process.env.DB_NAME,
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  host: process.env.DB_HOST,
  dialect: "mysql",
  logging: false, // Evita logs innecesarios
  models: [__dirname + "/models"], // Carga modelos automáticamente
});

try {
  console.log("Configuración de Sequelize cargada correctamente.");
} catch (error) {
  console.error("Error en la configuración de Sequelize:", error);
  process.exit(1); // Finaliza el proceso si la configuración falla
}

export default sequelize;

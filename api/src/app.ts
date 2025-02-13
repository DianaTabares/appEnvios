import express, { Application, Request, Response } from "express";
import cors from "cors";
import helmet from "helmet";
import dotenv from "dotenv";
import { Next } from "mysql2/typings/mysql/lib/parsers/typeCast";
import { createTableOrden } from "./infrastructure/database/createTables";

dotenv.config();

const app: Application = express();

app.use(express.json());
app.use(cors());
app.use(helmet());

createTableOrden();

app.get("/", (req, res) => {
  res.send("API de envíos funcionando 🚀");
});

// Middleware para manejar errores
app.use((err: Error, req: Request, res: Response, next: Next) => {
  console.error(err.stack);
  res.status(500).send("Algo salió mal!");
});

export default app;

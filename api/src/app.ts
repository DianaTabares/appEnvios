import express, { Application, Request, Response } from "express";
import cors from "cors";
import helmet from "helmet";
import dotenv from "dotenv";
import syncDataBase from "./utils/syncDB";
import { Next } from "mysql2/typings/mysql/lib/parsers/typeCast";
import transportistaRoutes from "./infrastructure/routes/transportista.routes";
import ordenRoutes from "./infrastructure/routes/orden.routes";
import rutasRouthes from "./infrastructure/routes/rutas.routhes";
import usuarioRouthes from "./infrastructure/routes/usuario.routes";

dotenv.config();

const app: Application = express();

app.set("port", process.env.PORT || 5000);

app.use(express.json());
app.use(cors());
app.use(helmet());

// Sincroniza la base de datos
const initializeDB = async () => {
  try {
    await syncDataBase();
    console.log("Base de datos sincronizada correctamente.");
  } catch (error) {
    console.error("Error sincronizando la base de datos:", error);
    process.exit(1);
  }
};

initializeDB();
app.use("/api", transportistaRoutes);
app.use("/api", ordenRoutes);
app.use("/api", rutasRouthes);
app.use("/api", usuarioRouthes);

app.get("/", (req, res) => {
  res.send("API de envíos funcionando 🚀");
});

// Middleware para manejar errores
app.use((err: Error, req: Request, res: Response, next: Next) => {
  console.error(err.stack);
  res.status(500).send("Algo salió mal!");
});

export default app;

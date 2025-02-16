import { Router } from "express";
import { RutaController } from "../controllers/Ruta.controller";

const router = Router();
const rutaController = new RutaController();

router.post("/rutas", rutaController.crearRuta);

export default router;

import { Router } from "express";
import { TransportistaController } from "../controllers/Transportista.controller";

const router = Router();
const transportistaController = new TransportistaController();

router.post("/asignar-ruta", transportistaController.asignarRuta);

export default router;

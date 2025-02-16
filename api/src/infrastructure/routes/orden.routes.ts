import { Router } from "express";
import { OrdenController } from "../controllers/orden.controller";

const router = Router();
const ordenController = new OrdenController();

router.post("/ordenes", (req, res) => ordenController.asignar(req, res));

export default router;

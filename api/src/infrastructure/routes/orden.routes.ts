import { Router } from "express";
import { OrdenController } from "../controllers/orden.controller";

const router = Router();
const ordenController = new OrdenController();

router.post("/ordenes", async (req, res) => {
  try {
    await ordenController.asignar(req, res);
  } catch (error) {
    res.status(500).json({ message: "Error en el registro", error });
  }
});

export default router;

import { Router } from "express";
import { UsuariosController } from "../../infrastructure/controllers/Usuario.controller";
import { authMiddleware } from "../../infrastructure/middlewares/authMiddleware";
import { roleMiddleware } from "../../infrastructure/middlewares/roleMiddleware";

const router = Router();
const usuarioController = new UsuariosController();

router.post("/registrar", async (req, res) => {
  try {
    await usuarioController.registrar(req, res);
  } catch (error) {
    res.status(500).json({ message: "Error en el registro", error });
  }
});

router.post("/login", async (req, res) => {
  try {
    await usuarioController.login(req, res);
  } catch (error) {
    res.status(500).json({ message: "Error en el login", error });
  }
});

export default router;

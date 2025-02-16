import { Request, Response } from "express";
import { CrearUsuarios } from "../../application/usecase/CrearUsuarios";
import { LoginUsuario } from "../../application/usecase/LoginUsuario";

export class UsuariosController {
  async registrar(req: Request, res: Response) {
    try {
      const { nombre, email, password, rol } = req.body;
      if (!nombre || !email || !password) {
        return res
          .status(400)
          .json({ message: "Todos los campos son obligatorios" });
      }
      const crearUsuarios = new CrearUsuarios();
      const usuario = await crearUsuarios.execute(nombre, email, password, rol);
      res.status(201).json({ message: "Usuario creado", usuario });
    } catch (error) {
      if (error instanceof Error) {
        res.status(400).json({ message: error.message });
      } else {
        res.status(400).json({ message: "Unknown error" });
      }
    }
  }
  async login(req: Request, res: Response) {
    try {
      const { email, password } = req.body;
      if (!email || !password) {
        return res
          .status(400)
          .json({ message: "Email y contraseña son obligatorios" });
      }
      const loginUsuario = new LoginUsuario();
      const { token, usuario } = await loginUsuario.execute(email, password);
      res
        .status(200)
        .json({ message: "Usuario autenticado exitosamente", token, usuario });
    } catch (error) {
      res.status(401).json({
        message: error instanceof Error ? error.message : "Error desconocido",
      });
    }
  }
}

import { Request, Response } from "express";
import { CrearUsuarios } from "../../domain/usecase/CrearUsuarios";

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
      const usuario = await crearUsuarios.ejecutar(nombre, email, password);
      res.status(201).json({ message: "Usuario creado", usuario });
    } catch (error) {
      if (error instanceof Error) {
        res.status(400).json({ message: error.message });
      } else {
        res.status(400).json({ message: "Unknown error" });
      }
    }
  }
}

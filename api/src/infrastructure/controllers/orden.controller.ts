import { Request, Response } from "express";
import { AsignarOrden } from "../../application/usecase/AsignarOrden";
import { OrdenRepository } from "../repositories/OrdenRepository";

export class OrdenController {
  private asignarOrden: AsignarOrden;

  constructor() {
    const ordenRepository = new OrdenRepository();
    this.asignarOrden = new AsignarOrden(ordenRepository);
  }

  async asignar(req: Request, res: Response) {
    try {
      const {
        usuariosId,
        rutaId,
        estatus,
        peso,
        dimensiones,
        tipoProducto,
        direccion,
      } = req.body;
      if (
        !usuariosId ||
        !rutaId ||
        !estatus ||
        !peso ||
        !dimensiones ||
        !tipoProducto ||
        !direccion
      ) {
        return res.status(400).send("Faltan datos");
      }
      const orden = await this.asignarOrden.execute({
        usuariosId,
        rutaId,
        estatus,
        peso,
        dimensiones,
        tipoProducto,
        direccion,
      });
      res.status(200).json(orden);
    } catch (error) {
      res.status(500).send(error);
    }
  }
}

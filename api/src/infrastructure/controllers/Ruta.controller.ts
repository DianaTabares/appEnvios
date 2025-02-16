import { Request, Response } from "express";
import { CrearRuta } from "../../application/usecase/AsignarRuta";
import { RutaRepository } from "../repositories/RutaRepository";
//Controller de creacion de ruta
export class RutaController {
  async crearRuta(req: Request, res: Response) {
    try {
      const { idTrasportista, origen, destino, distancia, duracion } = req.body;
      const rutaRepository = new RutaRepository();
      const crearRuta = new CrearRuta(rutaRepository);
      const ruta = await crearRuta.execute(req.body);
      res.status(201).json(ruta);
    } catch (error) {
      if (error instanceof Error) {
        res.status(400).json({ message: error.message });
      } else {
        res.status(400).json({ message: "Unknown error" });
      }
    }
  }
}

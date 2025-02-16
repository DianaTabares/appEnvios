import { Request, Response } from "express";
import { AsignarRuta } from "../../application/usecase/AsignarRuta";
import { RutaRepository } from "../repositories/RutaRepository";
import { TransportistaRepository } from "../repositories/TransportistaRepository";
//Controller de creacion de ruta
export class RutaController {
  async crearRuta(req: Request, res: Response) {
    try {
      const { idTrasportista, origen, destino, distancia, duracion } = req.body;
      const rutaRepository = new RutaRepository();
      const transportistaRepository = new TransportistaRepository();
      const crearRuta = new AsignarRuta(
        rutaRepository,
        transportistaRepository
      );
      const ruta = await crearRuta.execute(idTrasportista, req.body.rutaI);
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

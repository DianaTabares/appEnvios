import { Request, Response } from "express"; //Importamos Request y Response de express
import { AsignarRuta } from "../../application/usecase/AsignarRuta"; //Importamos AsignarRuta de la carpeta application/usecase
import { TransportistaRepository } from "../repositories/TransportistaRepository"; //Importamos TransportistaRepository de la carpeta repositories
import { RutaRepository } from "../repositories/RutaRepository"; //Importamos RutaRepository de la carpeta repositories
//Controller de Asignacion de ruta al transportista
export class TransportistaController {
  async asignarRuta(req: Request, res: Response) {
    try {
      const { transportistaId, rutaId } = req.body;
      const transRepo = new TransportistaRepository();
      const rutaRepo = new RutaRepository();
      const asignarRuta = new AsignarRuta(rutaRepo, transRepo);
      const resultado = await asignarRuta.execute(transportistaId, rutaId);
      res.status(200).json(resultado);
    } catch (error) {
      if (error instanceof Error) {
        res.status(400).json({ message: error.message });
      } else {
        res.status(400).json({ message: "Unknown error" });
      }
    }
  }
}

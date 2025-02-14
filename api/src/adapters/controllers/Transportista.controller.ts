import { Request, Response } from "express";
import { TrasportistaDisponible } from "../../domain/usecase/TrasportistaDisponible";
//Controller de Transportista
export class TransportistaController {
  constructor(private trasportistaDisponible: TrasportistaDisponible) {} //Constructor de la clase
  //Metodo para obtener los transportistas disponibles
  async disponibles(req: Request, res: Response) {
    try {
      const transportista = await this.trasportistaDisponible.ejecutar();
      res.status(200).json(transportista);
    } catch (error) {
      if (error instanceof Error) {
        res.status(400).json({ message: error.message });
      } else {
        res.status(400).json({ message: "Unknown error" });
      }
    }
  }
  //Metodo para crear un transportista
  async crearTransportista(req: Request, res: Response) {
    try {
      const { nombre, rutaId, tipoVehiculo, disponibilidad } = req.body;
      const transportista =
        await this.trasportistaDisponible.crearTransportista(
          nombre,
          rutaId,
          tipoVehiculo,
          disponibilidad
        );
      res.status(200).json(transportista);
    } catch (error) {
      if (error instanceof Error) {
        res.status(400).json({ message: error.message });
      } else {
        res.status(400).json({ message: "Unknown error" });
      }
    }
  }
}

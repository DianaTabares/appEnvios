import { TransportistaRepository } from "../../infrastructure/repositories/TransportistaRepository";

export class TrasportistaDisponible {
  private transportistaRepository: TransportistaRepository;

  constructor() {
    this.transportistaRepository = new TransportistaRepository();
  }

  async ejecutar() {
    const transportistaDisponible =
      await this.transportistaRepository.obtenerDisponibles();
    return transportistaDisponible;
  }

  async crearTransportista(
    nombre: string,
    rutaId: number,
    tipoVehiculo: string,
    disponibilidad: boolean
  ) {
    const nuevoTransportista = {
      nombre,
      rutaId: Number(rutaId),
      tipoVehiculo,
      disponibilidad: true,
    };
    return await this.transportistaRepository.crearTransportista(
      nuevoTransportista
    );
  }
}

import Transportista from "../../domain/entities/Transportista"; // Importamos el modelo de transportista

// Clase para el repositorio de transportista
export class TransportistaRepository {
  // Método para crear un transportista
  async crearTransportista(transportista: {
    nombre: string;
    rutaId: number;
    tipoVehiculo: string;
    disponibilidad: boolean;
  }) {
    return await Transportista.create(transportista);
  }
  //Método para validar la disponibilidad de un transportista
  async obtenerDisponibles(): Promise<Transportista[]> {
    return await Transportista.findAll({ where: { disponible: true } });
  }
  //Método para buscar un transportista por id
  async buscarPorId(id: number): Promise<Transportista | null> {
    return await Transportista.findByPk(id);
  }
  //Método para actualizar la disponibilidad de un transportista
  async actualizarDisponibilidad(
    id: number,
    disponibilidad: boolean
  ): Promise<void> {
    await Transportista.update(
      { disponible: disponibilidad },
      { where: { id } }
    );
  }
  //Método para mostrar todos los transportistas
  async mostrarTransportistas() {
    return await Transportista.findAll();
  }
}

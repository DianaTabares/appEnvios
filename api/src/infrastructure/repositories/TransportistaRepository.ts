import Transportista from "../../domain/entities/Transportista"; // Importamos el modelo de transportista
import IrepositoryTransportista from "../../domain/Irepositories/IrepositoryTransportista"; // Importamos la interfaz del repositorio de transportista
// Implementamos la interfaz del repositorio de transportista
export class TransportistaRepository implements IrepositoryTransportista {
  // Método para crear un transportista
  async crear(transportista: Partial<Transportista>): Promise<Transportista> {
    const nuevoTransportista = await Transportista.create(transportista);
    return nuevoTransportista;
  }
  //Método para obtener un transportista por id
  async obtenerPorId(id: number): Promise<Transportista> {
    const transportista = await Transportista.findByPk(id);
    if (!transportista) {
      throw new Error("Transportista no encontrado");
    }
    return transportista;
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
  async mostrarTodos(): Promise<Transportista[]> {
    return await Transportista.findAll();
  }
}

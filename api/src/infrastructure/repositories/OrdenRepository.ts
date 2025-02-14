import Orden from "../../domain/entities/Orden";

export class OrdenRepository {
  async CrearOrden(orden: {
    usuariosid: number;
    rutasid: number;
    estatus: "En espera" | "En transito" | "Entregado";
    peso: number;
    dimensiones: string;
    tipoProducto: string;
    direccion: string;
  }) {
    return await Orden.create(orden);
  }

  async buscarOrdenporId(id: number): Promise<Orden> {
    if (!id) {
      throw new Error("Id no puede ser nulo");
    }
    const orden = await Orden.findByPk(id);
    if (!orden) {
      throw new Error("Orden no encontrada");
    }
    return orden;
  }

  async mostrarOrdenes() {
    return await Orden.findAll();
  }
}

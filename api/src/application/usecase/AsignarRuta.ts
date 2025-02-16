import IrepositoryTransportista from "../../domain/Irepositories/IrepositoryTransportista";
import { IRepositoryRuta } from "../../domain/Irepositories/IrepositoryRuta";
//clase AsignarRuta para validacion de campos
export class AsignarRuta {
  private rutaI: IRepositoryRuta; //atributo de tipo IRepositoryRuta
  private transportistaI: IrepositoryTransportista; //atributo de tipo IrepositoryTransportista
  //constructor de la clase AsignarRuta
  constructor(
    rutaI: IRepositoryRuta,
    transportistaI: IrepositoryTransportista
  ) {
    this.rutaI = rutaI;
    this.transportistaI = transportistaI;
  }
  //metodo execute para asignar una ruta a un transportista
  async execute(transportistaI: number, rutaI: number) {
    const transportista = await this.transportistaI.obtenerPorId(
      transportistaI
    );
    if (!transportista) {
      throw new Error("El transportista no existe");
    }
    if (!transportista.disponibilidad) {
      throw new Error("El transportista no esta disponible");
    }
    const ruta = await this.rutaI.obtenerRutaPorId(rutaI);
    if (!ruta) {
      throw new Error("La ruta no existe");
    }

    await this.transportistaI.actualizarDisponibilidad(transportistaI, false);

    return { message: "Ruta asignada correctamente", transportista, ruta };
  }
}

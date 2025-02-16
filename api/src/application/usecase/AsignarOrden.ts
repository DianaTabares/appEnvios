import IrepositoryOrden from "../../domain/Irepositories/IrepositoryOrden"; //Importamos la interfaz IrepositoryOrden
//Creamos la clase AsignarOrden
export class AsignarOrden {
  constructor(private repositoryOrden: IrepositoryOrden) {
    this.repositoryOrden = repositoryOrden;
  }
  //Creamos el método execute que recibe los siguientes parametros
  async execute(
    usuariosId: number,
    rutaId: number,
    estatus: "En espera" | "En transito" | "Entregado",
    peso: number,
    dimensiones: string,
    tipoProducto: string,
    direccion: string
  ) {
    //Se valida la dirección
    const direccionValida = await this.repositoryOrden.validarDireccion(
      direccion
    );
    if (direccionValida) {
      throw new Error("La dirección no es válida");
    }
    //
    return await this.repositoryOrden.crearOrden({
      usuariosId,
      rutaId,
      estatus,
      peso,
      dimensiones,
      tipoProducto,
      direccion,
    });
  }
}

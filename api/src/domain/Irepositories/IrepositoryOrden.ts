import Orden from "../entities/Orden"; //Importamos la entidad Orden
//Interface que define los metodos que se deben implementar en la clase que implemente esta interfaz
export default interface IrepositoryOrden {
  crearOrden(orden: Partial<Orden>): Promise<Orden>; //Metodo para crear una orden
  obtenerPorId(id: number): Promise<Orden | null>; //Metodo para obtener una orden por su id
  validarDireccion(direccion: string): Promise<boolean>; //Metodo para validar una direccion
  mostrarOrdenes(): Promise<Orden[]>; //Metodo para mostrar todas las ordenes
}

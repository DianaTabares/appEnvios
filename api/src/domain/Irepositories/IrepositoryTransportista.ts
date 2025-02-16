import Transportista from "../entities/Transportista"; //Importamos la entidad Transportista
/*Interfaz que especifica los metodos que el repositorio debe implementar */
export default interface IrepositoryTransportista {
  crear(transportista: Partial<Transportista>): Promise<Transportista>; //Metodo para crear un transportista
  obtenerPorId(id: number): Promise<Transportista>; //Metodo para obtener un transportista por su id
  actualizarDisponibilidad(id: number, disponibilidad: boolean): Promise<void>; //Metodo para actualizar la disponibilidad de un transportista
  mostrarTodos(): Promise<Transportista[]>; //Metodo para mostrar todos los transportistas
}

import Ruta from "../entities/Rutas"; // Importamos el modelo de ruta
/*Esta interfaz especifica los métodos que cualquier repositorio 
de rutas debe implementar.  */
export interface IRepositoryRuta {
  crearRuta(ruta: Ruta): Promise<Ruta>; //Método para crear una ruta
  obtenerRutaPorId(id: number): Promise<Ruta>; //Método para obtener una ruta por su id
  mostrarRutas(): Promise<Ruta[]>; //Método para mostrar todas las rutas
}

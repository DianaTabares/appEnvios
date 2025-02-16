import { IRepositoryRuta } from "../../domain/Irepositories/IrepositoryRuta"; //Importamos la interfaz IRepositoryRuta
import { Ruta } from "../../domain/entities/Rutas"; //Importamos la entidad Ruta
//Implementacion de la interfaz IRepositoryRuta
export class RutaRepository implements IRepositoryRuta {
  //Método para crear una ruta
  async crearRuta(ruta: Ruta): Promise<Ruta> {
    const nuevaRuta = await Ruta.create({ ...ruta });
    return nuevaRuta;
  }
  //Método para mostrar todas las rutas
  async mostrarRutas(): Promise<Ruta[]> {
    return await Ruta.findAll();
  }
  //Método para obtener una ruta por su id
  async obtenerRutaPorId(id: number): Promise<Ruta> {
    const ruta = await Ruta.findByPk(id);
    if (!ruta) {
      throw new Error(`Ruta con id ${id} no encontrada`);
    }
    return ruta;
  }
}

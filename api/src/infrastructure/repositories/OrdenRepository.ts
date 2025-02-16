import Orden from "../../domain/entities/Orden"; //Importamos la entidad Orden
import IrepositoryOrden from "../../domain/Irepositories/IrepositoryOrden"; //Importamos la interfaz IrepositoryOrden
import redis from "../../infrastructure/cache/redis"; //Importamos la configuración de redis
//Implementamos la interfaz IrepositoryOrden
export class OrdenRepository implements IrepositoryOrden {
  //Método para crear una orden
  async crearOrden(orden: Partial<Orden>): Promise<Orden> {
    const nuevaOrden = await Orden.create(orden);
    return nuevaOrden;
  }
  //Metodo para obtener una orden por id
  async obtenerPorId(id: number): Promise<Orden> {
    if (!id) {
      throw new Error("Id no puede ser nulo");
    }
    const orden = await Orden.findByPk(id);
    if (!orden) {
      throw new Error("Orden no encontrada");
    }
    return orden;
  }
  //Método para mostrar todas las ordenes
  async mostrarOrdenes() {
    return await Orden.findAll();
  }
  //Metodo para validar una direccion con Redis
  async validarDireccion(direccion: string): Promise<boolean> {
    const client = redis; //Obtenemos la conexión a Redis
    const cacheKey = `direccion:${direccion}`; //Definimos la clave para almacenar la dirección
    //Obtenemos la dirección almacenada en cache
    const cachedDireccion = await client.get(cacheKey);
    //Si la dirección ya está almacenada en cache, retornamos true
    if (cachedDireccion) {
      return true;
    }

    // Simulamos una validación de dirección
    const direccionValida = direccion.length > 5; //pendiente para la validacion con API de terceros
    if (direccionValida) {
      await client.set(cacheKey, direccion);
    }
    return direccionValida;
  }
}

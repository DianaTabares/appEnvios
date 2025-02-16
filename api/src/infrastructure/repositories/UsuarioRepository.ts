import Usuarios from "../../domain/entities/Usuario"; // Importamos el modelo de usuario
import IRepositoryUsuario from "../../domain/Irepositories/IrepositoryUsuario"; // Importamos la interfaz del repositorio de usuario
// Implementacion de la interfaz del repositorio de usuario
export class UsuarioRepository implements IRepositoryUsuario {
  // Método para crear un usuario
  async crear(usuario: Partial<Usuarios>): Promise<Usuarios> {
    const nuevoUsuario = await Usuarios.create(usuario);
    return nuevoUsuario;
  }
  //Método para buscar un usuario por email
  async buscarPorEmail(email: string): Promise<Usuarios> {
    const usuario = await Usuarios.findOne({ where: { email } });
    if (!usuario) {
      throw new Error("Usuario no encontrado");
    }
    return usuario;
  }
  //Método para buscar un usuario por id
  async buscarPorId(id: number) {
    if (!id) {
      throw new Error("Id no puede ser nulo");
    }
    const usuario = await Usuarios.findByPk(id);
    if (!usuario) {
      throw new Error("Usuario no encontrado");
    }
    return usuario;
  }
  //Método para buscar todos los usuarios
  async mostrarUsuarios() {
    return await Usuarios.findAll();
  }
}

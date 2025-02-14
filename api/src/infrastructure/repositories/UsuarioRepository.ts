import Usuarios from "../../domain/entities/Usuarios"; // Importamos el modelo de usuario
// Clase para el repositorio de usuario
export class UsuarioRepository {
  // Método para crear un usuario
  async crearUsuario(usuario: {
    nombre: String;
    email: String;
    password: String;
    role: "admin" | "user";
  }) {
    return await Usuarios.create(usuario);
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

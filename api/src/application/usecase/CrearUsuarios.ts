import { UsuarioRepository } from "../../infrastructure/repositories/UsuarioRepository"; //Importamos el repositorio de usuarios
import bcrypt from "bcrypt"; //Importamos bcrypt para encriptar la contraseña
//Caso de uso para la creacion del usuario
export class CrearUsuarios {
  private usuarioRepository: UsuarioRepository;
  //Inicializamos el repositorio
  constructor() {
    this.usuarioRepository = new UsuarioRepository();
  }
  //Metodo para la creacion del usuario
  async execute(nombre: string, email: string, password: string, role: string) {
    //Validamos si el usuario ya existe
    const usuarioExiste = await this.usuarioRepository.buscarPorEmail(email);
    if (usuarioExiste) {
      throw new Error("Email ya registrado");
    }
    //Encriptamos la contraseña
    const passwordHashed = await bcrypt.hash(password, 10);
    const _role = role === "admin" ? "admin" : "user"; //Validamos el rol del usuario
    //Creamos el usuario
    const nuevoUsuario = await this.usuarioRepository.crear({
      nombre,
      email,
      password: passwordHashed,
      rol: _role,
    });
    return nuevoUsuario;
  }
}

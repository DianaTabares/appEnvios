import jwt from "jsonwebtoken"; //Importamos la libreria jsonwebtoken
import bcrypt from "bcrypt"; //Importamos la libreria bcrypt
import { UsuarioRepository } from "../../infrastructure/repositories/UsuarioRepository"; //Importamos el repositorio de usuario
//Caso de uso para la autentidficacion del usuario
export class LoginUsuario {
  private usuarioRepository: UsuarioRepository; //Declaramos una variable privada de tipo UsuarioRepository
  constructor() {
    this.usuarioRepository = new UsuarioRepository();
  }
  //Funcion para la autentificacion del usuario
  async execute(email: string, password: string) {
    const usuario = await this.usuarioRepository.buscarPorEmail(email);
    //Validamos si el usuario existe
    if (!usuario) {
      throw new Error("Usuario no encontrado");
    }
    //Validamos si la contraseña es correcta
    const ValidaPassword = await bcrypt.compare(password, usuario.password);
    //Si la contraseña no es correcta lanzamos un error
    if (!ValidaPassword) {
      throw new Error("contraseña invalida");
    }
    //Generamos un token con la informacion del usuario
    const token = jwt.sign(
      { id: usuario.id, email: usuario.email, rol: usuario.rol },
      "secret",
      {
        expiresIn: "1h",
      }
    );

    return { token, usuario };
  }
}

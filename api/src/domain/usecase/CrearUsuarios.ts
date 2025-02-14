import { UsuarioRepository } from "../../infrastructure/repositories/UsuarioRepository";
import bcrypt from "bcrypt";

export class CrearUsuarios {
  private usuarioRepository: UsuarioRepository;

  constructor() {
    this.usuarioRepository = new UsuarioRepository();
  }
  async ejecutar(
    nombre: string,
    email: string,
    password: string,
    role: string
  ) {
    const usuarioExiste = await this.usuarioRepository.buscarPorEmail(email);
    if (usuarioExiste) {
      throw new Error("Email ya registrado");
    }

    const passwordHashed = await bcrypt.hash(password, 10);
    const _role = role === "admin" ? "admin" : "user";

    const nuevoUsuario = await this.usuarioRepository.crearUsuario({
      nombre,
      email,
      password: passwordHashed,
      role: _role,
    });
    return nuevoUsuario;
  }
}

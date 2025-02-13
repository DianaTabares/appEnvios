import { UsuarioRepository } from "../../infrastructure/repositories/UsuarioRepository";
import bcrypt from "bcrypt";

export class CrearUsuarios {
  private usuarioRepository: UsuarioRepository;

  constructor() {
    this.usuarioRepository = new UsuarioRepository();
  }
  async ejecutar(nombre: string, email: string, password: string) {
    const usuarioExiste = await this.usuarioRepository.buscarPorEmail(email);
    if (usuarioExiste) {
      throw new Error("Email ya registrado");
    }

    const passwordHashed = await bcrypt.hash(password, 10);

    const nuevoUsuario = await this.usuarioRepository.crearUsuario({
      nombre,
      email,
      password: passwordHashed,
      role: "user",
    });
    return nuevoUsuario;
  }
}

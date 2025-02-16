import Usuario from "../entities/Usuario"; // Importamos el modelo de usuario
// Interfaz que especifica los metodos que el repositorio debe implementar
export default interface IRepositoryUsuario {
  crear(usuario: Partial<Usuario>): Promise<Usuario>; // Metodo para crear un usuario
  buscarPorEmail(email: string): Promise<Usuario>; // Metodo para buscar un usuario por email
  buscarPorId(id: number): Promise<Usuario>; // Metodo para buscar un usuario por id
  mostrarUsuarios(): Promise<Usuario[]>; // Metodo para mostrar todos los usuarios
}

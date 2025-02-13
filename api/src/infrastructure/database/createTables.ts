import pool from "./db";

export async function createTableOrden() {
  const createTableQuery = ` CREATE TABLE IF NOT EXISTS orden (
      id INT AUTO_INCREMENT PRIMARY KEY,
      usuariosId INT NOT NULL,
      transportistaId INT NOT NULL,
      estatus ENUM('En espera', 'En transito', 'Entregado') NOT NULL,
      peso FLOAT NOT NULL,
      dimensiones VARCHAR(255) NOT NULL,
      tipoProducto VARCHAR(255) NOT NULL,
      direccion VARCHAR(255) NOT NULL,
      createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
    );
  `;
  try {
    const conn = await pool.getConnection();
    await conn.query(createTableQuery);
    conn.release();
    console.log("Tabla orden creada correctamente");
  } catch (error) {
    console.error("Error al crear la tabla orden:", error);
  }
} 

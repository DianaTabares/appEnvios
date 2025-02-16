import { DataTypes, Model } from "sequelize";
import { sequelize } from "../../infrastructure/database/db";
import Usuarios from "./Usuarios";
import Ruta from "./Rutas";

class Orden extends Model {
  public id!: number;
  public usuariosId!: number;
  public rutaId!: number;
  public estatus!: "En espera" | "En transito" | "Entregado";
  public peso!: number;
  public dimensiones!: string;
  public tipoProducto!: string;
  public direccion!: string;
}

Orden.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    usuariosId: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      references: { model: Usuarios, key: "id" },
    },
    RutaId: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      references: { model: Ruta, key: "id" },
    },
    estatus: {
      type: DataTypes.ENUM("En espera", "En transito", "Entregado"),
      defaultValue: "En espera",
    },
    peso: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    dimensiones: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    tipoProducto: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    direccion: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    tableName: "ordenes",
    sequelize,
    timestamps: false,
  }
);
// Relación: Una orden pertenece a un usuario
Orden.belongsTo(Usuarios, {
  foreignKey: "usuariosId",
  as: "usuario",
});

// Relación: Una orden pertenece a una ruta
Orden.belongsTo(Ruta, {
  foreignKey: "rutaId",
  as: "ruta",
});

export default Orden;

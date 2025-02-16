import { DataTypes, Model } from "sequelize";
import { sequelize } from "../../infrastructure/database/db";
import Orden from "./Orden";

class Usuario extends Model {
  public id!: number;
  public nombre!: string;
  public email!: string;
  public password!: string;
  public rol!: "admin" | "user";
}

Usuario.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    nombre: {
      type: DataTypes.STRING(128),
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING(128),
      allowNull: true,
    },
    password: {
      type: DataTypes.STRING(128),
      allowNull: true,
    },
    rol: {
      type: DataTypes.ENUM("admin", "user"),
      defaultValue: "user",
    },
  },
  {
    tableName: "usuarios",
    sequelize: sequelize,
    timestamps: false,
  }
);

// Relación: Un usuario tiene muchas órdenes
Usuario.hasMany(Orden, {
  foreignKey: "usuariosId",
  as: "ordenes",
});

export default Usuario;

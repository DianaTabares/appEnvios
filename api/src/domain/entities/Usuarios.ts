import { DataTypes, Model, Sequelize } from "sequelize";
import { sequelize } from "../../infrastructure/database/db";

class Usuarios extends Model {
  public id!: number;
  public nombre!: string;
  public email!: string;
  public password!: string;
  public rol!: "admin" | "user";
}

Usuarios.init(
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

export default Usuarios;

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
      type: new DataTypes.STRING(128),
      allowNull: false,
    },
    email: {
      type: new DataTypes.STRING(128),
      allowNull: false,
    },
    password: {
      type: new DataTypes.STRING(128),
      allowNull: false,
    },
    rol: {
      type: new DataTypes.ENUM("admin", "user"),
      defaultValue: "user",
    },
  },
  {
    tableName: "usuarios",
    sequelize: sequelize,
  }
);

export default Usuarios;

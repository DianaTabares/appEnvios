import { Model, DataTypes } from "sequelize";
import { sequelize } from "../../infrastructure/database/db";
import Transportista from "./Transportista";

class Ruta extends Model {
  public id!: number;
  public transportistaId!: number;
  public origen!: string;
  public destino!: string;
  public distancia!: number;
}

Ruta.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    transportistaId: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      references: { model: Transportista, key: "id" },
    },
    origen: {
      type: DataTypes.STRING(128),
      allowNull: false,
    },
    destino: {
      type: DataTypes.STRING(128),
      allowNull: false,
    },
    distancia: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
  },
  {
    tableName: "rutas",
    sequelize,
    timestamps: false,
  }
);

export default Ruta;

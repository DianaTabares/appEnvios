import { DataTypes, Model } from "sequelize";
import { sequelize } from "../../infrastructure/database/db";

export class Ruta extends Model {
  public id!: number;
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
    origen: {
      type: new DataTypes.STRING(128),
      allowNull: false,
    },
    destino: {
      type: new DataTypes.STRING(128),
      allowNull: false,
    },
    distancia: {
      type: new DataTypes.FLOAT(),
      allowNull: false,
    },
  },
  {
    tableName: "rutas",
    sequelize,
  }
);

export default Ruta;

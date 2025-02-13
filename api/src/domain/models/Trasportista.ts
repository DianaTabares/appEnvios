import { DataTypes, Model } from "sequelize";
import { sequelize } from "../../infrastructure/database/db";
import { Rutas } from "./Rutas";

class Trasportista extends Model {
  public id!: number;
  public nombre!: string;
  public rutaId!: number;
  public tipoVehiculo!: string;
  public disponibilidad!: boolean;
}

Trasportista.init(
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
    rutaId: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
    },
    tipoVehiculo: {
      type: new DataTypes.STRING(128),
      allowNull: false,
    },
    disponibilidad: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
    },
  },
  {
    tableName: "transportistas",
    sequelize,
  }
);
export default Trasportista;

import { Model, DataTypes } from "sequelize";
import { sequelize } from "../../infrastructure/database/db";

class Transportista extends Model {
  public id!: number;
  public nombre!: string;
  public tipoVehiculo!: string;
  public disponibilidad!: boolean;
}

Transportista.init(
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
    tipoVehiculo: {
      type: DataTypes.STRING(128),
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
    timestamps: false,
  }
);

export default Transportista;

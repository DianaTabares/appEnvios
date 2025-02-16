import { DataTypes, Model } from "sequelize";
import { sequelize } from "../../infrastructure/database/db";
import { Rutas } from "./Rutas";

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
      type: new DataTypes.STRING(128),
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
    timestamps: false,
  }
);
// Relación: Un transportista tiene muchas rutas
Transportista.hasMany(Rutas, {
  foreignKey: "transportistaId",
  as: "rutas",
});
export default Transportista;

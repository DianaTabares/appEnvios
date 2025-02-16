import { DataTypes, Model } from "sequelize";
import { sequelize } from "../../infrastructure/database/db";
import Transportista from "./Transportista";
import Orden from "./Orden";

export class Rutas extends Model {
  public id!: number;
  public transportistaId!: number;
  public ordenId!: number;
  public origen!: string;
  public destino!: string;
  public distancia!: number;
}

Rutas.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    transportistaId: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      references: {
        model: Transportista,
        key: "id",
      },
    },
    ordenId: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      references: {
        model: Transportista,
        key: "id",
      },
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
    timestamps: false,
  }
);

// Relación: Una ruta tiene muchas órdenes
Rutas.hasMany(Orden, {
  foreignKey: "rutaId",
  as: "ordenes",
});

// Relación: Una ruta pertenece a un transportista
Rutas.belongsTo(Transportista, {
  foreignKey: "transportistaId",
  as: "transportista",
});

export default Rutas;

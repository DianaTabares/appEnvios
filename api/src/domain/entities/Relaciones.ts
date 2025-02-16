import Usuario from "./Usuario";
import Orden from "./Orden";
import Ruta from "./Ruta";
import Transportista from "./Transportista";

// Definir relaciones
Usuario.hasMany(Orden, { foreignKey: "usuariosId", as: "ordenes" });
Orden.belongsTo(Usuario, { foreignKey: "usuariosId", as: "usuario" });

Orden.belongsTo(Ruta, { foreignKey: "rutaId", as: "ruta" });
Ruta.hasMany(Orden, { foreignKey: "rutaId", as: "ordenes" });

Transportista.hasMany(Ruta, { foreignKey: "transportistaId", as: "rutas" });
Ruta.belongsTo(Transportista, {
  foreignKey: "transportistaId",
  as: "transportista",
});

export { Usuario, Orden, Ruta, Transportista };

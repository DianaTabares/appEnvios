import sequelize from "../infrastructure/database/db";

const syncDataBase = async () => {
  try {
    await sequelize.sync({ force: process.env.NODE_ENV === "development" });
    console.log("Base de datos sincronizada correctamente.");
  } catch (error) {
    console.error("Error sincronizando la base de datos:", error);
    process.exit(1);
  }
};

export default syncDataBase;

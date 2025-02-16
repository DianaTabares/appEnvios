import app from "./app";
//import { redisClient } from "./config/redis";

//const PORT = process.env.PORT || 5000;

/*async function startServer() {
  try {
    await redisClient();
    app.listen(PORT, () =>
      console.log(`Servidor corriendo en http://localhost:${PORT}`)
    );
  } catch (error) {
    if (error instanceof Error) {
      console.error("Error al iniciar el servidor:", error.message);
    } else {
      console.error("Error al iniciar el servidor:", error);
    }
    process.exit(1);
  }
}
startServer();*/
/*app.listen(PORT, () =>
  console.log(`Servidor corriendo en http://localhost:${PORT}`)
);*/
async function main() {
  try {
    app.listen(app.get("port"), () => {
      console.log(`Server running on port ${app.get("port")}`);
    });
  } catch (error) {
    console.error("Error starting the server:", error);
    process.exit(1);
  }
}
main();

import { createClient } from "redis";
//función que crea un cliente de Redis y lo conecta al servidor
export async function redisClient() {
  try {
    const client = createClient({
      url: `redis://${process.env.REDIS_HOST}:${process.env.REDIS_PORT}`, //URL de conexión a Redis
    });

    client.on("error", (err) => console.error("Error en Redis:", err));

    await client.connect();
    console.log("Conexión a Redis establecida correctamente");

    return client;
  } catch (e) {
    console.error("Error al conectar a Redis:", error.message);
    console.error(e.stack); // Mostrar el stack completo para depuración
    throw e; // Lanzar el error para que sea manejado por el llamador
  }
}

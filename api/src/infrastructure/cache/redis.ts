import { createClient } from "redis";

const redis = createClient({
  url: `redis://${process.env.REDIS_HOST}:${process.env.REDIS_PORT}`, //URL de conexión a Redis
});

redis.on("error", (err) => console.error("Error en Redis:", err));

redis
  .connect()
  .then(() => console.log("Conexión a Redis establecida correctamente"))
  .catch((err) => console.error("Error al conectar a Redis:", err));

export default redis;

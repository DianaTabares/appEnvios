import redis from "../../config/redis";

export class AddressCacheService {
  private static CACHE_PREFIX = "address:";

  // Obtiene la dirección desde Redis
  static async getCachedAddress(address: string): Promise<boolean> {
    const cached = await redis.get(`${this.CACHE_PREFIX}${address}`);
    return cached === "valid";
  }

  // Guarda la dirección en Redis (válida o inválida)
  static async setCachedAddress(
    address: string,
    isValid: boolean
  ): Promise<void> {
    await redis.set(
      `${this.CACHE_PREFIX}${address}`,
      isValid ? "valid" : "invalid",
      {
        EX: 86400, // Expira en 1 día
      }
    );
  }
}

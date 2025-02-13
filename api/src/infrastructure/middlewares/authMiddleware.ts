import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

export function AuthMiddleware(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const token = req.headers.authorization?.split(" ")[1];
  if (!token) return res.status(401).json({ message: "Acceso denegado" });
  try {
    if (!process.env.SECRET_KEY) {
      return res.status(500).json({ error: "Secret key not defined" });
    }
    const decodificaco = jwt.verify(token, process.env.SECRET_KEY);
    req.body.user = decodificaco;
    next();
  } catch (error) {
    if (error instanceof Error) {
      return res.status(500).json({ error: error.message });
    }
    return res.status(500).json({ error: "Unknown error" });
  }
}

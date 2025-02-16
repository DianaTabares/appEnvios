import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

export interface AuthRequest extends Request {
  usuario?: any;
}

export function authMiddleware(
  req: AuthRequest,
  res: Response,
  next: NextFunction
) {
  const token = req.headers.authorization?.split(" ")[1];
  if (!token) {
    return res
      .status(401)
      .json({ message: "Acceso denegado. No se proporcionó token." });
  }
  try {
    if (!process.env.SECRET_KEY) {
      return res.status(500).json({ error: "Secret key no definida" });
    }
    const decodificado = jwt.verify(token, process.env.SECRET_KEY);
    req.usuario = decodificado;
    next();
  } catch (error) {
    if (error instanceof Error) {
      return res.status(500).json({ error: error.message });
    }
    return res.status(500).json({ error: "Token inválido" });
  }
}

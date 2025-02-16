import { Request, Response, NextFunction } from "express";
import { AuthRequest } from "./authMiddleware";

export function roleMiddleware(rolesPermitidos: string[]) {
  return (req: AuthRequest, res: Response, next: NextFunction) => {
    if (!req.usuario || !rolesPermitidos.includes(req.usuario.rol)) {
      return res
        .status(403)
        .json({ message: "Acceso denegado. No tienes permisos suficientes." });
    }
    next();
  };
}

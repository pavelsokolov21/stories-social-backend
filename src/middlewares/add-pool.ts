import { Express, Request, NextFunction } from "express";
import { Pool } from "pg";

export const addPool = (app: Express, pool: Pool) => {
  app.use((req: Request, _, next: NextFunction) => {
    req.pool = pool;
    next();
  });
};

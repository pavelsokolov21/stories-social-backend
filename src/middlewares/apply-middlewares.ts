import { Express } from "express";
import { Pool } from "pg";
import { addPool } from "./add-pool";
import { applyBodyParser } from "./apply-body-parser";
import { applyCors } from "./apply-cors";
import { Options } from "./interfaces";

export const applyMiddlewares = (app: Express, options: Options) => {
  applyCors(app);
  applyBodyParser(app);
  addPool(app, options.pool);
};

import express, { Express, Request, Response } from "express";
import "dotenv/config";
import { applyMiddlewares, Options } from "./middlewares";
import { connectToDB } from "./db";

const app: Express = express();
const port = process.env.PORT;

const pool = connectToDB();
const middlewareOptions: Options = {
  pool,
};

applyMiddlewares(app, middlewareOptions);
app.get("/", async (req: Request, res: Response) => {
  res.send("Express + TypeScript Server");
  const result = await req.pool.query("SELECT * FROM users");
  console.log(result.rows);
});

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});

import { Pool } from "pg";

export const connectToDB = () => {
  const pool = new Pool({
    user: process.env.DB_SERVER_USERNAME,
    password: process.env.DB_SERVER_PASSWORD,
    host: process.env.DB_SERVER_HOSTNAME,
    port: Number(process.env.DB_SERVER_PORT),
    database: process.env.DB_SERVER_NAME,
    min: Number(process.env.DB_MIN_POOLS),
    max: Number(process.env.DB_MAX_POOLS),
  });

  pool.on("connect", () => {
    console.info(
      `Successfully connected to database: ${process.env.DB_SERVER_NAME}`
    );
  });

  pool.on("error", (err: Error) => {
    console.error(
      `Database: ${process.env.DB_SERVER_NAME}. Error: ${err.message}`
    );
  });

  return pool;
};

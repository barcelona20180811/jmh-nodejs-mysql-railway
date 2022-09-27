import { createPool } from "mysql2/promise";
import { DB_HOST, DB_NAME, DB_PASSWORD, DB_USER, DB_PORT } from "./config.js";

/* createPool para que podamos tener múltiples conexiones */
export const pool = createPool({
  user: DB_USER,
  password: DB_PASSWORD,
  host: DB_HOST,
  port: DB_PORT,
  database: DB_NAME,
});

/* import { createConnection } from "mysql2/promise";

export const conn = await createConnection({
  user: "root",
  password: "",
  host: "localhost",
  port: 3306,
  database: "usersdb",
});
 */

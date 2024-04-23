import mysql from "mysql2/promise";

export const get_connecttion2 = async () => {
  return mysql.createConnection({
    host: "localhost",
    user: "root",
    database: "billdb",
    password: "rxpad",
  });
};

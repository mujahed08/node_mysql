// Import the mysql module

import { get_connection } from "./mysql_connect.js";

export const add_product = async (product) => {
  const connection = await get_connection();

  try {
    if (connection) {
      // let medicine = await get_top_ten_medicine(connection);
      return new Promise((resolve, reject) => {
        connection.query(
          "INSERT INTO product SET ?",
          product,
          (err, results) => {
            if (err) {
              console.error("Error inserting data:", err);
              reject(err)
              return;
            }
            resolve(results.insertId);
            console.log("Data inserted successfully");
          }
        );
      });
    }
  } catch (error) {
    console.log(error);
    return error;
  } finally {
    connection.end((err) => {
      if (err) {
        console.error("Error closing connection:", err);
        return;
      }
      console.log("Connection closed!");
    });
  }
};

export const get_all_product = async () => {
  const connection = await get_connection();

  try {
    if (connection) {
      return new Promise((resolve, reject) => {
        connection.query("SELECT * from product", (err, results) => {
          if (err) {
            console.error("Error inserting data:", err);
            reject(err);
            return;
          }

          let products = [];
          results.forEach((row) => {
            console.log("object",row);
            products.push({ ...row });
          });
          resolve(products);
          console.log("Data inserted successfully");
        });
      });
    }
  } catch (error) {
    console.log(error);
    return error;
  } finally {
    connection.end((err) => {
      if (err) {
        console.error("Error closing connection:", err);
        return;
      }
      console.log("Connection closed!");
    });
  }
};

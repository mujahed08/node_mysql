import { get_connection } from "./mysql_connect.js";

export const sign_up = async (data) => {
  const connection = await get_connection();

  try {
    if (connection) {
      const userInfo = {
        name: data.name,
        email: data.email,
        password: data.password,
        status: data.status,
      };
      const user_id = await insert_user(connection, userInfo);
      const role_ids = await get_roleIds(connection, data.roles);
      let resps = [];
      role_ids.forEach(async (role_id) => {
        const resp = await insert_user_role(connection, {
          user_id: user_id,
          role_id: role_id,
        });
         resps.push(resp);
      });
      console.log("resp", resps);
      return resps;
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

const insert_user = async (conc, data) => {
  if (conc) {
    return new Promise((resolve, reject) => {
        conc.query("INSERT INTO user SET ?", data, (err, results) => {
        if (err) {
          console.error("Error inserting data:", err);
          reject(err);
          return;
        }
        resolve(results.insertId);
        console.log("Data inserted successfully");
      });
    });
  }
};

const insert_user_role = async (conc, data) => {
  if (conc) {
    return new Promise((resolve, reject) => {
        conc.query("INSERT INTO user_role SET ?", data, (err, results) => {
        if (err) {
          console.error("Error inserting data:", err);
          reject(err);
          return;
        }
        resolve(results.insertId);
        console.log("Data inserted successfully");
      });
    });
  }
};
/* 
arr = [1,2,3...]
*/
export const get_roleIds = (conc, roles) => {
  if (conc) {
    return new Promise((resolve, reject) => {
      conc.query(
        `select id,name from role where name in (?)`,
        [roles],
        (err, results) => {
          if (err) {
            console.error("Error inserting data:", err);
            reject(err);
            return;
          }
          let roleIds = [];
          results.forEach((row) => {
            console.log("object", row);
            roleIds.push(row.id);
          });
          resolve(roleIds);
          console.log("Data inserted successfully");
        }
      );
    });
  }
};

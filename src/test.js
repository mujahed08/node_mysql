import { get_connection } from "./dbops/mysql_connect.js";
import { get_roleIds, sign_up } from "./dbops/user.js";

// const connection = await get_connection();
// const role_ids = await get_roleIds(connection,["ROLE_USER","ROLE_SELLER"]);
const result = sign_up({
  name: "zub khan",
  email: "abd@gmail.com",
  password: "123555",
  status: "active",
  roles: ["ROLE_USER", "ROLE_SELLER"],
});
console.log("role", result);

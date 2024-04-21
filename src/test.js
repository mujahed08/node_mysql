import { get_connection } from "./dbops/mysql_connect.js";
import { get_roleIds, sign_up } from "./dbops/user.js";

// const connection = await get_connection();
// const role_ids = await get_roleIds(connection,["ROLE_USER","ROLE_SELLER"]);
const result = await sign_up({
  name: "zub khan",
  email: "abdaasdcw@gmail.com",
  password: "123555",
  status: "active",
  roles: ["ROLE_USER", "ROLE_SELLER"],
});
console.log("role", result);



/* const functionA = async () => {

  return Promise.reject('Error from function A')

}

const functionB = async () => {
  let sum = 0
  for (let i=0; i<200000; i++) {
    sum += i;
  }

  console.log('functionB');

  //throw new Error('Error while executnig functionA')
  return "sum of numbers from 0 to 200000 :" + sum
}


const response = functionA().then(() => {
  // This will not execute because the promise was rejected
  console.log('Async operation succeeded');
}).catch((error) => {
  // Handle the error
  console.error('Async operation failed:', error.message);
})

const sum = await functionB()

console.log(sum)

console.log(response) */
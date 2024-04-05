import { add_product } from "./dbops/product.js";
import { find_all_task } from "./dbops/tasks.js";
// let tasks = await find_all_tasks_record();
// console.log("taskindex",tasks);
import express from "express";

const app = express();
const port = 3000;
app.use(express.json());
// Define a route for the endpoint
app.get("/api/data", async (req, res) => {
  // You can put your endpoint logic here
  // For example, you can send back some dummy data
  const data = await find_all_task();
  // Send the data as a JSON response
  res.json(data);
});

app.post("/product", async (req, res) => {
  const productData =req.body
  const insert_id = await add_product(productData);

  return res.status(201).send(`Data inserted successfully ${insert_id}`);
  // Perform the insert query
});
// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

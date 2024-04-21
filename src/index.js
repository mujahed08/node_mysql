import { add_product, get_all_product } from "./dbops/product.js";
import { find_all_task } from "./dbops/tasks.js";
// let tasks = await find_all_tasks_record();
// console.log("taskindex",tasks);
import express from "express";
import cors from 'cors';
import { sign_up } from "./dbops/user.js";

const app = express();
const port = 3002;
app.use(express.json());

const corsOptions = {
  origin: '*', //  * for all origin
  methods: ['GET','POST','PUT','PATCH'], // Allow only specified HTTP methods
  allowedHeaders: ['Content-Type', 'Authorization'], // Allow only specified headers
  exposedHeaders: ['Content-Length'], // Expose additional headers
  credentials: true, // Allow cookies to be sent with the request
  preflightContinue: false, // Disable preflight requests
  optionsSuccessStatus: 200 // Customize the success status for OPTIONS requests
};

// Enable CORS with the defined options
app.use(cors(corsOptions));

// Define a route for the endpoint
app.get("/api/data", async (req, res) => {
  // You can put your endpoint logic here
  // For example, you can send back some dummy data
  const data = await find_all_task();
  // Send the data as a JSON response
  res.json(data);
});

app.get("/api/products", async (req, res) => {
  // You can put your endpoint logic here
  // For example, you can send back some dummy data
  const data = await get_all_product();
  // Send the data as a JSON response
  res.json(data);
});


app.post("/product", async (req, res) => {
  const productData =req.body
  const insert_id = await add_product(productData);

  return res.status(201).send(`Data inserted successfully ${insert_id}`);
  // Perform the insert query
});

app.post("/signup", async (req, res) => {
    const user_info =req.body
    const response = await sign_up(user_info);
  
    return res.status(201).send(response);
})

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});


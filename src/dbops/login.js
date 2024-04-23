import { get_connecttion2 } from "./mysql2_connect.js";
import jwt from 'jsonwebtoken';

export const login_user = async (data) => {
  const connection = await get_connecttion2();

  try {
    if (connection) {
      // Retrieve user from database
      const results = await connection.query(
        "SELECT * FROM user WHERE email = ?",
        [data.email]
      );
      const rows = await results[0];
      if (rows?.length === 0) {
        return res.status(401).json({ error: "Invalid username or password" });
      }

      // Verify password
      const isMatch = data.password === rows[0].password;
      //   const isMatch = await bcrypt.compare(password, rows[0].password);
      if (!isMatch) {
        return false;
      }
      // Generate JWT
      const token = jwt.sign({ userId: rows[0].id }, "your_secret_key", {
        expiresIn: "1h",
      });
      //   res.json({ token });
      return token;
    }
  } catch (error) {
    console.log(error);
    return false;
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



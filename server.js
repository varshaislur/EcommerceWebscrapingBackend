import express from "express";
import cors from "cors";
import productRoutes from "./routes/productRoutes.js";
import { connectDB } from "./dbConnection.js";
import dotenv from 'dotenv';

dotenv.config();

const app = express();


// Connect to the database
connectDB();

// Middleware
app.use(express.json());
app.use(cors());

// Routes
app.use("/api/products", productRoutes);

// Start Server
app.listen(process.env.PORT, () => {
  console.log(`Server is running on http://localhost:${process.env.PORT}`);
});

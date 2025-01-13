import express from "express";
import { getModel } from "../models/product.js";

const router = express.Router();


router.get("/flipkart", async (req, res) => {
  try {
    const Product = getModel("flipkart"); // Connect to 'flipkart' database
    const products = await Product.find();
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ error: "Error fetching Flipkart products" });
  }
});


router.get("/vijaySales", async (req, res) => {
  try {
    const Product = getModel("vijaySales"); // Connect to 'vijaysales' database
    const products = await Product.find();
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ error: "Error fetching VijaySales products" });
  }
});

export default router;

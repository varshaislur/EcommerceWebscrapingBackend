import { getModel } from "../models/product.js";

export const getFlipkartProducts = async (req, res) => {
  try {
    const Product = getModel("flipkart"); // Connect to Flipkart database
    const products = await Product.find();
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ error: "Error fetching Flipkart products" });
  }
};


export const getVijaySalesProducts = async (req, res) => {
  try {
    const Product = getModel("vijaysales"); // Connect to VijaySales database
    const products = await Product.find();
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ error: "Error fetching VijaySales products" });
  }
};

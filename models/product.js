import mongoose from "mongoose";


const flipkartProductSchema = new mongoose.Schema({
  "Product Name": { type: String, required: true },
  "Price": { type: String, required: true },
  "Reviews": { type: String },
  "Image URL": { type: String, required: true },
});


const vijaySalesProductSchema = new mongoose.Schema({
  "Product Name": { type: String, required: true },
  "Price": { type: String, required: true },
  "Image URL": { type: String, required: true },
});


export const getModel = (dbName) => {
  if (dbName === "flipkart") {
    return mongoose.connection.useDb(dbName).model("Product", flipkartProductSchema);
  }
  if (dbName === "vijaySales") {
    return mongoose.connection.useDb(dbName).model("Product", vijaySalesProductSchema);
  }
  throw new Error(`Unknown database: ${dbName}`);
};

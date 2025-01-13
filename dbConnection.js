import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to MongoDB Cluster");
  } catch (error) {
    console.error("Error connecting to MongoDB Cluster:", error);
    process.exit(1); // Exit process if unable to connect
  }
};

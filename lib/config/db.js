import mongoose from "mongoose";

let isConnected = false;

export const connectDB = async () => {
  try {
    const dbUri = process.env.MONGODB_URI;
    if (!dbUri) {
      throw new Error("MongoDB URI not defined in environment variables");
    }

    if (isConnected) {
      console.log("DB is already connected");
      return;
    }

    await mongoose.connect(dbUri);
    isConnected = true;
    console.log("DB connected successfully");
  } catch (error) {
    console.error("DB connection error:", error.message);
    process.exit(1);
  }
};

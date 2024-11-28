import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    const dbUri = process.env.MONGODB_URI;
    if (!dbUri) {
      throw new Error("MongoDB URI not defined in environment variables");
    }
    await mongoose.connect(dbUri);
    console.log("DB connected successfully");
  } catch (error) {
    console.error("DB connection error:", error.message);
    process.exit(1);
  }
};

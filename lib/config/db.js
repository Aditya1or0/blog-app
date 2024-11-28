import mongoose from "mongoose";

let isConnected = false; // Track whether the database is connected

export const connectDB = async () => {
  try {
    const dbUri = process.env.MONGODB_URI;
    if (!dbUri) {
      throw new Error("MongoDB URI not defined in environment variables");
    }

    // If already connected, return
    if (isConnected) {
      console.log("DB is already connected");
      return;
    }

    // Otherwise, connect to the database
    await mongoose.connect(dbUri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    isConnected = true;
    console.log("DB connected successfully");
  } catch (error) {
    console.error("DB connection error:", error.message);
    process.exit(1);
  }
};

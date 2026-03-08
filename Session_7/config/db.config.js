import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    const connection = await mongoose.connect(
      "mongodb+srv://db_user:dbuser@mycluster.nd4ehpu.mongodb.net/library_management_system",
    );

    console.log("Successfully connected to MongoDB");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
};

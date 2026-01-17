import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log("Connected DB:", mongoose.connection.name);
  } catch (error) {
    console.error(error.message);
    process.exit(1);
  }
};

export default connectDB;

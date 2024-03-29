import mongoose from "mongoose";

export const Connection = async () => {
  const URL = process.env.URL;
  try {
    await mongoose.connect(URL);
    console.log("Database connected");
  } catch (error) {
    console.log("error while connecting to the database", error.message);
  }
};

export default Connection;

import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  Firstname: {
    type: String,
    required: true,
    trim: true,
    min: 5,
    max: 20,
  },
  Lastname: {
    type: String,
    required: true,
    trim: true,
    min: 5,
    max: 20,
  },
  Username: {
    type: String,
    required: true,
    trim: true,
    unique: true,
    index: true,
    lowercase: true,
  },
  email: {
    type: String,
    required: true,
    trim: true,
    unique: true,
    lowercase: true,
  },
  Password: {
    type: String,
    required: true,
  },
  Phone:{
    type: String,
    required: true,
  }
});

const user = mongoose.model("onlineuser",userSchema);

export default user;

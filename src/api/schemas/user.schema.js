import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "name is required"],
  },
  password: {
    type: String,
    required: true,
  },
  profileImage: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Images",
  },
  email: {
    type: String,
    unique: true,
    required: [true, "email is required"],
  },
  verified: {
    type: Boolean,
    default: false,
  },
  status: {
    type: Boolean,
    default: true,
  },
});

export default userSchema;

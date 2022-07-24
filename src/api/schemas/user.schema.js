import { Schema } from "mongoose";

const userSchema = new Schema({
  name: {
    type: String,
    required: [true, "name is required"],
  },
  password: {
    type: String,
    required: true,
  },
  profileImage: {
    type: Schema.Types.ObjectId,
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

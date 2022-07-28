import mongoose from "mongoose";

const likeSchema = new mongoose.Schema({
  creationDate: {
    type: Date,
    required: [true, "create Date is required"],
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Users",
    required: [true, "user id required"],
  },
});

export default likeSchema;

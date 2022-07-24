import { Schema } from "mongoose";

const likeSchema = new Schema({
  creationDate: {
    type: Date,
    required: [true, "create Date is required"],
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: "Users",
    required: [true, "user id required"],
  },
});

export default likeSchema;

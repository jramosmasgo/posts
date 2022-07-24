import { Schema } from "mongoose";

const commentSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    required: [true, "user is rquired"],
  },
  content: {
    type: String,
    required: [true, "content is required"],
  },
  date: {
    type: Date,
    required: [true, "date is required"],
  },
});

export default commentSchema;

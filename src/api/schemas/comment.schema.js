import mongoose from "mongoose";

const commentSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
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

import { Schema } from "mongoose";
import commentSchema from "./comment.schema.js";
import likeSchema from "./like.schema.js";

const postSchema = new Schema({
  userCreator: {
    type: Schema.Types.ObjectId,
    ref: "Users",
  },
  title: {
    type: String,
    required: [true, "title is required"],
  },
  categories: [
    {
      type: Schema.Types.ObjectId,
      required: true,
      ref: "Cateogories",
    },
  ],
  content: {
    type: String,
    required: [true, "content is required"],
  },
  dateCreate: {
    type: Date,
    required: [true, "date created is required"],
  },
  datePublish: {
    type: Date,
  },
  published: {
    type: Boolean,
    required: [true, "state of publish is required"],
  },
  comments: [commentSchema],
  likes: [likeSchema],
});

export default postSchema;

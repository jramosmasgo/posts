import { Schema } from "mongoose";

const imageSchema = new Schema({
  url: {
    type: String,
    required: [true, "url is required"],
  },
});

export default imageSchema;

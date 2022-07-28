import mongoose from "mongoose";

const imageSchema = new mongoose.Schema({
  url: {
    type: String,
    required: [true, "url is required"],
  },
});

export default imageSchema;

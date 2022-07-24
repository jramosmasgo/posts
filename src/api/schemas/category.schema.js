import { Schema } from "mongoose";

const categorySchema = new Schema({
  name: {
    type: String,
    required: [true, "name category is required"],
  },
});

export default categorySchema;

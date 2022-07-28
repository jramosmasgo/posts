import mongoose from "mongoose";
import categorySchema from "../schemas/category.schema.js";

const categoryModel = mongoose.model("Category", categorySchema);

export default categoryModel;

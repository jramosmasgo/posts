import { model } from "mongoose";
import categorySchema from "../schemas/category.schema.js";

const categoryModel = model("Category",categorySchema);

export default categorySchema;
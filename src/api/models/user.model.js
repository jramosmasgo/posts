import { model } from "mongoose";
import userSchema from "../schemas/user.schema.js";

const userModel = model("Users",userSchema)

export default userModel;
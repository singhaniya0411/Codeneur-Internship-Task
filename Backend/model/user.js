import mongoose, { Mongoose } from "mongoose"

const userSchema = new mongoose.Schema({
  email: { type: String, unique: true },
  password: { type: String }
});



export default mongoose.model("Users", userSchema) 
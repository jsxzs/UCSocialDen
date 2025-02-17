const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const UserSchema = new Schema({
  _id: { type: Number, required: true }, // email 
  intro: { type: String, default: "" },
  major: { type: String, default: "" },
  name: { type: String, required: true },
  password: { type: String, required: true },
  tag: [{ type: String, default: [] }], 
  number_post: { type: Number, default: 0 }, 
  pid: { type: String, required: true },
  profile_photo: { type: String, default: "" },
  rating: { type: Number, default: 0 }
}); 

module.exports = mongoose.model("User", UserSchema);
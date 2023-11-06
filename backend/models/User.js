const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    index: true,
  },
  password: {
    type: String,
    required: true,
  },
  note: [{ type: mongoose.Schema.Types.ObjectId, ref: "Note" }],
});

const User = mongoose.model("User", UserSchema);

module.exports = User;

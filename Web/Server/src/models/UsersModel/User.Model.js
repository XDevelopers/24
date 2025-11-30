import mongoose from "mongoose";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  isverifyed: {
    type: Number,
    required: true,
    enum: [1, 2],
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  role: {
    type: Number,
    required: true,
    enum: [1, 2, 3],
  },
  password: {
    type: String,
    required: true,
  },
  userid: { $inc: { seq: 1 } },
  new: true, // returns the incremented document
});

UserSchema.methods.isPasswordCorrect = async function (password) {
  return await bcrypt.compare(password, this.password);
};

UserSchema.methods.generateAccessToken = function () {
  return jwt.sign(
    {
      _id: this._id,
      email: this.email,
      fullName: this.fullName,
      username: this.username,
    },
    process.env.ACCES_TOKEN_SECRET,
    {
      expiresIn: process.env.ACCES_TOKEN_EXPIRY,
    }
  );
};
UserSchema.methods.generateRefreshToken = function () {
  return jwt.sign(
    {
      _id: this._id,
    },
    process.env.REFRESH_TOKEN_SECRET,
    {
      expiresIn: process.env.REFRESH_TOKEN_EXPIRY,
    }
  );
};
const UserModel = mongoose.model("user", UserSchema);
export default UserModel;

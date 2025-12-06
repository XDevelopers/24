import mongoose from "mongoose";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const ProductSchema = new mongoose.Schema(
  {
    itemname: {
      type: String,
      required: true,
    },
    itemimg: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    status: {
      type: Number,
      required: true,
      enum: [1, 2, 3],
    },
    createdby: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
    },
    productid: { $inc: { seq: 1 } },
    new: true, // returns the incremented document
  },
  { timestamps: true }
);

const ProductModel = mongoose.model("product", ProductSchema);
export default ProductModel;

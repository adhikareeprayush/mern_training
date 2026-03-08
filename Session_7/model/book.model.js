import mongoose from "mongoose";

const BookSchema = new mongoose.Schema({
  ISBN: {
    type: String,
    required: true,
    unique: true,
    length: 13,
  },
  title: {
    type: String,
    required: true,
  },
});

export const Book = mongoose.model("Book", BookSchema);

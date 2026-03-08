import { Book } from "../model/book.model.js";

export const createBook = async (req, res) => {
  const { ISBN, title } = req.body;

  const newBook = new Book({ ISBN, title });

  try {
    const savedBook = await newBook.save();
    res
      .status(201)
      .json({ message: "Book created successfully", book: savedBook });
  } catch (error) {
    return res.status(500).json({ message: "Error creating book", error });
  }
};

export const getBooks = async (req, res) => {
  try {
    const books = await Book.find();
    res.status(200).json({ books });
  } catch (error) {
    return res.status(500).json({ message: "Error fetching books", error });
  }
};

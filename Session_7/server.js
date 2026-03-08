import express from "express";
import { connectDB } from "./config/db.config.js";
import { createBook, getBooks } from "./controller/book.controller.js";

const app = express();

app.use(express.json());

connectDB();

function responseFunction(req, res) {
  res.send("Hello World");
}

function startedListening() {
  console.log("Server is listening on port 3000");
}

app.get("/hello", responseFunction);

app.post("/book", createBook);
app.get("/book", getBooks);

app.listen(3000, startedListening);

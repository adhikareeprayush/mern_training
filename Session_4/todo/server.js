import express from "express";

const app = express();

app.use(express.json());

let todos = [];
let count = 0;

app.get("/", (req, res) => {
  res.status(200).send("Welcome to our todo app!");
});

app.post("/todos", (req, res) => {
  const { title, completed } = req.body;

  const newTodo = {
    id: count + 1,
    title,
    completed,
  };
  count++;

  todos.push(newTodo);

  res.status(201).json(newTodo);
});

app.put("/todos/:id", (req, res) => {
  const { id } = req.params;
  const { title, completed } = req.body;

  const todoIndex = parseInt(id) - 1;

  todos[todoIndex] = {
    id: parseInt(id),
    title,
    completed,
  };

  res.status(200).json(todos[todoIndex]);
});

app.get("/todos", (req, res) => {
  res.status(200).json(todos);
});

app.delete("/todos/:id", (req, res) => {});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});

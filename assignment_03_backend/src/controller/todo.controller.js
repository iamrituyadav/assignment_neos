const express = require("express");
const fs = require("fs");
const router = express.Router();
let data = require("../../db.json");

function fileWriter(data) {
  const jsonString = JSON.stringify(data);
  fs.writeFileSync("./db.json", jsonString, (err) => {
    if (err) {
      console.log("Error writing file", err);
    } else {
      console.log("Successfully wrote file");
    }
    data = JSON.parse(data);
  });
}

router.get("/", (req, res) => {
  let result = data.todo_data.filter((e) => {
    return req.query.userId == e.userId;
  });

  // send userId in params

  return res.send(result);
});

router.post("/create", (req, res) => {
  let newTodo = [...data.todo_data, req.body];

  // send {userId, todoId, todo:{name, status}}

  data.todo_data = newTodo;
  fileWriter(data);
  return res.send(data.todo_data);
});

router.patch("/edit", (req, res) => {
  let todo = data.todo_data.filter((e) => {
    return req.body.todoId !== JSON.parse(e.todoId);
  });

  // send {userId, todoId, todo:{name, status}}

  const newTodoData = [...todo, req.body];
  data.todo_data = newTodoData;
  fileWriter(data);
  return res.send(data.todo_data);
});

router.delete("/delete", (req, res) => {
  let todo = data.todo_data.filter((e) => {
    return JSON.parse(req.body.todoId) !== JSON.parse(e.todoId);
  });

  // send userId ib params, todoId in body

  data.todo_data = todo;
  fileWriter(data);

  return res.send(data.todo_data);
});

module.exports = router;

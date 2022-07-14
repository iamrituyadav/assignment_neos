const express = require("express");
const app = express();
app.use(express.json());
const { register, login } = require("./src/controller/authController");
// const userController = require("./src/controller/user.controller");
const todoController = require("./src/controller/todo.controller");

// app.use((req, res, next) => {
//   res.header("Access-Control-Allow-Origin", "*");
//   next();
// });

const cors = require("cors");
const corsOptions = {
  origin: "*",
  credentials: true, //access-control-allow-credentials:true
  optionSuccessStatus: 200,
};

app.use(cors(corsOptions));

app.post("/register", register);
app.post("/login", login);

// app.use("/user", userController);
app.use("/todo", todoController);

app.listen(8000, () => {
  console.log("Listening on Port 8000");
});

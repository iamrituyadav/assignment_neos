import { useState } from "react";
import "./App.css";
import Todo from "./Component/Todo";
import User from "./Component/User";
import { Routes, Route } from "react-router-dom";
import Register from "./Component/Register";
import Login from "./Component/Login";

function App() {
  return (
    <div className="App">
      {/* <Navbar /> */}
      <User />
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Todo />} />
      </Routes>
      {/* <User />
      <Todo /> */}
    </div>
  );
}

export default App;

import axios from "axios";
import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { addTodo } from "../Redux/action";

export default function TodoInput() {
  const user = useSelector((store) => store.userReducer.userId);
  const dispatch = useDispatch();
  // debugger;
  const [todoInput, setTodoInput] = useState({
    userId: user,
    todoId: uuidv4(),
    todo: {
      name: "",
      status: false,
    },
  });
  const handleChange = (e) => {
    setTodoInput({
      ...todoInput,
      todo: { ...todoInput.todo, name: e.target.value },
    });
    console.log(user);
  };
  console.log(todoInput);
  const handleClick = (e) => {
    axios
      .post(`http://localhost:8000/todo/create?userId=${user}`, todoInput)
      .then((res) => {
        console.log(res.data);
        // dispatch(addTodo(res.data));
      });
  };

  return (
    <div>
      <input placeholder="Enter Todo" onChange={(e) => handleChange(e)}></input>
      <button onClick={(e) => handleClick(e)}>Create Todo</button>
    </div>
  );
}

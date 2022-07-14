import React from "react";
import { useSelector } from "react-redux";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";

export default function Todo() {
  const userId = useSelector((store) => store.userReducer.userId);
  console.log(userId);
  return (
    <div>
      <TodoInput />
      {userId ? <TodoList /> : null}
    </div>
  );
}

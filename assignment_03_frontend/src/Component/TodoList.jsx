import axios from "axios";
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { todoList } from "../Redux/action";

export default function TodoList() {
  const userId = useSelector((store) => store.userReducer.userId);
  const todo = useSelector((store) => store.todoReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    axios
      .get(`http://localhost:8000/todo?userId=${userId}`)
      .then((res) => {
        dispatch(todoList(res.data));
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  const handleEdit = () => {
    axios
      .patch(`http://localhost:8000/todo/edit?userId=${userId}`)
      .then((res) => {
        dispatch(todoList(res.data));
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const handleDelete = () => {
    axios
      .delete(`http://localhost:8000/todo/delete?userId=${userId}`)
      .then((res) => {
        dispatch(todoList(res.data));
      })
      .catch((e) => {
        console.log(e);
      });
  };

  // console.log(todo);

  return (
    <div>
      {todo.map((e) => {
        return (
          <div>
            <h3>{e.todo.name}</h3>
            <button
              onClick={(e) => {
                handleEdit(e);
              }}
            >
              Edit
            </button>
            <button
              onClick={(e) => {
                handleDelete(e);
              }}
            >
              Delete
            </button>
          </div>
        );
      })}
    </div>
  );
}

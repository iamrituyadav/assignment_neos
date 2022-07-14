export const USER_DATA = "USER_DATA";
export const TODO_LIST = "TODO_LIST";
export const ADD_TODO = "ADD_TODO";

export const userdata = (data) => {
  return {
    type: USER_DATA,
    payload: data,
  };
};

export const todoList = (data) => {
  return {
    type: TODO_LIST,
    payload: data,
  };
};

export const addTodo = (data) => {
  return {
    type: ADD_TODO,
    payload: data,
  };
};



import { TODO_LIST, ADD_TODO } from "./action";

const init_state = [];

export const todoReducer = (state = init_state, { type, payload }) => {
  switch (type) {
    case TODO_LIST:
      return [...payload];

    case ADD_TODO:
      return [...state, ...payload];

    default:
      return state;
  }
};

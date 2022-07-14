import { userReducer } from "./userReducer";
import { todoReducer } from "./todoReducer";
import { combineReducers } from "redux";

export default combineReducers({
  userReducer,
  todoReducer,
});

import { combineReducers } from "redux";
import authorReducer from "./authorReducer";

export default combineReducers({
  authors: authorReducer
});

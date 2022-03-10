import { combineReducers } from "redux";
import counterReducter from "./counterReducter";
import headerReducer from "./headerReducer";

const rootReducer = combineReducers({
  header: headerReducer,
  counter: counterReducter,
});

export default rootReducer;

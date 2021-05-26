import employeesReducer from "./employeesReducer";
import { combineReducers } from "redux";

const allReducers = combineReducers({
  list: employeesReducer,
});

export default allReducers;

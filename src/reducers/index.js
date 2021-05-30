import employeesReducer from "./employeesReducer";
import { combineReducers } from "redux";
import selectReducer from "./selectReducer";

const allReducers = combineReducers({
  list: employeesReducer,
  selected: selectReducer,
});

export default allReducers;

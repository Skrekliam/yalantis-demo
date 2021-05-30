import logo from "./logo.svg";
import "./App.css";
import axios from "axios";
import Employees from "./components/Employee";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addEmployees, setSelect } from "./actions";

function App() {
  const dispatch = useDispatch();
  useEffect(async () => {
    await axios
      .get("https://yalantis-react-school-api.yalantis.com/api/task0/users")
      .then((res) => dispatch(addEmployees(res.data)));
    let ls = localStorage.getItem("active")
      ? localStorage.getItem("active")
      : [];
    // console.log(ls);
    dispatch(setSelect(JSON.parse(ls)));
  }, []);

  return (
    <div className="App">
      <Employees />
    </div>
  );
}

export default App;

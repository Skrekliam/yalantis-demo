import React from "react";
import { useSelector } from "react-redux";
import EmployeeItem from "./EmployeeItem";
import "./Employee.css";
import Birthday from "./Birthday";

function Employees() {
  return (
    <>
      <h1>Employees</h1>
      <div className="container">
        <div className="employee-block">{<EmployeeItem />}</div>
        <div className="bday-block">
          <Birthday />
        </div>
      </div>
    </>
  );
}

export default Employees;

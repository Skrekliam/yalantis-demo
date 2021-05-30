import React from "react";
import { Col, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import EmployeeItem from "./EmployeeItem";

function Employees() {
  

  return (
    <>
      <Row>
        <h1>Employees</h1>
      </Row>
      <Row>
        <Col xl={8} md={8}>
          {<EmployeeItem />}
        </Col>
        <Col xl={4} md={4}>
          Employees birthday
          {/* <EmployeeItem /> */}
        </Col>
      </Row>
    </>
  );
}

export default Employees;

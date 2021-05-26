import React from "react";
import { Col, Row } from "react-bootstrap";

function Employees() {
  return (
    <>
      <Row>
        <h1>Employees</h1>
      </Row>
      <Row>
        <Col xl={8} md={8}>
          </Col>
        <Col xl={4} md={4}>
          Employees birthday
        </Col>
      </Row>
    </>
  );
}

export default Employees;

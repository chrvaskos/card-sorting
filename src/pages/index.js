import React, { Component } from "react";
import { Row, Col, Container } from "react-bootstrap";
import "../css/App.css";
import dragula from "dragula";
import $ from "jquery";

import NavBar from "../components/NavBar.js";
import FormDetails from "../components/FormDetails.js";
import CardsList from "../components/CardsList.js";
import CategoriesBox from "../components/CategoriesBox.js";

var containers = $(".drag-container").toArray();

//Test

dragula(containers, {
  isContainer: function (el) {
    return el.classList.contains("drag-container");
  },
});

class Main extends Component {
  render() {
    return (
      <Col className="px-0">
        <NavBar />
        <Col className="justify-content-center mt-2">
          <Container>
            <FormDetails />
          </Container>
        </Col>
        <Col className="d-flex justify-content-center mx-0">
          <Row className="mt-2 container" style={{ minWidth: "80%" }}>
            <div className="col-xs-12 col-md-6 col-lg-4 col-xl-2 m-0">
              <CardsList />
            </div>
            <div className="col-xs-12 col-md-6 col-lg-8 col-xl-10 justify-content-center align-items-center text-center">
              <CategoriesBox />
            </div>
          </Row>
        </Col>
      </Col>
    );
  }
}

export default Main;

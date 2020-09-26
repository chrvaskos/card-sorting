import React, { Component } from "react";
import { Icon } from "react-icons-kit";
import { chevronDown } from "react-icons-kit/fa/chevronDown";
import { plusCircle } from "react-icons-kit/fa/plusCircle";
import { Container, Card, Accordion, Button } from "react-bootstrap";

class CategoriesBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      change: [],
      i: 1,
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange = (element) => {
    element = <CategoryItem key={this.state.i++} />;
    this.setState({
      change: this.state.change.concat(element),
    });
  };

  render() {
    return (
      <Container
        className="d-flex flex-row flex-wrap"
        id="categories-container"
      >
        <CategoryItem />
        {this.state.change}
        <Card
          className="my-2 mx-1 text-center shadow"
          style={{
            minWidth: "16em",
            height: "9.844em",
            backgroundColor: "#FFCDB2",
          }}
        >
          <Icon
            as="button"
            size={108}
            icon={plusCircle}
            style={{ backgroundColor: "#FFCDB2", cursor: "pointer" }}
            className="btn-primary m-4"
            id="add_section"
            onClick={() => this.handleChange()}
          ></Icon>
        </Card>
      </Container>
    );
  }
}

export default CategoriesBox;

const CategoryItem = () => (
  <Accordion defaultActiveKey="0">
    <Card
      className="my-2 mx-1 text-center shadow"
      style={{ backgroundColor: "#B5838D", width: "16em" }}
    >
      <div className="row">
        <Card.Header style={{ backgroundColor: "#B5838D", width: "14em" }}>
          <div
            className="text-uppercase"
            contentEditable="true"
            style={{ color: "#FFCDB2", fontSize: "18px", fontWeight: "bold" }}
          >
            Νεα Κατηγορια
          </div>
        </Card.Header>
        <Accordion.Toggle
          as={Button}
          variant="link"
          eventKey="0"
          style={{ backgroundColor: "#B5838D", maxWidth: "13.5em" }}
        >
          <Icon
            className="mx-1 mb-1"
            size={20}
            icon={chevronDown}
            style={{ color: "#FFCDB2" }}
          />
        </Accordion.Toggle>
      </div>
      <Accordion.Collapse
        eventKey="0"
        style={{ backgroundColor: "#FFCDB2", minHeight: "6.5em" }}
      >
        <Card.Body className="drag-container" id="category-item"></Card.Body>
      </Accordion.Collapse>
    </Card>
  </Accordion>
);

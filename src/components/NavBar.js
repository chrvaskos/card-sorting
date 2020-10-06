import React, { Component } from "react";
import { Icon } from "react-icons-kit";
import { sort } from "react-icons-kit/fa/sort";
import { infoCircle } from "react-icons-kit/fa/infoCircle";
import { Navbar } from "react-bootstrap";
import "../css/App.css";

class NavBar extends Component {
  render() {
    return (
      <Navbar
        variant="dark"
        className="justify-content-center shadow-sm mx-0"
        style={{ background: "rgba(0,0,0,0.25)" }}
      >
        <Navbar.Brand>
          <strong className="text-uppercase" style={{ color: "#E5989B" }}>
            Card <Icon className="mx-2" size={24} icon={sort} /> Sorting
          </strong>
        </Navbar.Brand>
      </Navbar>
    );
  }
}

export default NavBar;

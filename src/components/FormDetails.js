import React, { Component } from "react";
import { Row, Col, Button, OverlayTrigger, Tooltip } from "react-bootstrap";
import html2canvas from "html2canvas";
import { saveAs } from "file-saver";
import { Icon } from "react-icons-kit";
import { camera } from "react-icons-kit/fa/camera";

class FormDetails extends Component {
  capturePage = () => {
    html2canvas(document.body).then(function (canvas) {
      canvas.toBlob(function (blob) {
        window.saveAs(blob, "CardSorting.png");
      });
    });
  };
  render() {
    return (
      <Row className="mx-0">
        <Col xs="12" lg="3">
          <div class="textbox">
            <input type="text" placeholder="Όνομα" />
          </div>
        </Col>
        <Col xs="12" lg="3">
          <div class="textbox">
            <input type="text" placeholder="Επώνυμο" />
          </div>
        </Col>
        <Col xs="3" lg="2">
          <div class="textbox">
            <input type="text" placeholder="Ηλικία" />
          </div>
        </Col>
        <Col xs="7" lg="3">
          <div class="textbox">
            <input type="text" placeholder="Ασχολία" />
          </div>
        </Col>
        <Col xs="2" lg="1">
          <OverlayTrigger
            placement="bottom"
            overlay={
              <Tooltip id="button-tooltip-2">Check out this avatar</Tooltip>
            }
          >
            {({ ref, ...triggerHandler }) => (
              <Icon
                as="button"
                onClick={this.capturePage}
                {...triggerHandler}
                ref={ref}
                className="mt-3 ml-3"
                size={36}
                icon={camera}
                style={{ color: "#e5989b", cursor: "pointer" }}
              />
            )}
          </OverlayTrigger>
        </Col>
      </Row>
    );
  }
}

export default FormDetails;

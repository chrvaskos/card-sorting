import React, { Component } from "react";
import { Row, Col, Button, OverlayTrigger, Tooltip } from "react-bootstrap";
import html2canvas from "html2canvas";
import { saveAs } from "file-saver";
import { Icon } from "react-icons-kit";
import { camera } from "react-icons-kit/fa/camera";
import { play } from "react-icons-kit/fa/play";
import { pause as pauseIcon } from "react-icons-kit/fa/pause";
import Timer from "react-compound-timer";

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
        <Col xs="12" lg="5">
          <div class="textbox">
            <input type="text" placeholder="Ονοματεπώνυμο" />
          </div>
        </Col>
        <Col xs="3" lg="2">
          <div class="textbox">
            <input type="text" placeholder="Ηλικία" />
          </div>
        </Col>
        <Col xs="7" lg="3">
          <Timer
            startImmediately={false}
            formatValue={(value) => `${value < 10 ? `0${value}` : value}`}
          >
            {({ start, pause }) => (
              <React.Fragment >
                <div className="timer mx-5">
                  <Timer.Minutes />:
                  <Timer.Seconds />
                  <Icon
                    as="button"
                    onClick={start}
                    className="mt-2 ml-3 p-2 iconButton"
                    size={30}
                    icon={play}
                    style={{ color: "#e5989b", cursor: "pointer" }}
                  />
                  <Icon
                    as="button"
                    onClick={pause}
                    className="mt-3 ml-1 p-2 iconButton"
                    size={30}
                    icon={pauseIcon}
                    style={{ color: "#e5989b", cursor: "pointer" }}
                  />
                </div>
              </React.Fragment>
            )}
          </Timer>
        </Col>
        <Col xs="2" lg="1">
          <OverlayTrigger
            placement="bottom"
            overlay={<Tooltip id="button-tooltip-2">Take a screenshot</Tooltip>}
          >
            {({ ref, ...triggerHandler }) => (
              <Icon
                as="button"
                onClick={this.capturePage}
                {...triggerHandler}
                ref={ref}
                className="mt-3 ml-3 p-2 iconButton"
                size={32}
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

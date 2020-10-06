import React, { Component } from "react";
import { Row, Col, Container } from "react-bootstrap";
import { Icon } from "react-icons-kit";
import { infoCircle } from "react-icons-kit/fa/infoCircle";
import "../css/App.css";
import dragula from "dragula";
import $ from "jquery";

import NavBar from "../components/NavBar.js";
import FormDetails from "../components/FormDetails.js";
import CardsList from "../components/CardsList.js";
import CategoriesBox from "../components/CategoriesBox.js";

var containers = $(".drag-container").toArray();

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
        <div class="tooltip-icon">
          <Icon size={48} icon={infoCircle} />
          <span class="tooltip-text card">
            <p>
              <text className="highlighted-text font-weight-bold">ΟΔΗΓΙΕΣ</text>
              <br />
              1. Γράψτε το{" "}
              <text className="highlighted-text">ονοματεπώνυμο</text> και την{" "}
              <text className="highlighted-text">ηλικία</text> σας στα
              αντίστοιχα πεδία.
              <br />
              2. Μόλις είστε έτοιμοι ξεκινήστε το{" "}
              <text className="highlighted-text">χρονόμετρο</text> που βρίσκεται
              δεξιά από τα παραπάνω πεδία. <br />
              3. Ξεκινήστε τη διαδικασία της{" "}
              <text className="highlighted-text">
                Ανοιχτής Ταξινόμησης Καρτών:
              </text>
              <br />
              - Οι κάρτες που βρίσκονται στα αριστερά της οθόνης μετακινούνται
              με drag &amp; drop στα "κουτιά" των κατηγοριών. <br />
              - Μπορείτε να προσθέσετε όσες κατηγορίες θέλετε πατώντας στο
              "κουτί" με το εικονίδιο "+". <br />
              - Το προκαθορισμένο όνομα κάθε κατηγορίας είναι "ΝΕΑ ΚΑΤΗΓΟΡΙΑ".
              Μπορείτε να το αλλάξετε πατώντας κλικ επάνω σε αυτό. <br />
              - Μπορείτε να "κλείσετε" την κάθε κατηγορία πατώντας στο σύμβολο
              που δείχνει προς τα κάτω δεξιά από το όνομά της, και αντίστοιχα με
              τον ίδιο τρόπο να τις "ανοίξετε". <br />
              - Η διαδικασία ολοκληρώνεται όταν έχετε ταξινομήσει όλες τις
              κάρτες και έχετε δώσει από ένα όνομα στην κάθε κατηγορία. <br />
              4. Σταματήστε το χρονόμετρο και πατήστε κλικ στο εικονίδιο της
              φωτογραφίας που βρίσκεται δεξιά από αυτό. Θα σας ζητήσει να
              "κατεβάσετε" μία εικόνα η οποία εμπεριέχει όλη τη συγκεκριμένη
              σελίδα που βρίσκεστε.
              <br />
              <span className="highlighted-text">
                *Παρακαλούμε να κατεβάσετε 2 εικόνες.
              </span>
              <br /> Μία με τις κατηγορίες{" "}
              <span className="highlighted-text">"ανοιχτές"</span> ώστε να
              φαίνονται τα στοιχεία που περιέχει η καθεμία και μία με τις
              κατηγορίες <span className="highlighted-text">"κλειστές"</span>{" "}
              ώστε να φαίνονται μόνο τα ονόματα των κατηγοριών και όχι τα
              στοιχεία που περιέχουν.
            </p>
          </span>
        </div>
      </Col>
    );
  }
}

export default Main;

import React, { Component } from "react";
import { Card, ListGroup } from "react-bootstrap";

class CardsList extends Component {
  render() {
    return (
      <ListGroup
        id="cards-container"
        className="drag-container"
        style={{ maxHeight: "80vh", "overflow-y": "scroll" }}
      >
        {cards.map((card) => (
          <CardItem key={card.key} title={card.title} />
        ))}
      </ListGroup>
    );
  }
}

export default CardsList;

const cards = [
  { title: "Έπιπλα υπνοδωματίου", key: "1" },
  { title: "Πετσέτες", key: "2" },
  { title: "Γυναικεία ρούχα", key: "3" },
  { title: "Ανδρικά ρούχα", key: "4" },
  { title: "Έπιπλα σαλονιού", key: "5" },
  { title: "Εργαλεία κουζίνας", key: "6" },
  { title: "Πλήρη σερβίτσια", key: "7" },
  { title: "Καθρέφτες", key: "8" },
  { title: "Αποσμητικά χώρου", key: "9" },
  { title: "Παπλωματοθήκες", key: "10" },
  { title: "Τσάντες", key: "11" },
  { title: "Χαλιά", key: "12" },
  { title: "Μαχαιροπίρουνα", key: "13" },
  { title: "Κουρτίνες", key: "14" },
  { title: "Μπολ & φλιτζάνια", key: "15" },
  { title: "Χαλάκια μπάνιου", key: "16" },
  { title: "Σαπούνια", key: "17" },
  { title: "Σεντόνια", key: "18" },
  { title: "Μαξιλαροθήκες", key: "19" },
  { title: "Νεσεσέρ", key: "20" },
  { title: "Κρεμάστρες", key: "21" },
  { title: "Φωτιστικά υπνοδωματίου", key: "22" },
  { title: "Καλάθια", key: "23" },
  { title: "Βιβλία μαγειρικής", key: "24" },
  { title: "Αρωματικά καρτελάκια", key: "25" },
  { title: "Κρέμες χεριών & σώματος", key: "26" },
  { title: "Είδη φροντίδας ρούχων", key: "27" },
  { title: "Μπουρνούζια", key: "28" },
  { title: "Καλύμματα κρεβατιών", key: "29" },
  { title: "Βιβλία", key: "30" },
  { title: "Κορνίζες φωτογραφιών", key: "31" },
  { title: "Ποτήρια", key: "32" },
  { title: "Σουβέρ", key: "33" },
  { title: "Φωτιστικά κουζίνας", key: "34" },
  { title: "Διακοσμητικά μαξιλάρια", key: "35" },
  { title: "Βάζα", key: "36" },
  { title: "Κηροπήγια", key: "37" },
  { title: "Κουρτίνες μπάνιου", key: "38" },
  { title: "Έίδη καθαριότητας", key: "39" },
  { title: "Κουβέρτες", key: "40" },
  { title: "Γραφική Ύλη", key: "41" },
  { title: "Κεριά", key: "42" },
  { title: "Πόμολα", key: "43" },
  { title: "Διακοσμητικά αξεσουάρ", key: "44" },
  { title: "Δίσκοι σερβιρίσματος", key: "45" },
  { title: "Τραπεζομάντηλα", key: "46" },
];

const CardItem = ({ title }) => (
  <Card
    className="my-2 ml-3 mr-2 text-center shadow-sm justify-content-center"
    style={{
      height: "5%",
      width: "85%",
      cursor: "pointer",
      backgroundColor: "#FFCDB2",
      color: "#6D6875",
    }}
  >
    <strong className="my-2 mx-1">{title}</strong>
  </Card>
);

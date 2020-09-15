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
  { title: "Παντόφλες", key: "1" },
  { title: "Αξεσουάρ", key: "2" },
  { title: "Έπιπλα", key: "3" },
  { title: "Φωτιστικά", key: "4" },
  { title: "Κουρτίνες", key: "5" },
  { title: "Επιτραπέζια παιχνίδια", key: "6" },
  { title: "Κορνίζες", key: "7" },
  { title: "Κεριά", key: "8" },
  { title: "Κηροπήγια", key: "9" },
  { title: "Αρώματα", key: "10" },
  { title: "Αρώματα χώρου", key: "11" },
  { title: "Σαπούνια", key: "12" },
  { title: "Πετσέτες", key: "13" },
  { title: "Κουτιά Αποθήκευσης", key: "14" },
  { title: "Καθρέπτες", key: "15" },
  { title: "Καλάθια", key: "16" },
  { title: "Βάζα", key: "17" },
  { title: "Διακοσμητικά κουτιά", key: "18" },
  { title: "Κουτιά οργάνωσης", key: "19" },
  { title: "Βιβλία", key: "20" },
  { title: "Αξεσουάρ διακόσμησης", key: "21" },
  { title: "Πόμολα", key: "22" },
  { title: "Γλάστρες", key: "23" },
  { title: "Είδη μαγειρικής", key: "24" },
  { title: "Είδη σερβιρίσματος", key: "25" },
  { title: "Εργαλεία κουζίνας", key: "26" },
  { title: "Υαλικά", key: "27" },
  { title: "Βιβλία μαγειρικής", key: "28" },
  { title: "Είδη καθαρισμού", key: "29" },
  { title: "Χαλάκια μπάνιου", key: "30" },
  { title: "Είδη & Αξεσουάρ μπάνιου", key: "31" },
  { title: "Περιποίηση σώματος", key: "32" },
  { title: "Μαγιό", key: "33" },
  { title: "Αξεσουάρ θαλάσσης", key: "34" },
  { title: "Πετσέτες θαλάσσης", key: "35" },
  { title: "Απλώστρες ρούχων", key: "36" },
  { title: "Είδη φροντίδας ρούχων", key: "37" },
  { title: "Κλινοσκεπάσματα", key: "38" },
  { title: "Μαξιλαροθήκες", key: "39" },
  { title: "Καλύματα", key: "40" },
  { title: "Γραφική Ύλη", key: "41" },
  { title: "Προστατευτικά Καλύματα", key: "42" },
  { title: "Χαλιά", key: "43" },
  { title: "Κουβέρτες", key: "44" },
  { title: "Διακόσμηση", key: "45" },
  { title: "Πυζάμες", key: "46" },
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

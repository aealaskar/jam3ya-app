import { Card, Button } from "react-bootstrap";
import Moment from "react-moment";
export default function Jam3yatItem(props) {
  const jam3ya = props.jam3ya;
  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={jam3ya.image} />
        <Card.Body>
          <Card.Title>{jam3ya.title}</Card.Title>
          <Card.Title>{jam3ya.amount}</Card.Title>
          <Card.Title>{jam3ya.limit}</Card.Title>
          <Card.Title>{jam3ya.startDate}</Card.Title>
          <Card.Title>{jam3ya.endDate}</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    </div>
  );
}

import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

import jam3yatStore from "../stores/jam3yatStore";
// import Moment from "react-moment";
export default function Jam3yatItem(props) {
  const jam3ya = props.jam3ya;
  const handleSubmit = (e) => {
    e.preventDefault();
    jam3yatStore.joinJam3ya(jam3ya._id);
  };

  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={jam3ya.image} />

        <Card.Body>
          <Card.Title>{jam3ya.title}</Card.Title>
          <Link to={`/details/${jam3ya.slug}`}>
            <Button variant="primary">View Jam3ya</Button>
          </Link>
          {jam3ya.users.length < jam3ya.limit &&
          new Date(jam3ya.startDate) > new Date() ? (
            <Button className="join" onClick={handleSubmit}>
              Join
            </Button>
          ) : (
            <Button>Jam3ya is Full</Button>
          )}
        </Card.Body>
      </Card>
    </div>
  );
}

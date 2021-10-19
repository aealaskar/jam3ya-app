import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import authStore from "../stores/authStore";
import jam3yatStore from "../stores/jam3yatStore";
// import Moment from "react-moment";
export default function Jam3yatItem(props) {
  const jam3ya = props.jam3ya;
  const handleSubmit = (e) => {
    e.preventDefault();
    jam3yatStore.joinJam3ya(authStore.user, jam3ya.id);
  };
  const jam3yaUsers = jam3yatStore.jam3yat.map((_jam3ya) =>
    jam3ya.id === _jam3ya.id ? _jam3ya.users : _jam3ya
  );

  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={jam3ya.image} />

        <Card.Body>
          <Card.Title>{jam3ya.title}</Card.Title>
          <Link to={`/details/${jam3ya.slug}`}>
            <Button variant="primary">View Jam3ya</Button>
          </Link>
          {jam3yaUsers.length < jam3ya.limit ? (
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

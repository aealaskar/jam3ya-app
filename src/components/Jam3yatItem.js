import { observer } from "mobx-react";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import authStore from "../stores/authStore";

import jam3yatStore from "../stores/jam3yatStore";
import UpdateJam3yaModal from "./UpdateJam3yaModal";
// import Moment from "react-moment";
function Jam3yatItem(props) {
  const jam3ya = props.jam3ya;
  const handleSubmit = (e) => {
    e.preventDefault();
    jam3yatStore.joinJam3ya(jam3ya._id);
  };
  const handleDelete = (e) => {
    e.preventDefault();
    jam3yatStore.deleteJam3ya(jam3ya._id);
  };
  const handleLeave = (e) => {
    e.preventDefault();
    jam3yatStore.leaveJam3ya(jam3ya._id);
  };
  return (
    <>
      <Card className="mainCard" style={{ width: "18rem", height: "25rem" }}>
        <Card.Img
          style={{ height: "10rem" }}
          variant="top"
          src={jam3ya.image}
        />

        <Card.Body className="cards">
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
            <p className="status">Jam3ya is Full</p>
          )}
          {new Date(jam3ya.startDate) > new Date() &&
            jam3ya.author.username === authStore?.user?.username && (
              <Button onClick={handleDelete}>Delete</Button>
            )}
          {new Date(jam3ya.startDate) < new Date() && <p>Jam3ya has Started</p>}
          {jam3ya.users
            .map((user) => user._id)
            .includes(authStore?.user?._id) &&
            new Date(jam3ya.startDate) > new Date() && (
              <Button onClick={handleLeave}>Leave</Button>
            )}
          {new Date(jam3ya.startDate) > new Date() &&
            jam3ya.author.username === authStore?.user?.username && (
              <UpdateJam3yaModal jam3ya={jam3ya} />
            )}
        </Card.Body>
      </Card>
    </>
  );
}
export default observer(Jam3yatItem);

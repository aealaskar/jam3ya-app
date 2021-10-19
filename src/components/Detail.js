import React from "react";
import { useParams } from "react-router-dom";
import jam3yatStore from "../stores/jam3yatStore";
import { Card } from "react-bootstrap";

function Detail() {
  const slug = useParams().jam3yaSlug;
  const jam3yaDetail = jam3yatStore.jam3yat.find(
    (jam3ya) => jam3ya.slug === slug
  );

  return (
    <div>
      <div>
        {/* <h5>{jam3yaDetail.title}</h5>
        <img src={jam3yaDetail.image} alt={jam3yaDetail.title} />
        <p>{jam3yaDetail.amount} KD</p>
        <p> Starts at {jam3yaDetail.startDate}</p>
        <p> Ends at {jam3yaDetail.endDate}</p>
        <p>{jam3yaDetail.limit} Humans</p> */}
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={jam3yaDetail.image} />

          <Card.Body>
            <Card.Title>{jam3yaDetail.title}</Card.Title>
            <Card.Title>{jam3yaDetail.amount} KD</Card.Title>
            <Card.Title>{jam3yaDetail.limit} Participants</Card.Title>
            <Card.Title>Starts From: {jam3yaDetail.startDate}</Card.Title>
            <Card.Title>Ends in: {jam3yaDetail.endDate}</Card.Title>
          </Card.Body>
        </Card>

        {/* {console.log(slug)} */}
      </div>
    </div>
  );
}

export default Detail;

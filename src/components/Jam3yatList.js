import React from "react";
import Jam3yatItem from "./Jam3yatItem";
import jam3yatStore from "../stores/jam3yatStore";
import { observer } from "mobx-react";
import { Col, Row } from "react-bootstrap";
function Jam3yatList() {
  const jam3yat = jam3yatStore.jam3yat.map((jam3ya) => (
    <Col className="column">
      <Jam3yatItem jam3ya={jam3ya} />
    </Col>
  ));
  return (
    <>
      <Row>{jam3yat}</Row>
    </>
  );
}

export default observer(Jam3yatList);

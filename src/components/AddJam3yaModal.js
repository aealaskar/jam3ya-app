import React, { useState } from "react";
import jam3yatStore from "../stores/jam3yatStore";
import { Modal, Button, Form } from "react-bootstrap";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function AddJam3yaModal() {
  const [jam3ya, setJam3ya] = useState({
    title: "",
    image: "",
    amount: "",
    limit: "",
    startDate: Date.now(),
    endDate: Date.now(),
  });

  const handleChange = (event) => {
    setJam3ya({ ...jam3ya, [event.target.name]: event.target.value });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    jam3yatStore.createjam3ya(jam3ya);
  };

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <Button variant="primary" onClick={handleShow}>
        Add jam3ya
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>New Jam3ya</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Jam3ya Title</Form.Label>
              <Form.Control
                type="text"
                name="title"
                placeholder="Enter Jam3ya Title"
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicUsername">
              <Form.Label>image</Form.Label>
              <Form.Control
                type="text"
                name="image"
                placeholder="Choose image"
                onChange={handleChange}
              />
              <Form.Text className="text-muted"></Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Amount</Form.Label>
              <Form.Control
                type="text"
                name="amount"
                placeholder="Choose Amount"
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>limit</Form.Label>
              <Form.Control
                type="text"
                name="limit"
                placeholder="Choose limit"
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>start date</Form.Label>
              <DatePicker
                selected={jam3ya.startDate}
                onChange={(date) => setJam3ya({ ...jam3ya, startDate: date })}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>End Date</Form.Label>
              <DatePicker
                selected={jam3ya.endDate}
                onChange={(date) => setJam3ya({ ...jam3ya, endDate: date })}
              />
            </Form.Group>

            <Form.Group
              className="mb-3"
              controlId="formBasicCheckbox"
            ></Form.Group>
            <Button variant="primary" type="submit" onClick={handleClose}>
              Submit
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
}

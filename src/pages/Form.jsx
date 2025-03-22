import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

export default function form() {
  return (
    <Form>
      <Form.Group className="mb-3" controlId="name">
        <Form.Label>Full Name</Form.Label>
        <Form.Control type="text" placeholder="Enter your full name" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="Destiantion">
        <Form.Label>Destiantion</Form.Label>
        <Form.Control type="radio" placeholder="Select a destination" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="TravelDate">
        <Form.Label>Travel Date</Form.Label>
        <Form.Control type="Date" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="NumberofTravelers">
        <Form.Label>Number of Travelers</Form.Label>
        <Form.Control type="Number" placeholder="Enter your of Travelers" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="Budget">
        <Form.Label>Budget($)</Form.Label>
        <Form.Control type="$" placeholder="Enter your budget" />
      </Form.Group>
    </Form>
  );
}

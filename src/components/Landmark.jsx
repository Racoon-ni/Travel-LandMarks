import React from "react";
import { Container, Card, Row, Col } from "react-bootstrap";
import landmarks from "../data/landmarks";
export default function Landmark() {
  return (
    <Container style={{ padding: "50px 0" }}>
      <h2 className="my-4" style={{ textAlign: "center" }}>
        Famous Landmarks Around The World
      </h2>
      <Row className="g-4">
        {landmarks.map((event, index) => (
          <Col md={4} key={index}>
            <Card>
              <Card.Img variant="top" src={event.image} alt={event.title} />
              <Card.Body>
                <Card.Title>{event.title}</Card.Title>
                <Card.Text>{event.description}</Card.Text>
                <Card.Text>{event.country}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

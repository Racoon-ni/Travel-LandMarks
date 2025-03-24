import React, { useEffect, useState } from "react";
import { Container, Card, Row, Col, Spinner } from "react-bootstrap";

export default function Landmark() {
  const [landmarks, setLandmarks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/data/landmarks.json")
      .then((res) => res.json())
      .then((data) => {
        setLandmarks(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching landmarks:", error);
        setLoading(false);
      });
  }, []);

  if (loading)
    return <Spinner animation="border" className="d-block mx-auto mt-5" />;

  return (
    <Container className="my-5">
      <h2 className="text-center mb-4">Famous Landmarks (Fetched)</h2>
      <Row className="g-4">
        {landmarks.map((event, index) => (
          <Col md={6} key={index}>
            <Card className="d-flex flex-row align-items-center">
              <Card.Img
                src={event.image}
                style={{ width: "40%", height: "200px", objectFit: "cover" }}
                alt={event.title}
              />
              <Card.Body>
                <Card.Title>{event.title}</Card.Title>
                <Card.Text>{event.description}</Card.Text>
                <Card.Text>
                  <strong>{event.country}</strong>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

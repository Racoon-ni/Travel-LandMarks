import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <Navbar bg="black" data-bs-theme="dark">
      <Container>
        <Navbar.Brand>
          <Link
            to={"/"}
            style={{
              color: "#fff",
              fontWeight: "bold",
              textDecoration: "none",
            }}
          >
            Landmarks
          </Link>
        </Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="/" style={{ color: "#fff", fontWeight: "bold" }}>
            Home
          </Nav.Link>
          <Nav.Link href="/form " style={{ color: "#fff", fontWeight: "bold" }}>
            Form
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

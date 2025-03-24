import { Container } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";
import Landmark from "../components/Landmark";

export default function Home() {
  return (
    <>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={"/images/topic-01.jpg"}
            alt="topic-1"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={"/images/topic-02.jpg"}
            alt="topic-2"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={"/images/topic-03.jpg"}
            alt="topic-3"
          />
        </Carousel.Item>
      </Carousel>
      <Container>
        <Landmark />
      </Container>
    </>
  );
}

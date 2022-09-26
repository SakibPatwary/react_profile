import React from "react";
import { Carousel, Container } from "react-bootstrap";

const Quotes = () => {
  return (
    <Container
      variant="dark"
      fluid
      className="h3-responsive font-weight-bold pt-5 text-center"
      style={{
        backgroundColor: "#e6e6e6",
      }}
    >
      <Carousel>
        <Carousel.Item>
          <h3>First, solve the problem. Then, write the code.</h3>
          <p> - John Johnson</p>
          <br />
          <br />
          <br />
        </Carousel.Item>

        <Carousel.Item>
          <h3>Experience is the name everyone gives to their mistakes.</h3>
          <p> - Oscar Wilde</p>
          <br />
          <br />
          <br />
        </Carousel.Item>

        <Carousel.Item>
          <h3>Make it work, make it right, make it fast.</h3>
          <p>– Kent Beck</p>
          <br />
          <br />
          <br />
        </Carousel.Item>
      </Carousel>
    </Container>
  );
};
export default Quotes;

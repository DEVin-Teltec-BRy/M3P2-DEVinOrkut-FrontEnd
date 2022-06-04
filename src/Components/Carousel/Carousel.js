import React from "react";
import { Carousel } from "react-bootstrap";

function BootstrapCarousel({ arrayString }) {
  return (
    <Carousel
      controls={false}
      style={{ height: 150, margin: 24, color: "#fff" }}
    >
      {arrayString &&
        arrayString.map((text) => (
          <Carousel.Item key={text}>
            <h4>{text}</h4>
          </Carousel.Item>
        ))}
    </Carousel>
  );
}

export { BootstrapCarousel };

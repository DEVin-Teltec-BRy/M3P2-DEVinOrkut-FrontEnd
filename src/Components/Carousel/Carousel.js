import React from "react";
import { Carousel } from "react-bootstrap";
import { StyledCarousel, StyledCarouselDiv } from "./Carousel.styled";

function BootstrapCarousel({ CarouselMessage }) {
  return (
    <StyledCarousel>
      <Carousel
        controls={false}
        style={{ height: 200, margin: 24, color: "#fff" }}
      >
        {CarouselMessage &&
          CarouselMessage.map((message) => (
            <Carousel.Item key={message.title}>
              <StyledCarouselDiv>
                <h4>{message.title}</h4>
              </StyledCarouselDiv>
              <StyledCarouselDiv>
                <p>{message.text}</p>
              </StyledCarouselDiv>
            </Carousel.Item>
          ))}
      </Carousel>
    </StyledCarousel>
  );
}

export { BootstrapCarousel };

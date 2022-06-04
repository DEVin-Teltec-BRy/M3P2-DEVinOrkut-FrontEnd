import { ItemContent, SliderContainer } from "./carrucel.styled";
import Slider from "react-slick";
export const CarrucelFotos = ({ children, title }) => {
  const settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
  };
  return (
    <SliderContainer>
      {title && <h1>{title}</h1>}

      <Slider {...settings}>{children}</Slider>
    </SliderContainer>
  );
};

export const ItemCarrucel = ({ src }) => {
  return (
    <ItemContent>
      <img src={src} alt="img" />
    </ItemContent>
  );
};

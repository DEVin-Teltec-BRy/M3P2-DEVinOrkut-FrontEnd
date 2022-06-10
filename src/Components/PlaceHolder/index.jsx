import { CardContainerSecondary } from "../CardSecondary/cardSecondary.styled";
import Placeholder from "react-bootstrap/Placeholder";
import ImgPlaceHolder from '../../Assets/placeholderImg.webp'
export const PlaceholderUser = () => {
  return (
    <CardContainerSecondary bg="grey" round>
        <img src={ ImgPlaceHolder } alt="" />
      <Placeholder animation="glow">
        <Placeholder xs={8} /> 
      </Placeholder>
    </CardContainerSecondary>
  );
};

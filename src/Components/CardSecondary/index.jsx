import { useNavigate } from "react-router-dom";
import { CardContainerSecondary } from "./cardSecondary.styled";

export const CardSecondary = ({ size, round, src, text, to, id }) => {
  const navigate = useNavigate();
  const uri =
    to === `usuario`
      ? `/user/${id}`
      : to === `comunidade`
      ? `/communities/${id}`
      : "";

  return (
    <CardContainerSecondary
      bg="grey"
      size={size}
      round={round ? "true" : ""}
      onClick={() => navigate(uri)}
    >
      <img src={src} alt="" />
      <div>{text}</div>
    </CardContainerSecondary>
  );
};

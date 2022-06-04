import { BsStarFill, BsStarHalf, BsStar } from "react-icons/bs";
export const GetStart = ({ type }) => {
  const size = 20;
  const color = "#E01989";
  switch (type) {
    case "Ruim":
      return (
        <>
          <BsStar size={size} color={color} />
          <BsStar size={size} color={color} />
          <BsStar size={size} color={color} />
        </>
      );
    case "Bom":
      return (
        <>
          <BsStarFill size={size} color={color} />
          <BsStarHalf size={size} color={color} />
          <BsStar size={size} color={color} />
        </>
      );
    case "Exelente":
      return (
        <>
          <BsStarFill size={size} color={color} />
          <BsStarFill size={size} color={color} />
          <BsStarFill size={size} color={color} />
        </>
      );
    default:
      return (
        <>
          <BsStar size={size} color={color} />
          <BsStar size={size} color={color} />
          <BsStar size={size} color={color} />
        </>
      );
  }
};

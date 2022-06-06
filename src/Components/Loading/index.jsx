import loading from "../../Assets/loading.svg";
import { LoadingContainer } from "./loading.styled";
export const Loading = () => {
  return (
    <LoadingContainer>
      <img src={loading} alt="loading" />
      <h1>Carregando dados...</h1>
    </LoadingContainer>
  );
};

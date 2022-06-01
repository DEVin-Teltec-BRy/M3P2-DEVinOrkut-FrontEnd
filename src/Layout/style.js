import styled from "styled-components";
import { Row } from "react-bootstrap";

export const MainContainer = styled.main`
  max-width: 85rem;
  margin: 20px auto;
`;

export const Container = styled(Row)`
  width: 100%;
  margin: auto;
  @media (min-width: 768px) {
    .col-md-2 {
      flex: 0 0 auto;
      width: 18%;
    }
  }
`;

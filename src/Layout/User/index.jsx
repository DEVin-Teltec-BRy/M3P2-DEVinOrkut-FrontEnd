import { Col } from "react-bootstrap";
import Header from "../../Components/Header";
import Profile from "../../Components/Profile";
import * as S from "./style";

export const UserLayout = ({ children, lateral,centerCol = 6 }) => {
  return (
    <>
      <Header />
      <S.MainContainer>
        <S.Container>
          <Col md={3}>
            <Profile />
          </Col>
          <Col md={centerCol}>{children}</Col>
          <Col md={3}>{lateral}</Col>
        </S.Container>
      </S.MainContainer>
    </>
  );
};

import { Col } from "react-bootstrap";
import Header from "../../Components/Header";
import Profile from "../../Components/Profile";
import * as S from "./style";

export const UserLayout = ({ children, lateral }) => {
  return (
    <>
      <Header />
      <S.MainContainer>
        <S.Container>
          <Col md={3}>
            <Profile />
          </Col>
          <Col md={6}>{children}</Col>
          <Col md={3}>{lateral}</Col>
        </S.Container>
      </S.MainContainer>
    </>
  );
};

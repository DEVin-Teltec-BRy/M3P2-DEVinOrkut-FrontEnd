import { Col, Container, Row } from "react-bootstrap";
import Profile from "./../../Components/Profile";
import * as S from "./style";

const Content = ({ children }) => {
  /*
   * <Col md={6}>{children[0]}</Col>
   * <Col md={3}>{children[1]}</Col>
   */
  return (
    <S.MainContainer>
      <Container>
        <Row>
          <Col md={3}>
            <Profile />
          </Col>
          <Col md={6}>Conteúdo Principal</Col>
          <Col md={3}>Conteúdo Lateral</Col>
        </Row>
      </Container>
    </S.MainContainer>
  );
};

export default Content;

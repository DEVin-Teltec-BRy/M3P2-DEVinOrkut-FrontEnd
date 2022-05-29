import { Container, Navbar, Nav, Col } from "react-bootstrap";
import { FaUserCircle, FaUserFriends, FaThLarge,FaKey } from "react-icons/fa";
import Link from "./../Button";
import * as S from "./style";

const Header = () => {
  return (
    <S.NavbarContainer collapseOnSelect expand="lg">
      <Container>
        <Col md={3}>
          <Navbar.Brand href="#">
            <img
              src="assets/images/devinorkut.png"
              alt="DEVinOrkut"
              width="150"
            />
          </Navbar.Brand>
        </Col>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />

        <Navbar.Collapse id="responsive-navbar-nav">
          <Col md={8}>
            <Nav className="me-auto">
              <Link to="/" icon={<FaUserCircle />} name="Perfil" />
              <Link to="/friends" icon={<FaUserFriends />} name="Amigos" />
              <Link to="/communities" icon={<FaThLarge />} name="Comunidades" />
              <Link to="/resetpassword" icon={<FaKey />} name="Trocar senha" />
            </Nav>
          </Col>
          <Col md={4}>
            <Nav className="signin">
              <Nav.Link href="#">elon.musk@devinorkut.com</Nav.Link>
              <Nav.Link href="#">Sair</Nav.Link>
            </Nav>
          </Col>
        </Navbar.Collapse>
      </Container>
    </S.NavbarContainer>
  );
};

export default Header;

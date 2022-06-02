import { Dropdown, DropdownButton, ButtonGroup, Col } from "react-bootstrap";
import { FaUserCircle, FaUserFriends, FaThLarge } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { InputSearch } from "../InputSearch";
import { NewButtonLink } from "./../Button";
import Logo from '../../Assets/images/Title.svg'
import * as S from "./style";

const Header = () => {
  const navigate = useNavigate();
  return (
    <S.MainContainer>
    <S.NavbarContainer collapseOnSelect expand="lg">
      <Col md={2}>
        <img src={Logo} alt="DEVinOrkut" width="150" />
      </Col>
      <Col md={5}>
        <NewButtonLink to="/" icon={<FaUserCircle />} name="Perfil" />
        <NewButtonLink to="/friends" icon={<FaUserFriends />} name="Amigos" />
        <NewButtonLink
          to="/communities"
          icon={<FaThLarge />}
          name="Comunidades"
        />
      </Col>
      <Col md={4} >
        <InputSearch />
      </Col>
      <Col >
        <DropdownButton
          as={ButtonGroup}
          align="end"
          className='menu'
          title="elon.musk@devinorkut.com"
        >
        <Dropdown.Item onClick={() => navigate("/solicitacoes")}>
            <S.BadgeNoty pill>10</S.BadgeNoty>
            Solicitações de amizade
          </Dropdown.Item>
          <Dropdown.Item onClick={() => navigate("/")}>
            Meu perfil
          </Dropdown.Item>
          <Dropdown.Item onClick={()=> navigate("/login")}>Sair</Dropdown.Item>
        </DropdownButton>
      </Col>
    </S.NavbarContainer>
    </S.MainContainer>
  );
};

export default Header;

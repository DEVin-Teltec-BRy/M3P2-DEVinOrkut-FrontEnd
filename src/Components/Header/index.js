import { Dropdown, DropdownButton, ButtonGroup, Col } from "react-bootstrap";
import { FaUserCircle, FaUserFriends, FaThLarge } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
// import { InputSearch } from "../InputSearch";
import {AiOutlineSearch} from 'react-icons/ai'
import { NewButtonLink } from "./../Button";
import Logo from "../../Assets/images/Title.svg";
import * as S from "./style";
import { useData } from "../../Context/dataContext";
import { useEffect, useState } from "react";

const Header = () => {
  const { user } = useData()
  const [ totalRequest, setTotalRequest ] = useState(0)
  const navigate = useNavigate();

  useEffect(() => {
    if (user.friendRequest) {
      setTotalRequest(user.friendRequest.length)
      }
    }, [user.friendRequest])
  return (
    <S.MainContainer>
    <S.NavbarContainer collapseonselect="true" expand="lg">
      <Col md={2}>
        <img src={Logo} alt="DEVinOrkut" width="150" />
      </Col>
      <Col md={6}>
        <NewButtonLink to="/" icon={<FaUserCircle />} name="Perfil" />
        <NewButtonLink to="/friends" icon={<FaUserFriends />} name="Amigos" />
        <NewButtonLink
          to="/communities"
          icon={<FaThLarge />}
          name="Comunidades"
        />
         
      </Col>
     <Col md={2}>
     <NewButtonLink
          to="/search"
          icon={<AiOutlineSearch size={20} />}
        />
     </Col>
      <Col >
        <DropdownButton
          as={ButtonGroup}
          align="end"
          className='menu'
          title="elon.musk@devinorkut.com"
        >
        <Dropdown.Item onClick={() => navigate("/solicitacoes")}>
            {totalRequest > 0 && <S.BadgeNoty pill>{totalRequest}</S.BadgeNoty>}
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

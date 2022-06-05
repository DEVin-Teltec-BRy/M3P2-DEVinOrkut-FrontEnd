import { Col } from 'react-bootstrap';
import Header from '../Components/Header';
import Profile from '../Components/ProfileAside';
import * as S from './style';

const Layout = ({ children, lateral, centerCol = 6, nameUser }) => {
  return (
    <>
      <Header />
      <S.MainContainer>
        <S.Container>
          <Col md={2}>
            <Profile nameUser={nameUser} />
          </Col>
          <Col md={centerCol}>{children}</Col>
          <Col>{lateral}</Col>
        </S.Container>
      </S.MainContainer>
    </>
  );
};
export default Layout;

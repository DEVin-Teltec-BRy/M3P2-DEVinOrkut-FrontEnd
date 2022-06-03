import Lateral from './Lateral';
import { Container, Wrapper, WrapperForm, WrapperLogo } from './style';

const Layout = ({ children }) => {
  return (
    <Container>
      <Wrapper>
        <WrapperForm>{children}</WrapperForm>
        <WrapperLogo>
          <Lateral />
        </WrapperLogo>
      </Wrapper>
    </Container>
  );
};

export default Layout;

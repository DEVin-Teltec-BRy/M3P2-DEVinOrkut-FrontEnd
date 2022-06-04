import styled from 'styled-components';
import AppRoutes from './Routes';

const ContainerApp = styled.div`
  margin: auto;
`;
function App() {
  return (
    <ContainerApp>
      <AppRoutes/>
    </ContainerApp>
  );
}
export default App;

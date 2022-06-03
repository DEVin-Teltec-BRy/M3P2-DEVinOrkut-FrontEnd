
import styled from 'styled-components';
import AppRoutes from './Routes';
import Upload from './Components/Cloudinary';
import { CommunityDetailPage } from './Page/CommunityDetail';
import CreateUser from './Page/CreateUser';

import Login from './Page/Login';
import { UserPage } from './Page/User';


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

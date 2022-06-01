import { Routes, Route } from 'react-router-dom';
import { CommunityPage } from './Page/Communities';
import { FriendPage } from './Page/Friends';
import { FriendshipRequestPage } from './Page/FriendshipRequest';
import { ProfilePage } from './Page/Profile';
import ResetPassword from './Page/ResetPassword';
import { SearchPage } from './Page/Search';
import SendResetPassEmail from './Page/SendResetPassEmail';
import styled from 'styled-components';
import Upload from './Components/Cloudinary';

const ContainerApp = styled.div`
  margin: auto;
`;

function App() {
  return (
    <ContainerApp>
      <Routes>
        <Route path="/" element={<ProfilePage />} />
        <Route path="friends" element={<FriendPage />} />
        <Route path="communities" element={<CommunityPage />} />
        <Route path="search/:param" element={<SearchPage />} />
        <Route path="solicitacoes" element={<FriendshipRequestPage />} />
        <Route path="sendresetpassemail" element={<SendResetPassEmail />} />
        <Route path="resetpass/:token" element={<ResetPassword />} />
        <Route path="upload" element={<Upload />} />

        {/*  
        <Route path="login" element={} />    
        <Route path="register" element={} />    
        <Route path="profile" element={} />     
        */}
      </Routes>
    </ContainerApp>
  );
}

export default App;

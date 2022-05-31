import { Routes, Route } from "react-router-dom";
import { CommunityPage } from "./Page/Communities";
import { FriendPage } from "./Page/Friends";
import { ProfilePage } from "./Page/Profile";
import { SearchPage } from "./Page/Search";
import styled from "styled-components";

const ContainerApp = styled.div`
  margin:auto;
`;

function App() {
  return (
    <ContainerApp>
      <Routes>
        <Route path="/" element={<ProfilePage />} />
        <Route path="friends" element={<FriendPage />} />
        <Route path="communities" element={<CommunityPage />} />
        <Route path="search/:param" element={<SearchPage />} />
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

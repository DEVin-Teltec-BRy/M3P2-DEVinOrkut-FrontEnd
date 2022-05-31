import { Routes, Route } from "react-router-dom";
import { CommunityPage } from "./Page/Communities";
import { FriendPage } from "./Page/Friends";
import { ProfilePage } from "./Page/Profile";
import ResetPassword from "./Page/ResetPassword";
import { SearchPage } from "./Page/Search";
import SendResetPassEmail from './Page/SendResetPassEmail'

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<ProfilePage />} />
        <Route path="friends" element={<FriendPage />} />
        <Route path="communities" element={<CommunityPage />} />
        <Route path="search/:param" element={<SearchPage />} />
        <Route path="sendresetpassemail" element={<SendResetPassEmail />} />
        <Route path="resetpass/:token" element={<ResetPassword />} />


        {/*  
        <Route path="login" element={} />    
        <Route path="register" element={} />    
        <Route path="profile" element={} />     
        */}
      </Routes>
    </div>
  );
}

export default App;

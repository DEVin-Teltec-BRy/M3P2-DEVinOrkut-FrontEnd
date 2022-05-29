import { Routes, Route } from "react-router-dom";
import ResetPassword from "./Page/ResetPassword";
import { CommunityPage } from "./Page/Communities";
import { FriendPage } from "./Page/Friends";
import { ProfilePage } from "./Page/Profile";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<ProfilePage />} />
        <Route path="friends" element={<FriendPage />} />
        <Route path="communities" element={<CommunityPage />} />
        <Route path="resetpassword/:id" element={<ResetPassword />} />
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

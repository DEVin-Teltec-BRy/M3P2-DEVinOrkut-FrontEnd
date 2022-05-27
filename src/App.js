import { Routes, Route } from "react-router-dom";
import { UserLayout } from "./Layout/User";
import { FriendPage } from "./Page/Friends";
import { ProfilePage } from "./Page/Profile";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<ProfilePage />} />
        <Route path="friends" element={<FriendPage />} />
        <Route path="communities" element={<UserLayout />} />
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

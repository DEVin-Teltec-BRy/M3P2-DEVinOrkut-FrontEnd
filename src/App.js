import { Routes, Route } from "react-router-dom";
import { InitialProject } from "./Page/Profile";


function App() {
  return (
    <div >
     <Routes>
     <Route path="/" element={<InitialProject/>} />   
        {/*  
        <Route path="login" element={} />    
        <Route path="register" element={} />    
        <Route path="profile" element={} />    
        <Route path="friends" element={} />     
        <Route path="communities" element={} />      */}
      </Routes>
    </div>
  );
}

export default App;

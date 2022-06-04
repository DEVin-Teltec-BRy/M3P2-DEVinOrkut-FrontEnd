import { createContext, useContext, useEffect, useState } from "react";

const DataContex = createContext();

const initUser = {
  id: "",
  token: "",
  fullName: "",
  email: "",
  cpf: "",
  birthDate: "",
  gender: "",
  postal: "",
  city: "",
  state: "",
  address: "",
  number: "",
  complement: "",
  district: "",
  reference: "",
  relationship: "",
  humor: [],
  interests: [],
  aboutMe: "",
  scraps: [],
  testimonial: [],
  trusty: [],
  cool: [],
  sexy: [],
  fans: [],
  profilePicture: [],
  album: [],
  friends: [],
  friendRequest: [],
  communities: [],
};

const DataProvider = ({ children }) => {
  const [user, setUser] = useState(initUser);
  const [category, setCategory] = useState("");

  const updateUser = (newData) => {
    setUser({ ...user, ...newData });
  };
   
  const handleLogin = (newData) => {
    setUser({ ...user, ...newData });
  };
  const handleLogout = () => {
    setUser(initUser);
    localStorage.removeItem("Token");
  }

  const data = {
    user,
    updateUser,
    handleLogin,
    handleLogout,
    category,
    setCategory,
  };
  
  return <DataContex.Provider value={data}>{children}</DataContex.Provider>;
};
const useData = () => {
  const context = useContext(DataContex);
  if (!context) {
    throw new Error("useData must be used within a DataProvider");
  }
  return context;
};

export { DataProvider, useData };

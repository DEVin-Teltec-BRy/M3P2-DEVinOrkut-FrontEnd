import { createContext, useContext, useEffect, useState } from "react";

const DataContex = createContext();

const initUser = {
  id: "",
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
  useEffect(() => {
    // setUser({ ...user, id: process.env.REACT_APP_USER_ID });
  }, [user, setUser]);
  const data = {
    user,
    updateUser,
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

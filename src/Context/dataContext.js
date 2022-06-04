import { useMutation } from "@apollo/client";
import { createContext, useContext, useEffect, useState } from "react";
import { VALIDATE_TOKEN } from "../Graphql/Mutations/validateToken";

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
  let [ ValidateToken ] = useMutation(VALIDATE_TOKEN);
  const [ token, setToken ] = useState(()=>{
    const token = localStorage.getItem("Token");
    if(token){
      return token
    }
    return false
  });
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
  };
  useEffect(() => {
    if(token){
      (async () => {
        const response = await ValidateToken({
          variables: {
            token: localStorage.getItem("Token"),
            },
            });
            const { data } = response;
            const { validatedToken } = data;
            const newUser = {
              token: validatedToken.token,
              ...validatedToken.user,
              };
              updateUser(newUser);
              }
      )();
              }
  }, [token]);

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

import { useMutation } from "@apollo/client";
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
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
  const [ValidateToken] = useMutation(VALIDATE_TOKEN);
  const tokenLs =  localStorage.getItem("Token");

  const [user, setUser] = useState(initUser);
  const [category, setCategory] = useState("");

  const handleLogin = (newData) => {
    setUser({ ...user, ...newData });
  };

  const handleLogout = () => {
    setUser(initUser);
    localStorage.removeItem("Token");
  };

  const handleToken = useCallback(async () => {
    try {
      const response = await ValidateToken({
        variables: {
          token: tokenLs,
        },
      });
      const { data } = response;
      const { validatedToken } = data;
      const newUser = {
        token: validatedToken.token,
        ...validatedToken.user,
      };
      ;
      setUser(newUser);
    } catch (error) {
      localStorage.removeItem("Token");
     
    }
  }, [ValidateToken,tokenLs]);


  useEffect(() => {
    if (tokenLs) {
      handleToken();
    }
  }, [handleToken,tokenLs]);

  const data = {
    user,
    updateUser: (newData) => {
      setUser({ ...user, ...newData });
    },
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

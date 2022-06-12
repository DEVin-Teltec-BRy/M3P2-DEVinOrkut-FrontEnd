import { useMutation } from "@apollo/client";
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import {
  REMOVE_FRIEND,
  REQUEST_FRIENDSHIP,
} from "../Graphql/Mutations/FriendshipMutations";
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
  const [RermoveFriendship] = useMutation(REMOVE_FRIEND);
  const [RequestFriendship] = useMutation(REQUEST_FRIENDSHIP);
  const [tokenLs, setTokenLs] = useState(() => {
    const token = localStorage.getItem("Token");
    if (token) return token;
    return false;
  });

  const [user, setUser] = useState(initUser);
  const [categoryEnum, setCategoryEnum] = useState("");

  const handleLogin = (newData) => {
    localStorage.setItem("Token", newData.token);
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
          token: localStorage.getItem("Token"),
        },
      });
      const { data } = response;
      const { validatedToken } = data;
      const newUser = {
        token: validatedToken.token,
        ...validatedToken.user,
      };
      setTokenLs(validatedToken.token);
      setUser(newUser);
    } catch (error) {
      localStorage.removeItem("Token");
      setUser(initUser);
    }
  }, [ValidateToken]);

  const handleAddFriend = async (userId, friendId) => {
    const { data } = await RequestFriendship({
      variables: {
        senderId: userId,
        requestedId: friendId,
      },
    });
    return data.requestFriendship
  };
  const handleRemoveFriend = async (userId, friendId) => {
    const { data } = await RermoveFriendship({
      variables: {
        loggedUserId: userId,
        removeFriendshipId: friendId,
      },
    });
    setUser({ ...user, ...data.removeFriendship });
  };
  useEffect(() => {
    if (tokenLs) {
      handleToken();
    }
  }, [handleToken, tokenLs]);

  const data = {
    user,
    updateUser: (newData) => {
      setUser({ ...user, ...newData });
    },
    handleLogin,
    handleLogout,
    categoryEnum,
    setCategoryEnum,
    handleAddFriend,
    handleRemoveFriend,
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

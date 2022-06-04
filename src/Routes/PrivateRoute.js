import { Navigate } from "react-router-dom";
import { useData } from "../Context/dataContext";

const PrivateRoute = ({ children, redirectTo }) => {
  const { user, handleToken } = useData()
  if(!user.token && localStorage.getItem("Token")) {
    handleToken()
  } else {
    const isAuthenticated = user.token;
    return isAuthenticated ? children : <Navigate to={redirectTo} />;
  }
  };
export default PrivateRoute
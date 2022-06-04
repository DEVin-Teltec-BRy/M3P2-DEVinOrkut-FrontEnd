import { Navigate } from "react-router-dom";
import { useData } from "../Context/dataContext";

const PrivateRoute = ({ children, redirectTo }) => {
  const { user } = useData()
    const isAuthenticated = user.token || localStorage.getItem("Token");
    return isAuthenticated ? children : <Navigate to={redirectTo} />;
  };
export default PrivateRoute
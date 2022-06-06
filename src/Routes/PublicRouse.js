import { Navigate } from "react-router-dom";
import { useData } from "../Context/dataContext";

export const PublicRoute = ({ children, redirectTo }) => {
  const { user } = useData()
    const isAuthenticated = user.token
    return isAuthenticated ? <Navigate to={redirectTo} /> : children;
  };
 
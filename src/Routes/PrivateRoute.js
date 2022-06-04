import { Navigate } from "react-router-dom";
import { useData } from "../Context/dataContext";

const PrivateRoute = ({ children, redirectTo }) => {
  const { user: {token} } = useData()
    const isAuthenticated = token;
    return isAuthenticated ? children : <Navigate to={redirectTo} />;
  };
export default PrivateRoute
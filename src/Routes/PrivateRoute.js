import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children, redirectTo }) => {
    const isAuthenticated = localStorage.getItem("Token")
    return isAuthenticated ? children : <Navigate to={redirectTo} />;
  };
export default PrivateRoute
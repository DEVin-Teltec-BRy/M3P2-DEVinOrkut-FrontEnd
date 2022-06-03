import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children, redirectTo }) => {
    const isAuthenticated = localStorage.getItem("Token") !== null;
    console.log("isAuth: ", isAuthenticated);
    return isAuthenticated ? children : <Navigate to={redirectTo} />;
  };
export default PrivateRoute
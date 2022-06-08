
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ResetPassword from "../Page/ResetPassword";
import SendResetPassEmail from "../Page/SendResetPassEmail";
import PrivateRoute from "./PrivateRoute";
import { PublicRoute } from "./PublicRouse";
import { NotFoundPage } from "../Page/NotFound404";
import { privateRoutes, publicRoutes } from "./Routes";
const AppRoutes = () => (
  <BrowserRouter>
    <Routes>
      {privateRoutes.map(({ path, element }, idx) => (
        <Route
          path={path}
          key={idx}
          element={<PrivateRoute redirectTo="/login">{element}</PrivateRoute>}
        />
      ))}
      {publicRoutes.map(({ path, element }, idx) => (
        <Route
          path={path}
          key={idx}
          element={<PublicRoute redirectTo="/">{element}</PublicRoute>}
        />
      ))}

      <Route path="resetpass/:token" element={<ResetPassword />} />
      <Route path="sendresetpassemail" element={<SendResetPassEmail />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  </BrowserRouter>
);
export default AppRoutes;

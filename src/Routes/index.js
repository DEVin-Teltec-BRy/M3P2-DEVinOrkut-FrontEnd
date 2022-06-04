import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CommunityPage } from "../Page/Communities";
import { FriendPage } from "../Page/Friends";
import { FriendshipRequestPage } from "../Page/FriendshipRequest";
import { ProfilePage } from "../Page/Profile";
import ResetPassword from "../Page/ResetPassword";
import { SearchPage } from "../Page/Search";
import SendResetPassEmail from "../Page/SendResetPassEmail";
import Upload from "../Components/Cloudinary";
import { CommunityDetailPage } from "../Page/CommunityDetail";
import Login from "../Page/Login";
import PrivateRoute from "./PrivateRoute";
import CreateUser from "../Page/CreateUser";
import { UserPage } from "../Page/User";
import { PublicRoute } from "./PublicRouse";

const AppRoutes = () => (
  <BrowserRouter>
    <Routes>
      <Route
        path="/"
        element={
          <PrivateRoute redirectTo="/login">
            <ProfilePage />
          </PrivateRoute>
        }
      />
      <Route
        path="friends"
        element={
          <PrivateRoute redirectTo="/login">
            <FriendPage />
          </PrivateRoute>
        }
      />
      <Route
        path="communities"
        element={
          <PrivateRoute redirectTo="/login">
            <CommunityPage />
          </PrivateRoute>
        }
      />
      <Route
        path="search/:param"
        element={
          <PrivateRoute redirectTo="/login">
            <SearchPage />
          </PrivateRoute>
        }
      />
      <Route
        path="solicitacoes"
        element={
          <PrivateRoute redirectTo="/login">
            <FriendshipRequestPage />
          </PrivateRoute>
        }
      />
      <Route
        path="upload"
        element={
          <PrivateRoute redirectTo="/login">
            <Upload />
          </PrivateRoute>
        }
      />
      <Route
        path="communities/:communityid"
        element={
          <PrivateRoute redirectTo="/login">
            <CommunityDetailPage />
          </PrivateRoute>
        }
      />
      <Route
        path="perfil"
        element={
          <PrivateRoute redirectTo="/login">
            <CreateUser />
          </PrivateRoute>
        }
      />
      <Route
        path="user/:id"
        element={
          <PrivateRoute redirectTo="/login">
            <UserPage />
          </PrivateRoute>
        }
      />
      <Route
        path="search"
        element={
          <PrivateRoute redirectTo="/login">
            <SearchPage />
          </PrivateRoute>
        }
      />
      <Route
        path="register"
        element={
          <PublicRoute redirectTo='/'>
            <CreateUser />
          </PublicRoute>
        }
      />
      <Route path="resetpass/:token" element={<ResetPassword />} />
      <Route path="sendresetpassemail" element={<SendResetPassEmail />} />
      <Route
        path="login"
        element={
          <PublicRoute redirectTo='/'>
            <Login />
          </PublicRoute>
        }
      />
    </Routes>
  </BrowserRouter>
);
export default AppRoutes;

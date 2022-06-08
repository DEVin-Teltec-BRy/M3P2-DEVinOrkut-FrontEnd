import Upload from "../Components/Upload";
import { CommunityPage } from "../Page/Communities";
import { CommunityDetailPage } from "../Page/CommunityDetail";
import { CommunityMembersPage } from "../Page/CommunityMembers";
import CreateUser from "../Page/CreateUser";
import { FriendPage } from "../Page/Friends";
import { FriendshipRequestPage } from "../Page/FriendshipRequest";
import Login from "../Page/Login";
import { ProfilePage } from "../Page/Profile";
import { SearchPage } from "../Page/Search";
import { UserPage } from "../Page/User";

export const privateRoutes = [
  {
    path: "/",
    element: <ProfilePage />,
  },
  {
    path: "friends",
    element: <FriendPage />,
  },
  {
    path: "communities",
    element: <CommunityPage />,
  },
  {
    path: "search/:param",
    element: <SearchPage />,
  },
  {
    path: "solicitacoes",
    element: <FriendshipRequestPage />,
  },
  {
    path: "upload",
    element: <Upload />,
  },
  {
    path: "communities/:communityid",
    element: <CommunityDetailPage />,
  },
  {
    path: "user/:id",
    element: <UserPage />,
  },
  {
    path: "search",
    element: <SearchPage />,
  },
  {
    path: "communities/:communityid/members",
    element: <CommunityMembersPage />,
  },
];
export const publicRoutes = [
  {
    path: "register",
    element: <CreateUser />,
  },
  {
    path: "login",
    element: <Login />,
  },
];

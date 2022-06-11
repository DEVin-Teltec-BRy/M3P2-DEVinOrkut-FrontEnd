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
import { ForumPage } from "../Page/Forum";
import UploadImageCommunity from "../Components/uploadCommunity";
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
    path: "user/:id/friends",
    element: <FriendPage />,
  },
  {
    path: "user/:id/communities",
    element: <CommunityPage />,
  },
  {
    path: "search",
    element: <SearchPage />,
  },
  {
    path: "communities/:communityid/members",
    element: <CommunityMembersPage />,
  },
  {
    path: "communities/:communityid/forum/:forumid",
    element: <ForumPage />
  },
  {
    path: "/upload/community",
    element: <UploadImageCommunity/>,
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

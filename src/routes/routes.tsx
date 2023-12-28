import { Home } from "@mui/icons-material";
import HomePage from "../pages/HomePage";
import TrendingPage from "../pages/TrendingPage";
import UploadIdeaPage from "../pages/UploadIdeaPage";
import IdeaDetailsPage from "../pages/IdeaDetailsPage";
import WatchListPage from "../pages/WatchListPage";
import UserProfilePage from "../pages/UserProfilePage";


// general routes
export const generalRoutes = [
  {
    path: "/",
    component: <HomePage />,
  },
  {
    path: "/home",
    component: <HomePage />,
  },
  {
    path: "/trending",
    component: <TrendingPage />,
  },
];



// project related routes
export const ideaRelatedRoutes = [
  {
    path: "/allIdeas",
    component: <Home />,
  },
  {
    path: "/uploadIdea",
    component: <UploadIdeaPage />,
  },
  {
    path: "/ideaDetails/:ideaId",
    component: <IdeaDetailsPage />,
  },
];




// User related routes
export const userRelatedRoutes = [
  {
    path: "/watchlist",
    component: <WatchListPage />,
  },
  {
    path: "/userProfile/:userId",
    component: <UserProfilePage />,
  },
];



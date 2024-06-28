import AboutPage from "./pages/About/AboutPage";
import HomePage from "./pages/Home/HomePage";
import NotFoundPage from "./pages/NotFound/NotFoundPage";

export enum RouteName {
  HOME = "home",
  ABOUT = "about",
  NOT_FOUND = "not-found",
}

const routes = [
  {
    name: RouteName.HOME,
    path: "/",
    label: "Accueil",
    element: <HomePage />,
  },
  {
    name: RouteName.ABOUT,
    path: "/about",
    label: "A Propos",
    element: <AboutPage />,
  },
  {
    name: RouteName.NOT_FOUND,
    path: "*",
    element: <NotFoundPage />,
  },
];

export default routes;

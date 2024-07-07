import AboutPage from "./pages/About/AboutPage";
import ApartmentPage from "./pages/Apartment/ApartmentPage";
import HomePage from "./pages/Home/HomePage";
import NotFoundPage from "./pages/NotFound/NotFoundPage";

export enum RoutePath {
  HOME = "/",
  ABOUT = "/about",
  NOT_FOUND = "/not-found",
  APARTMENT = "/apartments/:id",
}

const routes = [
  {
    path: RoutePath.HOME,
    label: "Accueil",
    element: <HomePage />,
  },
  {
    path: RoutePath.ABOUT,
    label: "A Propos",
    element: <AboutPage />,
  },
  {
    path: RoutePath.APARTMENT,
    element: <ApartmentPage />,
  },
  {
    path: RoutePath.NOT_FOUND,
    element: <NotFoundPage />,
  },
  {
    path: "*",
    element: <NotFoundPage />,
  },
];

export default routes;

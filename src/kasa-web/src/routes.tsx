import AboutPage from "./pages/About/AboutPage";
import HomePage from "./pages/Home/HomePage";
import NotFoundPage from "./pages/NotFound/NotFoundPage";

const routes = [
  {
    path: "/",
    name: "Accueil",
    element: <HomePage />,
  },
  {
    path: "/about",
    name: "A Propos",
    element: <AboutPage />,
  },
  {
    path: "*",
    element: <NotFoundPage />,
  },
];

export default routes;

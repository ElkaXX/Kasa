import { NavLink } from "react-router-dom";
import routes, { RouteName } from "../../routes";
import "./NotFountPage.scss";

const NotFoundPage = () => {
  return (
    <div className="not-found">
      <div className="not-found__text">404</div>
      <div className="not-found__description">
        Oups! La page que vous demandez n'existe pas.
      </div>
      <NavLink
        className="not-found__link"
        to={routes.find((route) => route.name == RouteName.HOME)!.path}
      >
        Retourner sur la page d’accueil
      </NavLink>
    </div>
  );
};

export default NotFoundPage;

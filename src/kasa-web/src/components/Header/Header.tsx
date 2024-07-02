import { NavLink } from "react-router-dom";
import classnames from "classnames";
import routes, { RoutePath } from "../../routes";
import logo from "../../assets/LOGO.svg";
import "./Header.scss";

const Header = () => {
  return (
    <header className="header">
      <NavLink className="header__logo" to={RoutePath.HOME}>
        <img src={logo} alt="logo" className="header__img" />
      </NavLink>

      <nav className="header__navigation">
        <ul className="header__list">
          {routes
            .filter((route) => route.label)
            .map((route) => (
              <li key={route.path} className="header__item">
                <NavLink
                  className={({ isActive }) =>
                    classnames({
                      header__link: true,
                      header__link_active: isActive,
                    })
                  }
                  to={route.path}
                >
                  {route.label}
                </NavLink>
              </li>
            ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;

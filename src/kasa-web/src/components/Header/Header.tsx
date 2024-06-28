import { NavLink } from "react-router-dom";
import routes from "../../routes";
import logo from "../../assets/LOGO.svg";
import "./Header.scss";

const Header = () => {
  return (
    <header className="header">
      <img src={logo} alt="logo" className="header__logo" />

      <nav className="header__navigation">
        <ul className="header__list">
          {routes
            .filter((route) => route.name)
            .map((route) => (
              <li key={route.path} className="header__item">
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? "header__link header__link_active"
                      : "header__link"
                  }
                  to={route.path}
                >
                  {route.name}
                </NavLink>
              </li>
            ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;

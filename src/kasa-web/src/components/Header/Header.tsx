import { NavLink } from "react-router-dom";
import classes from "classnames";
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
            .filter((route) => route.label)
            .map((route) => (
              <li key={route.path} className="header__item">
                <NavLink
                  className={({ isActive }) =>
                    classes({
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

import "./Footer.scss";
import logo from "../../assets/LOGO.svg";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__content">
        <img src={logo} alt="logo" className="footer__logo" />
        <div className="footer__copy">© 2020 Kasa. All rights reserved</div>
      </div>
    </footer>
  );
};

export default Footer;

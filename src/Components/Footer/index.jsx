import { FaFacebook, FaInstagram, FaGithubAlt, FaLinkedin } from "react-icons/fa";
import "./Footer.scss";

const Footer = () => {
  return (
    <footer className="footer" data-testid="footer">
        <div className="footer__container">
          <p className="footer___copyright">
            &copy; RESTy by Bryan O. Garduno Gonzalez
          </p>
        </div>
    </footer>
  );
};

export default Footer;

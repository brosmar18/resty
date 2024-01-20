import { FaFacebook, FaInstagram, FaGithubAlt, FaLinkedin } from "react-icons/fa";
import "./Footer.scss";

const Footer = () => {
  return (
    <footer className="footer" data-testid="footer">
        <h3 className="title" data-testid="footer-title">RESTy</h3>
        <div className="brand__copyright" data-testid="copyright">
          <p>&copy; 2018</p>
          <p>All rights reserved</p>
        </div>
        <div className="brand__socials" data-testid="socials">
          <FaFacebook />
          <FaInstagram />
          <FaGithubAlt />
          <FaLinkedin />
        </div>
    </footer>
  );
};

export default Footer;

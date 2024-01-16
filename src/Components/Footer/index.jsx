import { FaFacebook, FaInstagram, FaGithubAlt, FaLinkedin } from "react-icons/fa";

import "./Footer.scss";

const Footer = () => {
  return (
    <footer className="footer">
        <h3 className="title">RESTy</h3>
        <div className="brand__copyright">
          <p>&copy; 2018</p>
          <p>All rights reserved</p>
        </div>
        <div className="brand__socials">
          <FaFacebook />
          <FaInstagram />
          <FaGithubAlt />
          <FaLinkedin />
        </div>
    </footer>
  );
};

export default Footer;

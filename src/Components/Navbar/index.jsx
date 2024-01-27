import { navLinks } from "../../Constants";
import { FaGithub, FaLinkedin, FaInstagram, FaFacebook } from "react-icons/fa";
import "./Navbar.scss";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="nav">
      <img src="/assets/logo.png" alt="logo" className="logo" />
      <ul className="nav__links">
        {navLinks.map((link) => (
          <li key={`nav-${link.label}`} className="nav__link">
            <Link to={link.route}>
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
      <div className="nav__icons">
        <FaGithub size={30} />
        <FaLinkedin size={30} />
        <FaInstagram size={30} />
        <FaFacebook size={30} />
      </div>
    </nav>
  );
};

export default Navbar;

import { navLinks } from "../../Constants";
import { FaGithub, FaLinkedin, FaInstagram, FaFacebook } from "react-icons/fa";
import "./Navbar.scss";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="nav" data-testid="navbar">
      <img src="/assets/logo.png" alt="logo" className="logo" data-testid="navbar-logo" />
      <ul className="nav__links">
        {navLinks.map((link) => (
          <li key={`nav-${link.label}`} className="nav__link" data-testid={`navbar-link-${link.label}`}>
            <Link to={link.route}>
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
      <div className="nav__icons" data-testid="navbar-icons">
        <FaGithub size={30} data-testid="navbar-icon-github" />
        <FaLinkedin size={30} data-testid="navbar-icon-linkedin" />
        <FaInstagram size={30} data-testid="navbar-icon-instagram" />
        <FaFacebook size={30} data-testid="navbar-icon-facebook" />
      </div>
    </nav>
  );
};

export default Navbar;

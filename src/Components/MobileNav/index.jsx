import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import { BiMenu } from "react-icons/bi";
import { FaGithub, FaLinkedin, FaInstagram, FaFacebook } from "react-icons/fa";
import { navLinks } from "@/Constants";
import "./MobileNav.scss";
import { Link } from "react-router-dom";

const MobileNav = () => {
  return (
    <Sheet>
      <SheetTrigger data-testid="mobile-nav-trigger">
        <BiMenu size={25} />
      </SheetTrigger>
      <SheetContent className="sheet-content" data-testid="mobile-nav-content">
        <img src="/assets/logo.png" alt="logo" className="logo" data-testid="mobile-nav-logo" />
        <ul className="nav__links">
          {navLinks.map((link) => (
            <li key={`nav-${link.label}`} className="nav__link" data-testid={`mobile-nav-link-${link.label}`}>
              <Link to={link.route}>{link.label}</Link>
            </li>
          ))}
        </ul>
        <div className="nav__icons" data-testid="mobile-nav-icons">
          <FaGithub size={30} data-testid="mobile-nav-icon-github" />
          <FaLinkedin size={30} data-testid="mobile-nav-icon-linkedin" />
          <FaInstagram size={30} data-testid="mobile-nav-icon-instagram" />
          <FaFacebook size={30} data-testid="mobile-nav-icon-facebook" />
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;

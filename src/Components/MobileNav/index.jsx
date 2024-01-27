import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { BiMenu } from "react-icons/bi";
import { FaGithub, FaLinkedin, FaInstagram, FaFacebook } from "react-icons/fa";
import { navLinks } from "@/Constants";
import './MobileNav.scss';

const MobileNav = () => {
  return (
    <Sheet>
      <SheetTrigger>
        <BiMenu size={25} />
      </SheetTrigger>
      <SheetContent className='sheet-content'>
            <img src="/assets/logo.png" alt="logo" className="logo" />
            <ul className="nav__links">
              {navLinks.map((link) => (
                <li key={`nav-${link.label}`} className="nav__link">
                  {link.label}
                </li>
              ))}
            </ul>
            <div className="nav__icons">
              <FaGithub size={30} />
              <FaLinkedin size={30} />
              <FaInstagram size={30} />
              <FaFacebook size={30} />
            </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;

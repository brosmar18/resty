import { useState } from "react";
import { HiMenuAlt4, HiX } from "react-icons/hi";
import "./Header.scss";

const Header = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <header className="header" data-testid="header">
      <nav className="nav">
        <div className="nav__logo" data-testid="logo">
          <img src="assets/logo.png" alt="logo" />
        </div>
        <ul className="nav__links">
          {["home", "history", "help"].map((item) => (
            <li className="nav__link" key={`link-${item}`} data-testid={`nav-link-${item}`}>
              <div />
              <a href={`${item}`}>{item}</a>
            </li>
          ))}
        </ul>
        <div className="nav__mobile" data-testid="nav-mobile">
          <HiMenuAlt4 onClick={() => setToggle(true)} data-testid='menu-icon' />

          {toggle && (
            <div data-testid="mobile-menu">
              <HiX onClick={() => setToggle(false)} data-testid='close-icon' />
              <ul>
                {["home", "history", "help"].map((item) => (
                  <li key={item} data-testid={`mobile-nav-link-${item}`}>
                    <a href={`${item}`} onClick={() => setToggle(false)}>
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;

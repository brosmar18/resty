import { useState } from "react";
import { HiMenuAlt4, HiX } from "react-icons/hi";
import "./Header.scss";

const Header = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <header className="header">
      <nav className="nav">
        <div className="nav__logo">
          <img src="assets/logo.png" alt="logo" />
          <ul className="nav__links">
            {["home", "history", "help"].map((item) => (
              <li className="nav__link" key={`link==-${item}`}>
                <div />
                <a href={`${item}`}>{item}</a>
              </li>
            ))}
          </ul>
          <div className="nav__mobile">
            <HiMenuAlt4 onClick={() => setToggle(true)} />

            {toggle && (
              <div>
                <HiX onClick={() => setToggle(false)} />
                <ul>
                  {["home", "history", "help"].map((item) => (
                    <li key={item}>
                      <a href={`${item}`} onClick={() => setToggle(false)}>
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;

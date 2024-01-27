import MobileNav from "../MobileNav";
import Navbar from "../Navbar";
import "./Header.scss";

const Header = () => {
  return (
    <header className="header" data-testid="header">
      <div className="full-nav">
        <Navbar />
      </div>
      <div className="mobile-nav">
        <MobileNav />
      </div>
    </header>
  );
};

export default Header;

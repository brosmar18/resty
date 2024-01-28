import { Link } from "react-router-dom";
import { FaHome, FaUser, FaEdit, FaCalendarAlt } from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";
import { SiElement } from "react-icons/si";
import './Sidebar.scss';

const Sidebar = () => {
  return (
    <div className="sidebar" data-testid="sidebar">
      <div className="sidebar__item" data-testid="sidebar-main">
        <h2 className="sidebar__item-title">Main</h2>
        <Link to="/" className="sidebar__link" data-testid="sidebar-link-home">
          <FaHome size={25} />
          <p className="sidebar__link-title">Home</p>
        </Link>
        <Link to="/app" className="sidebar__link" data-testid="sidebar-link-app">
          <SiElement size={25} />
          <p className="sidebar__link-title">App</p>
        </Link>
        <Link to="/user" className="sidebar__link" data-testid="sidebar-link-user">
          <FaUser size={25} />
          <p className="sidebar__link-title">User</p>
        </Link>
      </div>
      <div className="sidebar__item" data-testid="sidebar-general">
        <h2 className="sidebar__item-title">General</h2>
        <Link to="/notes" className="sidebar__link" data-testid="sidebar-link-notes">
          <FaEdit size={25} />
          <p className="sidebar__link-title">Notes</p>
        </Link>
        <Link to="/calendar" className="sidebar__link" data-testid="sidebar-link-calendar">
          <FaCalendarAlt size={25} />
          <p className="sidebar__link-title">Calendar</p>
        </Link>
      </div>
      <div className="sidebar__item" data-testid="sidebar-maintenance">
        <h2 className="sidebar__item-title">Maintenance</h2>
        <Link to="/settings" className="sidebar__link" data-testid="sidebar-link-settings">
          <IoMdSettings size={25} />
          <p className="sidebar__link-title">Settings</p>
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;

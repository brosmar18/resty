import { Link } from "react-router-dom";
import { FaHome, FaUser, FaEdit, FaCalendarAlt } from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";
import './Sidebar.scss'

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar__item">
        <h2 className="sidebar__item-title">Main</h2>
        <Link to="/" className="sidebar__link">
          <FaHome size={25} />
          <p className="sidebar__link-title">Home</p>
        </Link>
        <Link to="/" className="sidebar__link">
          <FaUser size={25} />
          <p className="sidebar__link-title">User</p>
        </Link>
      </div>
      <div className="sidebar__item">
        <h2 className="sidebar__item-title">General</h2>
        <Link to="/" className="sidebar__link">
          <FaEdit size={25} />
          <p className="sidebar__link-title">Notes</p>
        </Link>
        <Link to="/" className="sidebar__link">
          <FaCalendarAlt size={25} />
          <p className="sidebar__link-title">Calendar</p>
        </Link>
      </div>
      <div className="sidebar__item">
        <h2 className="sidebar__item-title">Maintenance</h2>
        <Link to="/" className="sidebar__link">
          <IoMdSettings size={25} />
          <p className="sidebar__link-title">Settings</p>
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;

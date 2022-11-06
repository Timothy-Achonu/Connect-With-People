import { NavLink } from "react-router-dom";

const Menu = ({ menu, showMenu }) => {
  return (
    <div className={`menu ${menu ? "show-menu" : ""}`}>
      <div className="close" onClick={showMenu}>
        X
      </div>
      <div className="menu-links">
        <NavLink onClick={showMenu} to="/" end>
          Home
        </NavLink>
        <NavLink onClick={showMenu} to="/users" end>
          Users
        </NavLink>
        <NavLink onClick={showMenu} to="/contact-us" end>
          Contact
        </NavLink>
        <NavLink onClick={showMenu} to="/about-us" end>
          About
        </NavLink>
      </div>
    </div>
  );
};
export default Menu;

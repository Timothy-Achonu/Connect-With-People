import { NavLink, Outlet } from "react-router-dom";
import Menu from "./Menu";
import ham from '../assets/icons8-hamburger-menu-32.png'
import rocket from '../assets/icons8-rocket-48.png'

const NavLayout = ({showMenu, menu}) => {
  
  return (
    <>
      <nav>
        <div className="conectar">
          conectar
          <img src={rocket} />
        </div>
        <div className="nav-links">
          <NavLink to="/" end>
            Home
          </NavLink>
          <NavLink to="/users" end>
            Users
          </NavLink>
          <NavLink to="/contact-us" end>
            Contact
          </NavLink>
          <NavLink to="/about-us" end>
            About
          </NavLink>
        </div>
        <figure className="hamburger-menu" onClick={showMenu}>
          <img src={ham}  alt="hamburger-menu"/>
        </figure>
        <Menu menu={menu} showMenu={showMenu}/>
        
      </nav>
      <Outlet />
    </>
  );
};
export default NavLayout;

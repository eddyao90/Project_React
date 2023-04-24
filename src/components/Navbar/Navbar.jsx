import { useContext, useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom';
import AuthContext from '../../contexts/AuthContext';
import { logout } from '../../stores/AccessTokenStore';
import './Navbar.css';

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false);
  const { currentUser } = useContext(AuthContext);
  
  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar)
  }

  const handleLogout = () => {
    logout()
  }

  return (
    <>
      {
        currentUser && 
        <nav className="navbar">
          <div className="navbar-top">

            <div className="menu-icon" onClick={handleShowNavbar}>

            </div>
              <div className={`nav-elements  ${showNavbar && 'active'}`}>
              <NavLink className='logo-nav' id='logo' to="/home" style={{ textDecoration: 'none' }}>Wanderluster</NavLink>
              <ul className='ul-navbar'>
              <li className="nav-item">
              <NavLink
                    className={({ isActive }) => `nav-link ${isActive ? 'active': ''} custom-class`}
                    to="/home"
                  >
                    Home
                  </NavLink>
            </li>
              <li className="nav-item">
              <NavLink
                    className={({ isActive }) => `nav-link ${isActive ? 'active': ''} custom-class`}
                    to={`/profile/${currentUser.id}`}
                  >
                    Profile
                  </NavLink>
                  </li>
                  <li className="nav-item">
              <NavLink
                    className={({ isActive }) => `nav-link ${isActive ? 'active': ''} custom-class`}
                    to={`/scrapbook/${currentUser?.id}`}>
                    Scrapbook
                  </NavLink>
              </li>
              <li className="nav-item">
              <NavLink
                    className={({ isActive }) => `nav-link ${isActive ? 'active': ''} custom-class`}
                    to="/people">
                    People
                  </NavLink>
              </li>
              <li className="nav-item">
              <NavLink
                    className={({ isActive }) => `nav-link ${isActive ? 'active': ''} custom-class`}
                    to="/maps">
                    Maps
                  </NavLink>
              </li>
              <li className="nav-item">
              <NavLink
                    className={({ isActive }) => `nav-link ${isActive ? 'active': ''} custom-class`}
                    to="/" onClick={handleLogout}>
                    Logout
                  </NavLink>
              </li>
              </ul>
            </div>
        </div>
      </nav>
      }
    </>
  )
}

export default Navbar
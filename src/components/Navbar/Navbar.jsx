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
          <div className="container">
            <div className="logo">
            </div>
            <div className="menu-icon" onClick={handleShowNavbar}>
              <svg viewBox="0 0 100 80" width="40" height="40">
          <rect width="100" height="20"></rect>
          <rect y="30" width="100" height="20"></rect>
          <rect y="60" width="100" height="20"></rect>
          </svg>
            </div>
              <div className={`nav-elements  ${showNavbar && 'active'}`}>
              <ul>
              <li className="nav-item">
              <NavLink
                    className={({ isActive }) => `nav-link ${isActive ? 'active': ''}`}
                    to="/home"
                  >
                    Home
                  </NavLink>
            </li>
              <li className="nav-item">
              <NavLink
                    className={({ isActive }) => `nav-link ${isActive ? 'active': ''}`}
                    to={`/profile/${currentUser.id}`}
                  >
                    Profile
                  </NavLink>
                  </li>
                  <li className="nav-item">
              <NavLink
                    className={({ isActive }) => `nav-link ${isActive ? 'active': ''}`}
                    to={`/scrapbook/${currentUser?.id}`}>
                    Scrapbook
                  </NavLink>
              </li>
              <li className="nav-item">
              <NavLink
                    className={({ isActive }) => `nav-link ${isActive ? 'active': ''}`}
                    to="/people">
                    People
                  </NavLink>
              </li>
              <li className="nav-item">
              <NavLink
                    className={({ isActive }) => `nav-link ${isActive ? 'active': ''}`}
                    to="/maps">
                    Maps
                  </NavLink>
              </li>
              <li className="nav-item">
              <NavLink
                    className={({ isActive }) => `nav-link ${isActive ? 'active': ''}`}
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
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
  return (

    <nav className="navbar navbar-default navbar-fixed-top">
    <div className="container-fluid">
      <a className="navbar-brand" href="#">Wanderluster</a>
      <div className="navbar-header navbar-right pull-right" id="navbarNav">
        <ul className="nav navbar-nav navbar-right">
          <li className="nav-item">
          <NavLink
                className={({ isActive }) => `nav-link ${isActive ? 'active': ''}`}
                to="/"
              >
                Home
              </NavLink>
         </li>
          <li className="nav-item">
          <NavLink
                className={({ isActive }) => `nav-link ${isActive ? 'active': ''}`}
                to="/register"
              >
                Register
              </NavLink>
              </li>
          <li className="nav-item">
          <NavLink
                className={({ isActive }) => `nav-link ${isActive ? 'active': ''}`}
                to="/login">
                Login
              </NavLink>
          </li>
        </ul>
        
      </div>
    </div>
  </nav>
  )
}

export default Navbar
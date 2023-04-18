import Navbar from "../../components/Navbar/Navbar";
import { Link, NavLink } from "react-router-dom";
import "./Maps.css";
import Map from "../../components/Map/Map";
import AuthContext from "../../contexts/AuthContext";
import { useContext, useEffect } from "react";

const Maps = () => {
  const {currentUser} = useContext(AuthContext)
  return (
    <>
      <div className="container-main">
        <main>
          <aside className="aside-profile">
            <div className="img-profile"></div>
            <div className="info-bio">
              <h3>{currentUser.firstName}</h3>

              <p>{currentUser.level}</p>
            </div>

            <div className="social-media">
              <div className="scrapbook-sidebar">
                <NavLink
                  className={({ isActive }) =>
                    `nav-link ${isActive ? "active" : ""}`
                  }
                  to="/scrapbook"
                >
                  Scrapbook
                </NavLink>
              </div>

              <div className="photos">
                <NavLink
                  className={({ isActive }) =>
                    `nav-link ${isActive ? "active" : ""}`
                  }
                  to="/photos"
                >
                  Photos
                </NavLink>
              </div>
            </div>
          </aside>

          <div className="main-middle">
            <section className="welcome">
              <h2>Where have Y'all been?</h2>
              <div className="count-infos">
                  <Map />
              </div>
            </section>
          </div>
        </main>
      </div>
    </>
  );
};

export default Maps;

import { useRef, useEffect, useContext, useState } from "react";
import AuthContext from "../../contexts/AuthContext";
import Navbar from "../../components/Navbar/Navbar";
import { Link, NavLink } from "react-router-dom";
import "./Maps.css";
import Map from "react-map-gl";
import * as mapboxgl from "mapbox-gl";

mapboxgl.accessToken =
  "pk.eyJ1IjoiZGluaG95YW8iLCJhIjoiY2xnZG1uYmRrMG1seDNzcDh4dDVyOXd5MyJ9.uQ3UqASFaekdVQtPZHMfYA";

const Maps = () => {
  const { currentUser } = useContext(AuthContext);

  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lng, setLng] = useState(40.41);
  const [lat, setLat] = useState(-3.70);
  const [zoom, setZoom] = useState(2);

  useEffect(() => {
    if (map.current) return; // initialize map only once
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/streets-v12",
      center: [lng, lat],
      zoom: zoom,
    });
  });

  return (
    <>
      <Navbar />
      <div className="container-main">
        <main>
          <aside className="aside-profile">
            <div className="img-profile"></div>
            <div className="info-bio">
              <h3>Profile</h3>

              <p>Traveler</p>
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
                <div>
                  <div ref={mapContainer} className="map-container" />
                </div>
              </div>
            </section>
          </div>
        </main>
      </div>
    </>
  );
};

export default Maps;

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
          <div className="main-middle">
            <section className="welcome-map">
              <h2 className="map-head">Where y'all have been?</h2>
                  <Map />
            </section>
          </div>
        </main>
      </div>
    </>
  );
};

export default Maps;

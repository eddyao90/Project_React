import { useContext } from "react";
import AuthContext from "../../contexts/AuthContext";
import Navbar from "../../components/Navbar/Navbar";
import { Link, NavLink } from 'react-router-dom';
import './Maps.css';

const Maps= () => {
    const {currentUser} = useContext(AuthContext)
    return (
        <>
        <Navbar />
            <div className="container-main">
                <main>
                    <aside className="aside-profile">
                        <div className="img-profile">
                        </div>
                        <div className="info-bio">
                            <h3>Profile</h3>
    
                            <p>Traveler</p>
                        </div>
    
                        <div className="social-media">
               
                            <div className="scrapbook-sidebar">
                            <NavLink
                            className={({ isActive }) => `nav-link ${isActive ? 'active': ''}`}
                            to="/scrapbook">
                            Scrapbook
                            </NavLink>
                            </div>
    
                            <div className="photos">
                            <NavLink
                            className={({ isActive }) => `nav-link ${isActive ? 'active': ''}`}
                            to="/photos">
                            Photos
                            </NavLink>
                            </div>
    
    
                        </div>
    
                    </aside>
    
                    <div className="main-middle">
                        <section className="welcome">
                            <h2>Maps</h2>
                            <div className="count-infos">

                            </div>
                        </section>
    
                    </div>
    
                    
                </main>
            </div>
        </>
    )
}

export default Maps;
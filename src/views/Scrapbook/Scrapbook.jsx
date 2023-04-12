import { useContext } from "react";
import AuthContext from "../../contexts/AuthContext";
import Navbar from "../../components/Navbar/Navbar";
import { Link, NavLink } from 'react-router-dom';
import './Scrapbook.css';
import Form from "../../components/Form/Form"


const Scrapbook= () => {
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

                            <div className="profile-sidebar">
                            <NavLink
                            className={({ isActive }) => `nav-link ${isActive ? 'active': ''}`}
                            to="/profile"
                            >
                            Profile
                            </NavLink>
                            </div>

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
                            <h2>Scrapbook</h2>
                        </section>
                        <Form />
    
                    </div>
                </main>
            </div>
        </>
    )
}

export default Scrapbook;
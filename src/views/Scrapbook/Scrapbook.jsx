import { useContext } from "react";
import AuthContext from "../../contexts/AuthContext";
import Navbar from "../../components/Navbar/Navbar";
import { Link, NavLink } from 'react-router-dom';
import './Scrapbook.css';

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
                            <div className="count-infos">
                            <form action="/community" method="POST" enctype="multipart/form-data">
                            <textarea className="form-control {{#if errors.body}}is-invalid{{/if}}" id="body" rows="3" placeholder="Today I ate so healthy that I want to share it" name="body" required>{}</textarea>
                            <div className=" mar-top clearfix d-grid gap-1 d-md-flex justify-content-md-end">
                            <label for="image-input"></label>
                            <input type="file" name="image" id="image-input" className="form-control-file" style="display: none;visibility: none" value={values.firstName}
             onChange={handleChange}
             error={errors.firstName}
           />
                            <button className="btn-share" type="submit">Share</button>
                            </div>
                            </form>
                            </div>
                        </section>
    
                    </div>
                </main>
            </div>
        </>
    )
}

export default Scrapbook;
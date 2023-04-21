import { Link, NavLink } from 'react-router-dom';
import './Edit.css';
import EditProfile from "../../components/EditProfile/EditProfile";
import { useContext } from 'react';
import AuthContext from '../../contexts/AuthContext';

const Edit= () => {
    const { currentUser } = useContext(AuthContext);
    return (
        <>
            <div className="container-main">
                <main>
                    {/*<aside className="aside-profile">
                        <div className="img-profile">
                        </div>
                        <div className="info-bio">
                            <h3>{currentUser.firstName}</h3>
    
                            <p>{currentUser.level}</p>
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
    
                    </aside>*/}

                  
                    <div className="main-middle">
                        <section className="welcome-edit-profile">
                                <EditProfile />
                        </section>
    
                    </div>
                    
                </main>
            </div>
        </>
    )
}

export default Edit;
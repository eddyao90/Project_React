import { useContext, useEffect, useState  } from "react";
import AuthContext from "../../contexts/AuthContext";
import { Link, NavLink, useParams } from 'react-router-dom';
import './Scrapbook.css';
import Comments from "../../components/Comment/Comment";
import { getOneUser } from "../../services/UserService";

export default function Scrapbook(){
    const [profile, setProfile] = useState(null);
    const {currentUser} = useContext(AuthContext);
    const { id } = useParams()

    useEffect(() => {
        if(id) {
            getOneUser(id)
            .then(res => setProfile(res))
            .catch(err => console.log(err))
        }
    }, [id])
       
    return (
        <>
            <div className="container-main">
                <main>
                    <aside className="aside-profile">
                        <div className="img-profile">
                        <img src={profile?.image} alt='user image' />
                        </div>
                        <div className="info-bio">
                        <h3>{profile?.firstName}</h3>
    
                        <p>{profile?.level}</p>
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
                            to={`/scrapbook/${profile?.id}`}>
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
                        <section className="welcome-scrapbook">
                            <h2>Scrapbook</h2>
                            <Comments id={id}/>
                        </section>
                        
    
                    </div>
                </main>
            </div>
        </>
    )
}

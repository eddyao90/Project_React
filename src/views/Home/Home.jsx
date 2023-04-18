import { useContext } from "react";
import AuthContext from "../../contexts/AuthContext";
import { Link, NavLink } from 'react-router-dom';
import './Home.css';
import Follow from "../../components/Follow/Follow";

const Home= () => {
    const {currentUser} = useContext(AuthContext)
    return (
    <>
        <div className="container-main">
            <main>
                <aside className="aside-profile">
                    <div className="img-profile">
                    </div>
                    <div className="info-bio">
                        <h3>{currentUser.firstName}</h3>

                        <p>{currentUser.level}</p>
                    </div>

                    <div className="social-media">
                        <div className="edit-profile-sidebar">
                        <NavLink
                        className={({ isActive }) => `nav-link ${isActive ? 'active': ''}`}
                        to="/edit-profile"
                        >
                        Edit profile
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
                        <h2>Welcome, {currentUser.firstName}</h2>

                        <p><span>Today´s inspiration:</span> Api result</p>

                        <div className="count-infos">
                            <div className="photos-home">
                                <p>Photos</p>

                                <div className="img">

                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                                        <path fill="none" d="M0 0h24v24H0z" />
                                        <path d="M13 21v2.5l-3-2-3 2V21h-.5A3.5 3.5 0 0 1 3 17.5V5a3 3 0 0 1 3-3h14a1 1 0 0 1 1 1v17a1 1 0 0 1-1 1h-7zm0-2h6v-3H6.5a1.5 1.5 0 0 0 0 3H7v-2h6v2zm6-5V4H6v10.035A3.53 3.53 0 0 1 6.5 14H19zM7 5h2v2H7V5zm0 3h2v2H7V8zm0 3h2v2H7v-2z" />
                                    </svg>

                                    <p></p>
                                </div>

                            </div>

                            <div className="countires-home">
                                <p>Countries</p>
                                <div className="img">

                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                                        <path fill="none" d="M0 0h24v24H0z" />
                                        <path d="M12 18.26l-7.053 3.948 1.575-7.928L.587 8.792l8.027-.952L12 .5l3.386 7.34 8.027.952-5.935 5.488 1.575 7.928L12 18.26zm0-2.292l4.247 2.377-.949-4.773 3.573-3.305-4.833-.573L12 5.275l-2.038 4.42-4.833.572 3.573 3.305-.949 4.773L12 15.968z" />
                                    </svg>

                                    <p>{currentUser.countries}</p>
                                </div>

                            </div>

                            <div className="cities-home">
                                <p>Cities</p>

                                <div className="img">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                                        <path fill="none" d="M0 0h24v24H0z" />
                                        <path d="M12 18.26l-7.053 3.948 1.575-7.928L.587 8.792l8.027-.952L12 .5l3.386 7.34 8.027.952-5.935 5.488 1.575 7.928L12 18.26zm0-2.292l4.247 2.377-.949-4.773 3.573-3.305-4.833-.573L12 5.275l-2.038 4.42-4.833.572 3.573 3.305-.949 4.773L12 15.968z" />
                                    </svg>

                                    <p>{currentUser.cities}</p>
                                </div>

                            </div>
                        </div>
                    </section>

                    <div className="main-middle">
                        {/* <h2>Upcoming trips: </h2> */}
                    </div>
                </div>
                <Follow />
            </main>
        </div>
    </>


    )
}

export default Home;
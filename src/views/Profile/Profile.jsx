import { useContext, useEffect, useState } from "react";
import AuthContext from "../../contexts/AuthContext";
import Follow from "../../components/Follow/Follow";
import { Link, NavLink, useParams } from 'react-router-dom';
import './Profile.css'
import { getOneUser } from "../../services/UserService";
import FollowerList from "../../components/FollowerList/FollowerList";


const date = new Date("2023-04-11T00:00:00.000Z");
const options = { year: 'numeric', month: 'long', day: 'numeric' };
const formattedDate = date.toLocaleDateString('en-GB', options);

export default function Profile(){
    const [profile, setProfile] = useState(null);
    const { id } = useParams(); 
    const { currentUser } = useContext(AuthContext);
    console.log("PROFILE",profile)
    useEffect(() => {
        if(id) {
            getOneUser(id)
            .then(res => setProfile(res))
            .catch(err => console.log(err))
        }
    }, [id])

    useEffect(() => {
        console.log(profile)
    }, [profile])
       
    return (
    <>

        <div className="container-main">
            <main>
                <aside className="aside-profile">
                    <div className="img-profile">
                    <img src={profile?.image} alt='user image' />
                    </div>
                    <div className="info-bio">
                        <h3>{profile?.username}</h3>

                        <p>{profile?.level}</p>
                    </div>

                    <div className="social-media">
           
                        <div className="scrapbook-sidebar">
                        <NavLink
                        className={({ isActive }) => `nav-link ${isActive ? 'active': ''}`}
                        to={`/scrapbook/${profile?.id}`}>
                        Scrapbook
                        </NavLink>
                        </div>
                        <div className="maps">
                        <NavLink
                        className={({ isActive }) => `nav-link ${isActive ? 'active': ''}`}
                        to="/maps">
                        Maps
                        </NavLink>
                        </div>
                        {/*<div className="photos">
                        <NavLink
                        className={({ isActive }) => `nav-link ${isActive ? 'active': ''}`}
                        to="/photos">
                        Photos
                        </NavLink>
                        </div>
                    */}

                    </div>

                </aside>

                <div className="main-middle">
                    <section className="welcome">
                        <h2>{profile?.firstName} {profile?.lastName}</h2>
                        <div className="count-infos-profile">
                            {/*<div className="photos-home">
                                <p>Photos</p>

                                <div className="img">

                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                                        <path fill="none" d="M0 0h24v24H0z" />
                                        <path d="M13 21v2.5l-3-2-3 2V21h-.5A3.5 3.5 0 0 1 3 17.5V5a3 3 0 0 1 3-3h14a1 1 0 0 1 1 1v17a1 1 0 0 1-1 1h-7zm0-2h6v-3H6.5a1.5 1.5 0 0 0 0 3H7v-2h6v2zm6-5V4H6v10.035A3.53 3.53 0 0 1 6.5 14H19zM7 5h2v2H7V5zm0 3h2v2H7V8zm0 3h2v2H7v-2z" />
                                    </svg>

                                    <p>64</p>
                                </div>

                            </div>*/}

                            <div className="countires-home">
                                <p className="tag-country-city">Countries</p>
                                <div className="img">

                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                                        <path fill="none" d="M0 0h24v24H0z" />
                                        <path d="M12 18.26l-7.053 3.948 1.575-7.928L.587 8.792l8.027-.952L12 .5l3.386 7.34 8.027.952-5.935 5.488 1.575 7.928L12 18.26zm0-2.292l4.247 2.377-.949-4.773 3.573-3.305-4.833-.573L12 5.275l-2.038 4.42-4.833.572 3.573 3.305-.949 4.773L12 15.968z" />
                                    </svg>

                                    <p>{profile?.countries}</p>
                                </div>

                            </div>

                            <div className="cities-home">
                                <p className="tag-country-city">Cities</p>

                                <div className="img">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                                        <path fill="none" d="M0 0h24v24H0z" />
                                        <path d="M12 18.26l-7.053 3.948 1.575-7.928L.587 8.792l8.027-.952L12 .5l3.386 7.34 8.027.952-5.935 5.488 1.575 7.928L12 18.26zm0-2.292l4.247 2.377-.949-4.773 3.573-3.305-4.833-.573L12 5.275l-2.038 4.42-4.833.572 3.573 3.305-.949 4.773L12 15.968z" />
                                    </svg>

                                    <p>{profile?.cities}</p>
                                </div>

                            </div>

                            
                        </div>
                        <div>
                        {
                            profile &&
                            <ul className="profile-list">
                                <p className="detail"><b>Gender:</b> {profile.gender}</p>
                                <p className="detail"><b>Birthday:</b> {profile.birthday && new Date(profile.birthday).toLocaleDateString('en-GB', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
                                <p className="detail"><b>Languages:</b> {profile.language}</p>
                                <p className="detail"><b>Looking for:</b> {profile.looking}</p>
                                <p className="detail"><b>Travel type:</b> {profile.travel}</p>
                                <p className="detail"><b>Activities:</b> {profile.activities}</p>
                                <p className="detail"><b>Books:</b> {profile.books}</p>
                                <p className="detail"><b>Music:</b> {profile.music}</p>
                                <p className="detail"><b>Food:</b> {profile.food}</p>
                                <p className="detail"><b>Top 3 countries:</b> {profile.top3}</p>

                            </ul>
                        }
                        </div>
                    </section>
                </div>
                <FollowerList />
            </main>
        </div>
    </>
    )
}

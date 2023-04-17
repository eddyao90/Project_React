import './Follow.css';
import { useState } from 'react';
import { followUser } from '../../services/FollowService';

const Follow = () => {
    const [usersList, setUsersList] = useState([]);


    return (
        <aside className="aside-friends-community">
                    <div className="friends-community">
                        <section className="friends">
                            <div className="info-friends">
                                <h2>Follower</h2>
                            </div>

                            <div className="list-friends">
                                <ul className="list-column">
                                    
                                {usersList.map((followUser) => <li>{user.username}</li>)}
                                </ul>
                            </div>

                            <a href="#">
                                <h4>See all</h4>
                            </a>

                        </section>

                       {/* <section className="communities">
                            <div className="info-communities">
                                <h2>Communities (3)</h2>
                            </div>

                            <div className="list-communities">
                                <ul className="list-column-communities">
                                    <li>


                                        <p>Robots</p>

                                    </li>

                                    <li>

                                        <p>Smile always</p>

                                    </li>

                                    <li>


                                        <p>Ironhackers</p>

                                    </li>
                                </ul>
                            </div>

                            <a href="#">
                                <h4>See all</h4>
                            </a>

                        </section>*/}
                    </div>
                </aside>
    )
}

export default Follow
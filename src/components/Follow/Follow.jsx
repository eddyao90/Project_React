import './Follow.css';
import { useContext, useEffect, useState } from 'react';
import { followUser, getPeopleIFollow, getPeopleWhoFollows } from '../../services/FollowService';
import AuthContext from '../../contexts/AuthContext';
import { Link } from 'react-router-dom';

const Follow = () => {
    const [followList, setFollowList] = useState([]);
    const [followersList, setFollowersList] = useState([]);
    const { currentUser } = useContext(AuthContext);

    useEffect(() => {
        if(currentUser) {
            getPeopleIFollow(currentUser.id)
            .then(followList => {
                const splited = followList.slice(0, 3);
                setFollowList(splited)
            })
            .catch(err => console.los(err))
            
            getPeopleWhoFollows(currentUser.id)
            .then(followersList => {
                const splited = followersList.slice(0, 3);
                setFollowersList(splited)
            })
            .catch(err => console.los(err))
        }
    }, [currentUser])

    return (
        <aside className="aside-friends-community">
                    <div className="friends-community">
                        {
                            followList?.length > 0 && 
                            <section className="friends">
                            <div className="info-friends">
                                <h2>Following</h2>
                            </div>

                            <div className="list-friends">
                                <ul className="list-column">
                                {
                                    followList.map((follow) => (
                                        <li className='following-list' key={follow._id}>
                                            <Link to={`/profile/${follow.following.id}`} >
                                                <img src={follow.following.image} alt='user image' />
                                                <p className='username-follow'>{follow.following.username}</p>
                                            </Link>
                                        </li>
                                    ))
                                }
                                </ul>
                            </div>

                            <a className='seeall' href="/all-follows">
                                <h4 className='see-all'>See all</h4>
                            </a>
                            </section>
                        }

                        {
                            followersList?.length > 0 && 
                            <section className="followers">
                            <div className="info-friends">
                                <h2>Followers</h2>
                            </div>

                            <div className="list-friends">
                                <ul className="list-column">
                                {
                                    followersList.map((follow) => (
                                        <li key={follow._id}>
                                            <Link to={`/profile/${follow.follower.id}`} style={{ textDecoration: 'none' }}>
                                                <img src={follow.follower.image} alt='user image' />
                                                <p>{follow.follower.username}</p>
                                            </Link>
                                        </li>
                                    ))
                                }
                                </ul>
                            </div>

                            <a className='seeall' href="/all-follows">
                            <h4 className='see-all'>See all</h4>
                            </a>

                        </section>
                        }
                    </div>
                </aside>
    )
}

export default Follow
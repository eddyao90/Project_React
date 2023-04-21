import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../../contexts/AuthContext";
import { getPeopleIFollow, getPeopleWhoFollows } from "../../services/FollowService";

export default function FollowList () {
    const [followList, setFollowList] = useState([]);
    const [followersList, setFollowersList] = useState([]);
    const { currentUser } = useContext(AuthContext);

    useEffect(() => {
        if(currentUser) {
            getPeopleIFollow(currentUser.id)
            .then(followList => {
                setFollowList(followList)
            })
            .catch(err => console.los(err))
            
            getPeopleWhoFollows(currentUser.id)
            .then(followersList => {
                setFollowersList(followersList)
            })
            .catch(err => console.los(err))
        }
    }, [currentUser])
    return (
        
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
                                            <Link to={`/profile/${follow.follower.id}`} >
                                                <img src={follow.follower.image} alt='user image' />
                                                <p>{follow.follower.username}</p>
                                            </Link>
                                        </li>
                                    ))
                                }
                                </ul>
                            </div>

                        </section>
                        }
                    </div>
    )
}
import { useContext, useEffect, useState } from "react";
import AuthContext from "../../contexts/AuthContext";
import { getPeopleIFollow, getPeopleWhoFollows } from "../../services/FollowService";
import { Link , useParams } from "react-router-dom";
import "./FollowList.css";

export default function FollowList () {
    const [followList, setFollowList] = useState([]);
    const [followersList, setFollowersList] = useState([]);
    const { currentUser } = useContext(AuthContext);
    const { id } = useParams()

useEffect(() => {
  if (id) {
    getPeopleIFollow(id)
    .then((followList) => {
      setFollowList(followList);
    })
    .catch((err) => console.log(err));

    getPeopleWhoFollows(id)
      .then((followersList) => {
        setFollowersList(followersList);
      })
      .catch((err) => console.log(err));
  } else if (currentUser) {
    getPeopleIFollow(currentUser.id)
      .then((followList) => {
        setFollowList(followList);
      })
      .catch((err) => console.log(err));

    getPeopleWhoFollows(currentUser.id)
      .then((followersList) => {
        setFollowersList(followersList);
      })
      .catch((err) => console.log(err));
  }
}, [currentUser, id]);
    return (
        
        <div className="friends-community">
                        {
                            followList?.length > 0 && 
                            <section className="friends">
                            <div className="info-friends">
                                <h2 className="people-list">Following</h2>
                            </div>

                            <div className="list-friends">
                                <ul className="list-column-people">
                                {
                                    followList.map((follow) => (
                                        <li className='following-list-people' key={follow._id}>
                                            <Link to={`/profile/${follow.following.id}`} style={{ textDecoration: 'none' }} >
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
                                <h2 className="people-list">Followers</h2>
                            </div>

                            <div className="list-friends">
                                <ul className="list-column">
                                {
                                    followersList.map((follow) => (
                                        <li className='following-list' key={follow._id}>
                                            <Link to={`/profile/${follow.follower.id}`} style={{ textDecoration: 'none' }} >
                                                <img src={follow.follower.image} alt='user image' />
                                                <p className='username-follower'>{follow.follower.username}</p>
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
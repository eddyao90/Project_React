import './FollowerList.css';
import { useContext, useEffect, useState } from 'react';
import { followUser, getPeopleIFollow, getPeopleWhoFollows } from '../../services/FollowService';
import AuthContext from '../../contexts/AuthContext';
import { Link, useParams } from 'react-router-dom';
import { getOneUser } from "../../services/UserService";

const FollowerList = () => {
    const [followList, setFollowList] = useState([]);
    const [followersList, setFollowersList] = useState([]);
    const { currentUser } = useContext(AuthContext);
    const { id } = useParams()

    useEffect(() => {
        if (id) {
          getPeopleIFollow(id)
            .then((followList) => {
                const shuffled = followList.sort(() => Math.random() - 0.5);
                const randomUsers = shuffled.slice(0, 3);
                setFollowList(randomUsers);
            })
            .catch((err) => console.log(err));
      
          getPeopleWhoFollows(id)
            .then((followersList) => {
                const shuffled = followersList.sort(() => Math.random() - 0.5);
                const randomUsers = shuffled.slice(0, 3);
                setFollowersList(randomUsers);
            })
            .catch((err) => console.log(err));
        } else if (currentUser) {
          getPeopleIFollow(currentUser.id)
            .then((followList) => {
              const splited = followList.slice(0, 3);
              setFollowList(splited);
            })
            .catch((err) => console.log(err));
      
          getPeopleWhoFollows(currentUser.id)
            .then((followersList) => {
              const splited = followersList.slice(0, 3);
              setFollowersList(splited);
            })
            .catch((err) => console.log(err));
        }
      }, [currentUser, id]);

    return (
        <aside className="aside-friends-community">
                    <div className="friends-community">
                    {
  followList?.length > 0 ?
    <section className="friends">
      <div className="info-friends">
          <h2 className='follow-side'>Following</h2>
      </div>

      <div className="list-friends">
          <ul className="list-column">
          {
              followList.map((follow) => (
                  <li className='following-list' key={follow._id}>
                      <Link className="list-follow-follow" to={`/profile/${follow.following.id}`} style={{ textDecoration: 'none' }} >
                          <img src={follow.following.image} alt='user image' />
                          <p className='username-follow'>{follow.following.username}</p>
                      </Link>
                  </li>
              ))
          }
          </ul>
      </div>

      <a className='seeall'  style={{ textDecoration: 'none' }} href={`/all-follows/${id}`}>
          <h4 className='see-all'>See all</h4>
      </a>
    </section>
  :
  <div className="info-friends">
          <h2 className='follow-side'>Following</h2>
  <p className='message-no-follow'>You're not following anyone yet.<br />
   Go to People to find new friends!
</p>
          <div class='container-emoji'>
  <div className='tear'></div>
  <div className='tear2'></div>
  <div className='face'>
      <div className='eyebrow'>︶</div>
      <div className='eyebrow'>︶</div>
      <div className='eye'></div>
      <div className='eye'></div>
      <div cclassName='mouth'></div>
  </div>
</div>
</div>

}

{followersList?.length > 0 ? (
  <section className="followers">
    <div className="info-friends">
      <h2 className='follow-side'>Followers</h2>
    </div>
    <div className="list-friends">
      <ul className="list-column">
        {followersList.map((follow) => (
          <li key={follow._id}>
            <Link to={`/profile/${follow.follower.id}`} style={{ textDecoration: 'none' }}>
              <img src={follow.follower.image} alt='user image' />
              <p>{follow.follower.username}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
    <a className='seeall'  style={{ textDecoration: 'none' }}  href={`/all-follows/${id}`}>
      <h4 className='see-all' >See all</h4>
    </a>
  </section>
) : (
    <div className="info-friends">
      <h2 className='follow-side'>Followers</h2>
  <p className='message-no-follow'>You don't have any followers yet.</p>
  </div>
)}
                    </div>
                </aside>
    )
}

export default FollowerList
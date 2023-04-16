import { useContext, useEffect, useState } from "react";
import AuthContext from "../../contexts/AuthContext";
import './People.css';
import { getPeopleToFollow } from "../../services/UserService";
import { followUser } from "../../services/FollowService";


const People= () => {
    const [update, setUpdate] = useState(true)
    const [usersList, setUsersList] = useState([]);
    const { currentUser } = useContext(AuthContext);

    useEffect(() => {
        if(currentUser) {
            getPeopleToFollow(currentUser.id)
        .then(response => {
            setUsersList(response)
            })
            .catch(err => console.log(err))
        }
    }, [update, currentUser])

    const handleFollow = (id) => {
        followUser(id, currentUser.id)
        .then(res => setUpdate(!update))
        .catch(err => console.log(err))
    }

    return (
        <div className="main-middle">
            <section className="welcome">
                <h2>People to Follow</h2>
                {
                    usersList.length > 0 &&
                    usersList.map(user => (
                        <>
                        {
                            user.id !== currentUser.id && !user.alreadyFollowed &&
                            <div>
                                <h5>{user.name} {user.lastname}</h5>
                                <p>{user.username}</p>
                                <button onClick={() => handleFollow(user.id)}>Follow</button>
                            </div>
                        }
                        </>
                    ))
                }
            </section>
        </div>
    )
}

export default People;
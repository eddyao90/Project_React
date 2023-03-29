import { useContext } from "react";
import AuthContext from "../../contexts/AuthContext";
import { getCurrentUser } from "../../services/UserService";

const Profile = () => {
    const {getCurrentUser} = useContext(AuthContext)
    return (
        <div>
            <h1>Profile of {getCurrentUser.firstName}</h1>
        </div>
    )
}

export default Profile;
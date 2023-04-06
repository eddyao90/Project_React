import { useContext } from "react";
import AuthContext from "../../contexts/AuthContext";
import Navbar from "../../components/Navbar/Navbar";

const Edit= () => {
    const {currentUser} = useContext(AuthContext)
    return (
        <div>
            <Navbar />
            <h1>Edit Profile</h1>
        </div>
    )
}

export default Edit;
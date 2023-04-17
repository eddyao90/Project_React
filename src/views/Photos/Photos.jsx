import { useContext } from "react";
import AuthContext from "../../contexts/AuthContext";
import Navbar from "../../components/Navbar/Navbar";

const Photos= () => {
    const {currentUser} = useContext(AuthContext)
    return (
        <div>
            <h1>Photos</h1>
        </div>
    )
}

export default Photos;
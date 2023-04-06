import { useContext } from "react";
import AuthContext from "../../contexts/AuthContext";
import Navbar from "../../components/Navbar/Navbar";

const Maps= () => {
    const {currentUser} = useContext(AuthContext)
    return (
        <div>
            <Navbar />
            <h1>Maps</h1>
        </div>
    )
}

export default Maps;
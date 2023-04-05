import { useContext } from "react";
import AuthContext from "../../contexts/AuthContext";
import Navbar from "../../components/Navbar/Navbar";

const Home= () => {
    const {currentUser} = useContext(AuthContext)
    return (
        <div>
            <Navbar />
            <h1>Profile of {currentUser.firstName}</h1>
        </div>
    )
}

export default Home;
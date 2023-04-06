import { useContext } from "react";
import AuthContext from "../../contexts/AuthContext";
import Navbar from "../../components/Navbar/Navbar";

const Scrapbook= () => {
    const {currentUser} = useContext(AuthContext)
    return (
        <div>
            <Navbar />
            <h1>Scrapbook</h1>
        </div>
    )
}

export default Scrapbook;
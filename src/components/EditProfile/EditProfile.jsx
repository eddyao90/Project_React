import { useContext, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";
import AuthContext from "../../contexts/AuthContext"
import { editUser } from "../../services/UserService";

const genderOptions = ['Female', 'Male', 'Prefer no to say'];


export default function EditProfile() {
    const [image, setImage] = useState([]);
    const [user, setUser] = useState({
        firstName: "",
        lastName: "",
        gender: "Prefer not to say",
        birthday: "",
        language: "",
        looking: "",
        travel: "",
        activities: "",
        books: "",
        music: "",
        food: "",
        top3: ""

    })
    const { currentUser } = useContext(AuthContext);
    const navigate = useNavigate();

    useEffect(() => {
        if(currentUser) {
            setUser({
                firstName: currentUser.firstName,
                lastName: currentUser.lastName
            })
        }
    }, [currentUser])


    const handleOnChange = (e) => {
        console.log(e.target.value)
        const { name, value, type, files } = e.target;
        if(type !== 'file') {
            setUser({ ...user, [name]: value });
        } else {
            setImage(files);
        }
    };
    
    const handleOnSubmit = (e) => {
        e.preventDefault()
        let formData = new FormData();

        formData.append("_id", currentUser["_id"]);
    
        for (let data in user) {
            formData.append(data, user[data]);
        }
    
        for (let img of image) {
            formData.append("image", img);
        }
        
        editUser(formData)
        .then(response => {
            navigate(`/profile/${currentUser.id}`)
        })
        .catch(err => console.log(err))
    }

    return(
        <div className="EditProfile">
            <form onSubmit={ handleOnSubmit }>
                <div className="form-edit-profile">
                    <label>Image:</label>
                    <input name= 'image' type='file' onChange={handleOnChange} />
                
                    <label>First Name:</label>
                    <input name= 'firstName' value={user.firstName} type='text' onChange={handleOnChange} />

                    <label>Last Name:</label>
                    <input name= 'lastName' value={user.lastName} type='text' onChange={handleOnChange} />
                
                    <label>Gender:</label>
                    <select name="gender" onChange={handleOnChange}>
                        {
                            genderOptions.map(option => (
                                <option value={option}>{option}</option>
                            ))
                        }
                    </select>

                    <label>Birthday:</label>
                    <input name= 'birthday' value={user.birthday} type='text' onChange={handleOnChange} />

                    <label>Language:</label>
                    <input name= 'language' value={user.language} type='text' onChange={handleOnChange} />
                
                    <label>Looking for:</label>
                    <input name='looking' value={user.looking} type='text' onChange={handleOnChange} />

                    <label>Travel type:</label>
                    <input name= 'travel' value={user.travel} type='text' onChange={handleOnChange} />

                    <label>Activities:</label>
                    <input name= 'activities' value={user.activities} type='text' onChange={handleOnChange} />
                
                    <label>Books:</label>
                    <input name='books' value={user.books} type='text' onChange={handleOnChange} />

                    <label>Music:</label>
                    <input name= 'music' value={user.music} type='text' onChange={handleOnChange} />

                    <label>Food:</label>
                    <input name= 'food' value={user.food} type='text' onChange={handleOnChange} />
                
                    <label>Top 3 countries:</label>
                    <input name='top3' value={user.top3} type='text' onChange={handleOnChange} />

                    
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

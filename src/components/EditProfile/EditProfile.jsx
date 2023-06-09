import { useContext, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";
import AuthContext from "../../contexts/AuthContext"
import { editUser } from "../../services/UserService";

const genderOptions = ['Female', 'Male', 'Prefer not to say', 'Nonbinary'];
const lookingOption = ['Friends', 'Travel Partner', 'Businness Partner', 'Relationship', 'Travel Guru Advise']
const travelOption =  ['Solo', 'Backpacker', 'Always with Someone', 'Never travelled before', 'Fancy Trip']
const levelOption =  ['Baby Traveler', 'Explorer', 'Nomad', 'Cheap Traveler', 'Food Seeker', 'Adventurer']

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
        top3: "",
        countries: "1",
        cities: "1",
        level: "Baby Traveler"

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

        formData.append("id", currentUser["id"]);
    
        for (let data in user) {
            formData.append(data, user[data]);
        }
    
        for (let img of image) {
            formData.append("image", img);
        }
        
        editUser(formData)
        .then(response => {
            console.log("response", response)
            navigate(`/profile/${currentUser.id}`)
        })
        .catch(err => console.log(err))
    }

    return(
        <div className="EditProfile">
        
            <form onSubmit={ handleOnSubmit }>
            <div className="image-upload">
            <h2 className="head-edit">Edit Profile</h2>
                    <label className="label-edit">Image:</label>
                    <input className="image-file" name= 'image' type='file' onChange={handleOnChange} />
                
                    <label className="label-edit">First Name:</label>
                    <input name= 'firstName' value={user.firstName} type='text' onChange={handleOnChange} />

                    <label className="label-edit">Last Name:</label>
                    <input name= 'lastName' value={user.lastName} type='text' onChange={handleOnChange} />

                    <label className="label-edit">How many countries have you been?</label>
                    <input name='countries' value={user.countries} type='number' onChange={handleOnChange} />
                    
                    <label className="label-edit">How many cities have you been?</label>
                    <input name='cities' value={user.cities} type='number' onChange={handleOnChange} />
                
                    <label className="label-edit">Lever of Travel:</label>
                    <select name="level" onChange={handleOnChange}>
                        {
                            levelOption.map(option => (
                                <option value={option}>{option}</option>
                            ))
                        }
                    </select>

                    <label className="label-edit">Gender:</label>
                    <select name="gender" onChange={handleOnChange}>
                        {
                            genderOptions.map(option => (
                                <option value={option}>{option}</option>
                            ))
                        }
                    </select>

                    <label className="label-edit">Birthday:</label>
                    <input name= 'birthday' value={user.birthday} type='date' onChange={handleOnChange} />

                    <label className="label-edit">Language:</label>
                    <input name= 'language' value={user.language} type='text' onChange={handleOnChange} />
                
                    <label className="label-edit">Looking for:</label>
                    <select name="looking" onChange={handleOnChange}>
                    {
                            lookingOption.map(option => (
                                <option value={option}>{option}</option>
                            ))
                        }
                    </select>
                    <label className="label-edit">Travel type:</label>
                    <select name="travel" onChange={handleOnChange}>
                    {
                            travelOption.map(option => (
                                <option value={option}>{option}</option>
                            ))
                        }
                    </select>
                    <label className="label-edit">Activities:</label>
                    <input name= 'activities' value={user.activities} type='text' onChange={handleOnChange} />
                
                    <label className="label-edit">Books:</label>
                    <input name='books' value={user.books} type='text' onChange={handleOnChange} />

                    <label className="label-edit">Music:</label>
                    <input name= 'music' value={user.music} type='text' onChange={handleOnChange} />

                    <label className="label-edit">Food:</label>
                    <input name= 'food' value={user.food} type='text' onChange={handleOnChange} />
                
                    <label className="label-edit">Top 3 countries:</label>
                    <input name='top3' value={user.top3} type='text' onChange={handleOnChange} />

                    <button className="button-79"  type="submit">Submit</button>
                </div>

            </form>
        </div>
    )
}

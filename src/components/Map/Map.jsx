import {Map, Marker, NavigationControl, Popup } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import * as React from "react";
import { createHttp } from "../../services/BaseService";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import StarIcon from '@mui/icons-material/Star';
import './Map.css'
import {format} from "timeago.js";
import AuthContext from "../../contexts/AuthContext";
import { useContext, useEffect } from "react";

function Mapa() {
  const authenticatedHttp = createHttp(true)
  const [pins,setPins] = React.useState([])
  const [currentPlaceId,setCurrentPlaceId] = React.useState(null)
  const [newPlace,setNewPlace] = React.useState(null)
  const [title,setTitle] = React.useState(null)
  const [descr,setDescr] = React.useState(null)
  const [rating,setRating] = React.useState(1)
  const {currentUser} = useContext(AuthContext)

  const [viewPort,setViewPort] = React.useState({
    longitude: 12.4,
    latitude: 37.8,
    zoom : 3
  })

  const handleAddClick = (e) => {
    let lat = e.lngLat.lat
    let long = e.lngLat.lng

    setNewPlace({
      lat : lat,
      lng : long
    })
  }

  const handlePinSubmit = async (e) => {
    e.preventDefault()

    const newPin = {
      user: currentUser.id,
      title: title,
      rating: rating,
      descr: descr,
      lat: newPlace.lat,
      long: newPlace.lng
    }
    try{
      if(!currentUser)
      {
        console.log(currentUser)
      }
      else{
        const responce = await authenticatedHttp.post('/map/pin', newPin)
      setPins([...pins,responce])
      setNewPlace(null)
      //notify correct
        setRating(1)
        setDescr(null)
        setTitle(null)

        window.location.reload(true);
      }
      }catch(err)
    {
      //notification error
      console.log(err)
    }
  }


  
  const handleMarkerClicked = (id,lat,long) => {
    setCurrentPlaceId(id)
  }

  React.useEffect(() => {
    const getPins = async () => {
      try {
        const responce = await authenticatedHttp.get("/map/pin");
        console.log(responce);
        setPins(responce)
      } catch (err) {
        console.log(err);
      }
    };
    getPins();
  }, []);


  return (
    <div>
      <Map
        container={'map'}
        projection={'globe'}
        initialViewState={{viewPort}}
        mapboxAccessToken="pk.eyJ1IjoiZGluaG95YW8iLCJhIjoiY2xnZjgzdzR0MDF4NjNkbW5pcnN3dG14MyJ9.aEGT6P6U9VoE2uMPIxEexA"
        style={{ width: "1400px", height: "600px" }}
        mapStyle="mapbox://styles/dinhoyao/clggrvu2h003z01qq6t0g0gd5"
        onDblClick={handleAddClick}
      >
        <NavigationControl/>

        {
          pins.map(p => ( // without ? error map not defined,  nnot read properties of undefined (reading 'map')
 
          <>
            <Marker 
            longitude = {p.long} 
            latitude = {p.lat} 
            anchor = "center"
            >
              <LocationOnIcon 
                className="icon"
                onClick = {() => handleMarkerClicked(p._id,p.lat,p.long)}
                style = {{fontSize: viewPort.zoom * 8, color : p?.user?.id === currentUser?.id ? "orange" : "red"}}

              />
            </Marker>

          {
            p._id === currentPlaceId &&
            (
              <Popup
              longitude={p.long}
              latitude={p.lat}
              closeOnClick={false}
              closeOnMove={false}
              anchor="left"
              >
      <div className="card">
      <label className="map-label">Place</label>
        <h4 className="place">{p.title}</h4>
        <label className="map-label">Review</label>
        <p className="descr">{p.descr}</p>
        <label className="map-label">Rating</label>
        <div className="stars">
          {Array(p.rating).fill(<StarIcon className="star"/>)}
        </div>

        <label className="map-label">Information</label>

        <div className="info">
          <span className="username">Created by:<b>{p.user.username}</b></span>
          <span className="date">{format(p.createdAt)}</span>

        </div>
      </div>
              </Popup>
            )
          }

          {
            newPlace &&
            <Popup
            longitude={newPlace.lng}
            latitude={newPlace.lat}
            closeOnClick={false}
            closeOnMove={false}
            onClose={() => setNewPlace(null)}
            anchor= "left"
            >
    <div>
  <form onSubmit={handlePinSubmit}>
  <label className="map-label">Title</label>
    <textarea placeholder="enter a title"
    onChange={(e) => setTitle(e.target.value)}>
    </textarea>
    <label className="map-label">Review</label>
<textarea placeholder="share your review"
onChange={(e) => setDescr(e.target.value)}>
</textarea>
<label className="map-label">Rating</label>
<select className="select-star" onChange={(e) => setRating(e.target.value)}>
<option value= "1">1</option>
<option value= "2">2</option>
<option value= "3">3</option>
<option value= "4">4</option>
<option value= "5">5</option>
</select>
<button className="submitButton" type="submit">Add a pin</button>
  </form>
</div>
            </Popup>
            }
          </>
        ))}
      </Map>
    </div>
  );
}

export default Mapa;
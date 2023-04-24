import React, { useState } from 'react';
import axios from 'axios';
import { FaCloud, FaSun, FaCloudRain, FaSnowflake } from 'react-icons/fa';
import "./Weather.css";

const Weather = () => {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null);

  const handleInputChange = (e) => {
    setCity(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    //const apiKey = '53d16851a2bf9ae317ba27d87cd7ee4c'; 
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${"53d16851a2bf9ae317ba27d87cd7ee4c"}&units=metric`;
    try {
      const response = await axios.get(url);
      setWeather(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
      <div className="Card">
  <div className="CardInner">
  <label className='label-wather'>Check the weather of your next destination!</label>
  <div className="container">
    <div className="Icon">
    <button className="button-without-border" type="submit">
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#657789" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="feather feather-search">
      <circle cx="11" cy="11" r="8"/>
      <line x1="21" y1="21" x2="16.65" y2="16.65"/>
    </svg>
  </button> </div>
    <div className="InputContainer">
      <input className='input-weather' type="text" value={city} onChange={handleInputChange} placeholder="Enter a city"/>
    </div>
  </div>
 </div>
</div>

      </form>
      {weather && (
        <div id="weather_wrapper">
	    <div className="weatherCard">
		<div className="currentTemp">
			<span className="temp">{weather.main.temp}&deg;</span>
			<span className="location">{weather.name}, {weather.sys.country}</span>
		</div>
		<div className="currentWeather">
			<span className="conditions">
            {weather.weather[0].main === 'Clouds' && <FaCloud />}
            {weather.weather[0].main === 'Clear' && <FaSun />}
            {weather.weather[0].main === 'Rain' && <FaCloudRain />}
            {weather.weather[0].main === 'Snow' && <FaSnowflake />}
            </span>
			<div className="info-weather">
				<span className="rain">{weather.weather[0].main}</span>
			</div>
		</div>
	    </div>
        </div>
      )}
    </div>
  );
};

export default Weather;


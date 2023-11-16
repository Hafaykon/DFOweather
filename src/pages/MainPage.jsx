import React, {useState} from "react"
import "../style/MainPage.css";
import {WeatherCard} from "../components/WeatherCard";
import {Header} from "../components/Header";
import {Link} from "react-router-dom";


export const MainPage = () => {
    const [city, setCity] = useState("Trondheim");

    const default_locations = ["Bergen", "Drammen", "Oslo", "Stavanger", "Trondheim", "Tromsø"]


    //Sets current city to a a default city
    const handleDefaultLocationChange = (locationName) => {
        setCity(locationName);
    };


    return (
    <>
        <Header onSearch={setCity}/>
        <div className="main-container">
            <div className="location-button-container">
                <h2>Populære byer</h2>
                {default_locations.map((locationName) => (
                    <button className="location-button" key={locationName}
                            onClick={() => handleDefaultLocationChange(locationName)}>
                        {locationName}
                    </button>
                ))}
            </div>
            <Link to="/forecast" state={{ city: city }}>
                <WeatherCard city={city} hours_from_start_of_day={19}/>
            </Link>
        </div>
    </>
);
};

export default MainPage;
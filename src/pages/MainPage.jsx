import React, {useState} from "react"
import "../style/MainPage.css";
import {WeatherCard} from "../components/WeatherCard";
import {Header} from "../components/Header";

export const MainPage = () => {
    const [city, setCity] = useState("Trondheim");
    const default_locations = ["Bergen", "Drammen", "Oslo", "Stavanger", "Trondheim", "Tromsø"]

    const handleLocationChange = (locationName) => {
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
                            onClick={() => handleLocationChange(locationName)}>
                        {locationName}
                    </button>
                ))}
            </div>
            <WeatherCard city={city} />
            <WeatherCard city={city} />
        </div>
    </>
);
};

export default MainPage;
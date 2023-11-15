import React, {useState} from "react"
import "../style/MainPage.css";
import {WeatherCard} from "../components/WeatherCard";

export const MainPage = () => {
    const [city, setCity] = useState("Trondheim");
    const [latitude, setLatitude] = useState(63.43);
    const [longitude, setLongitude] = useState(10.39);

    const locations = {
        Bergen: { lat: 60.39, lon: 5.32 },
        Drammen: { lat: 59.74, lon: 10.21 },
        Oslo: { lat: 59.91, lon: 10.75 },
        Stavanger: { lat: 58.97, lon: 5.73 },
        Trondheim: { lat: 63.43, lon: 10.39 },
        Tromsø: { lat: 69.65, lon: 18.96 }
    };

    const handleLocationChange = (locationName) => {
        const location = locations[locationName];
        setCity(locationName);
        setLatitude(location.lat);
        setLongitude(location.lon);
    };

    return (
    <>
        <div className="main-container">
            <div className="location-button-container">
                <h2>Lokasjoner</h2>
                {Object.keys(locations).map((locationName) => (
                    <button className="location-button" key={locationName}
                            onClick={() => handleLocationChange(locationName)}>
                        {locationName}
                    </button>
                ))}
            </div>
            <WeatherCard city={city} latitude={latitude} longitude={longitude}/>
        </div>
    </>
);
};

export default MainPage;
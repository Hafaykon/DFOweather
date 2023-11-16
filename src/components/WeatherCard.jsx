import React from "react";
import "../style/global.css";
import "../style/WeatherCard.css";
import {useQuery} from "@tanstack/react-query";
import{Link} from "react-router-dom";
import {fetchWeatherByCity} from "../api/api_calls";


export const WeatherCard = ({city}) => {

    const { isLoading, error, data } = useQuery({
        queryKey: ['coordinates', city],
        queryFn: () => fetchWeatherByCity(city)
    })
    if (isLoading) return (<div className="weather-container">
        <p>Henter værdata...</p>
    </div>)
    if (error) return 'Encountered an error while querying' + error.message;

    const datePart = data.current.time.split('T')[0];
    const [year, month, day] = datePart.split('-');
    const formattedDate = `${day}/${month}-${year}`;


    return (
        <Link to="/location">
            <div className="weather-container">
                <h2>{city} {formattedDate}</h2>
                <div className="weather-content-container">
                    <div>
                        <img className='weatherIcon' src="/icons-search.svg" alt="Weather Icon"/>
                        <p>{data.current.temperature_2m} °C</p>
                    </div>
                    <div>
                        <img className='weatherIcon' src="/icons-search.svg" alt="Weather Icon"/>
                        <p>{data.current.weather_code} *CodE*</p>
                    </div>
                    <div>
                        <img className='weatherIcon' src="/icons-search.svg" alt="Weather Icon"/>
                        <p>{data.current.precipitation} mm</p>
                    </div>
                    <div>
                        <img className='weatherIcon' src="/icons-search.svg" alt="Weather Icon"/>
                        <p>{data.current.wind_speed_10m} m/s</p>
                    </div>
                </div>
            </div>
        </Link>
    );
}

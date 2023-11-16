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

    const formattedDate = (data) => {
        if(data){
            const datePart = data.current.time.split('T')[0];
            const [year, month, day] = datePart.split('-');
            return `${day}/${month}-${year}`;
        }
        return "Encountered an error while handling date";
    }


    //<p>{data.current.weather_code} *CodE*</p>
    return (
        <Link to="/location">
            <div className="weather-container">
                <h2>{city} {formattedDate(data)}</h2>
                <div className="weather-content-container">
                    <div>
                        <h2>{data.current.temperature_2m} °C</h2>
                    </div>
                    <div>
                        <img className='big-weather-icon' src="/sunny_icon.svg" alt="Missing icon"/>
                    </div>
                    <div>
                        <img className='weather-icon' src="/droplet_icon.svg" alt="Missing icon"/>
                        <p>{data.current.precipitation} mm</p>
                    </div>
                    <div>
                        <img className='weather-icon' src="/windy_icon.svg" alt="Missing icon"/>
                        <p>{data.current.wind_speed_10m} m/s</p>
                    </div>
                </div>
            </div>
        </Link>
    );
}

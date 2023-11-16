import React from "react";
import "../style/global.css";
import "../style/WeatherCard.css";
import {useQuery} from "@tanstack/react-query";
import {fetchWeatherByCity} from "../api/api_calls";
import {convertWMOtoSymbol} from "../utils/WMOconverter";

export const WeatherCard = ({city, hours_from_start_of_day}) => {


    //Uses Tanstack to query from API
    const { isLoading, error, data } = useQuery({
        queryKey: ['coordinates', city],
        queryFn: () => fetchWeatherByCity(city)
    })
    if (isLoading) return (<div className="weather-container">
        <p>Henter værdata...</p>
    </div>)
    if (error) return 'Encountered an error while querying' + error.message;


    //Takes UTC date and returns only date on dd/mm format
    const formattedDate = (date_utc) => {
        if(date_utc){
            const datePart = date_utc.split('T')[0];
            const [, month, day] = datePart.split('-');
            return `${day}/${month}`;
        }
        return "Encountered an error while handling date";
    }

    return (
        <>
            <div className="weather-container">
                <h2>{city} {formattedDate(data.hourly.time[hours_from_start_of_day])}</h2>
                <div className="weather-content-container">
                    <div>
                        <h2 id="temp">{data.hourly.temperature_2m[hours_from_start_of_day]}°C</h2>
                    </div>
                    <div>
                        <img className='big-weather-icon'
                             src={convertWMOtoSymbol(data.hourly.weather_code[hours_from_start_of_day])}
                             alt="Missing icon"/>
                    </div>
                    <div>
                        <img className='weather-icon' src="/droplet_icon.svg" alt="Missing icon"/>
                        <p>{data.hourly.precipitation[hours_from_start_of_day]} mm</p>
                    </div>
                    <div>
                        <img className='weather-icon' src="/windy_icon.svg" alt="Missing icon"/>
                        <p>{data.hourly.wind_speed_10m[hours_from_start_of_day]} m/s</p>
                    </div>
                </div>
            </div>
        </>
    );
}

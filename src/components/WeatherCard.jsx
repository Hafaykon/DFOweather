import React, {useEffect} from "react";
import "../style/global.css";
import {useQuery} from "@tanstack/react-query";
import{Link} from "react-router-dom";

export const WeatherCard = ({latitude, longitude}) => {

    const lat = 59.91;
    const lon = 10.75;
    const base_url = "https://api.open-meteo.com/v1/metno";
    const current_params = "&current=temperature_2m,precipitation,weather_code,wind_speed_10m"

    const { isPending, error, data } = useQuery({
        queryKey: ['weather'],
        queryFn: () =>
          fetch(base_url + `?latitude=${lat}&longitude=${lon}` + current_params).then(
            (res) => res.json(),
          ),
  })
    if (isPending) return 'Loading...'
    if (error) return 'An error has occurred: ' + error.message;

    const datePart = data.current.time.split('T')[0];
    const [year, month, day] = datePart.split('-');
    const formattedDate = `${day}/${month}-${year}`;

    return(
        <>
            <Link to="/location">
                <div className="weather-container">
                    <h2>Været</h2>
                    <div className="content-container">
                        <div>{data.current.temperature_2m} °C</div>
                        <div>{data.current.weather_code} *CodE*</div>
                        <div>{data.current.precipitation} mm</div>
                        <div>{data.current.wind_speed_10m} km/t</div>
                        <div>{formattedDate}</div>
                    </div>
                </div>
            </Link>
        </>
    )
}

import React, {useState} from "react";
import "../style/MainPage.css";
import {Link, useLocation} from "react-router-dom";
import {WeatherCard} from "../components/WeatherCard";
import {Header} from "../components/Header";

export const Forecast = () => {
    //Uses the state of city from MainPage to set correct data for WeatherCard
    let location = useLocation();
    const [city, setCity] = useState(location.state.city);

    return(
        <>
            <Header onSearch={setCity}/>
            <div className="main-container">
                <div className="forecast-container">
                    <WeatherCard city={city} hours_from_start_of_day={12}/>
                    <WeatherCard city={city} hours_from_start_of_day={36}/>
                    <WeatherCard city={city} hours_from_start_of_day={60}/>
                </div>
            </div>
            <Link to="/" style={{marginLeft: '15%'}}><img id="arrow" src="/arrow_left_icon.svg" alt="Tilbake"/></Link>
        </>
    )
}

export default Forecast
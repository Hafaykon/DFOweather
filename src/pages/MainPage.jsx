import React from "react"
import {WeatherCard} from "../components/WeatherCard";

 export const MainPage = () => {
    return(
        <>
            <div className="main-container">
                <div className="content-container">
                    <h2>Lokasjoner</h2>
                    <li>Oslo</li>
                    <li>Trondheim</li>
                    <li>Bergen</li>
                </div>
                <WeatherCard />
            </div>
        </>
    );
}
export default MainPage
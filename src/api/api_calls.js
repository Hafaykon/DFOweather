import axios from "axios";

export async function fetchWeather(latitude, longitude) {
    const base_url = "https://api.open-meteo.com/v1/metno";
    const current_params = "&current=temperature_2m,precipitation,weather_code,wind_speed_10m&wind_speed_unit=ms"
     try {
        const response = await axios.get(base_url + `?latitude=${latitude}&longitude=${longitude}`+ current_params);
        return response.data;
    } catch (error) {
        console.error(`Error fetching weather data for ${latitude}, ${longitude}:`, error);
        throw error;
    }
}

export async function fetchCoordinates(city) {
    const base_url = `https://api.api-ninjas.com/v1/geocoding?city=${city}`
    try {
        const response = await axios.get(base_url,{
             headers: { 'X-Api-Key': "Z7Pf91RtpwAyS046DnfiOZi503IIbsbjNRCJxTvP" }
        });
        console.log(response.data[0].latitude, response.data[0].longitude);
        return response.data[0];
    } catch (error) {
        console.error(`Error fetching geocoding data for ${city}`);
        throw error;
    }
}
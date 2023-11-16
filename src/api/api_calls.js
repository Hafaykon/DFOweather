import axios from "axios";

//Fetches weather data from coordinates.
export async function fetchWeatherByGrid(latitude, longitude) {
    const base_url = "https://api.open-meteo.com/v1/metno";
    const hourly_params =  "&hourly=temperature_2m,precipitation,weather_code,wind_speed_10m&wind_speed_unit=ms"
     try {
        const response = await axios.get(base_url + `?latitude=${latitude}&longitude=${longitude}`+ hourly_params);
        console.log("AAAAAAAAAAAAAAAAYYYYYY")
        return response.data;
    } catch (error) {
        console.error(`Error fetching weather data for ${latitude}, ${longitude}:`, error);
        throw error;
    }
}


//Fetches weather data from city name (Uses fetchWeatherByGrid).
export async function fetchWeatherByCity(city) {
    const base_url = `https://api.api-ninjas.com/v1/geocoding?city=${city}`;
    try {
        const response = await axios.get(base_url, {
            headers: { 'X-Api-Key': "Z7Pf91RtpwAyS046DnfiOZi503IIbsbjNRCJxTvP" }
        });
        return await fetchWeatherByGrid(response.data[0].latitude, response.data[0].longitude);
    } catch (error) {
        console.error(`Error fetching geocoding data for ${city}:`, error);
        throw error;
    }
}

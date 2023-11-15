

export function fetchWeather() {
//
}
/*
    const lat = 59.91;
    const lon = 10.75;
    const base_url = "https://api.open-meteo.com/v1/metno";
    const current_params = "&current=temperature_2m,relative_humidity_2m,precipitation,weather_code,wind_speed_10m"
    const url2 = "https://api.open-meteo.com/v1/metno?latitude=59.91&longitude=10.75&current=temperature_2m,relative_humidity_2m,precipitation,weather_code,wind_speed_10m"

    const { isPending, error, data } = useQuery({
        queryKey: ['weather'],
        queryFn: () =>
          fetch(base_url + `?latitude=${lat}&longitude=${lon}` + current_params).then(
            (res) => res.json(),
          ),
  })
    if (isPending) return 'Loading...'
    if (error) return 'An error has occurred: ' + error.message;
    return data
}

const base_url = "https://api.open-meteo.com/v1/metno\""
    fetch(base_url).then((res) => res.json());
    const params = {
        "latitude": 59.91,
        "longitude": 10.75,
        "current": ["temperature_2m", "relative_humidity_2m", "precipitation", "weather_code", "wind_speed_10m"]
    };
    const url = "https://api.open-meteo.com/v1/metno";
    const responses = await fetchWeatherApi(url, params);

    // Helper function to form time ranges
    const range = (start, stop, step) =>
        Array.from({length: (stop - start) / step}, (_, i) => start + i * step);

    // Process first location. Add a for-loop for multiple locations or weather models
    const response = responses[0];

    // Attributes for timezone and location
    const utcOffsetSeconds = response.utcOffsetSeconds();
    const timezone = response.timezone();
    const timezoneAbbreviation = response.timezoneAbbreviation();
    const latitude = response.latitude();
    const longitude = response.longitude();

    const current = response.current();

    // Note: The order of weather variables in the URL query and the indices below need to match!
    return {
        current: {
            time: new Date((Number(current.time()) + utcOffsetSeconds) * 1000),
            temperature2m: current.variables(0).value(),
            relativeHumidity2m: current.variables(1).value(),
            precipitation: current.variables(2).value(),
            weatherCode: current.variables(3).value(),
            windSpeed10m: current.variables(4).value(),
        },

    };
}
*/


//Takes the WMO Code from the API and returns the appropriate weather-symbol
export function convertWMOtoSymbol(wmo) {
    if (wmo === 0) {
        return "/sunny_icon.svg";
    } else if ((wmo > 69 && wmo < 80) || wmo === 22) {
        return "/snowflake_icon.svg";
    } else if ((wmo > 19 && wmo < 70) || wmo > 79) {
        return "/rainy_icon.svg";
    } else {
        return "/cloudy_sun_icon.svg";
    }
}

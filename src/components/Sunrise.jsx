import { useState, useEffect } from "react";
import { getSunrise } from "../services/getSunrise";
export default function Sunrise() {
    const [weatherData, setWeatherData] = useState([]);
    useEffect(() => {
        navigator.geolocation.getCurrentPosition(showPosition);
        async function showPosition(position) {
            setWeatherData(await getSunrise(position.coords.latitude, position.coords.longitude))
        }
    }, []);
    console.log(weatherData);
    return (
        <div>
            Sunrise is at : {weatherData.sunrise}
            <div>
            Sunset is at : {weatherData.sunset}
            </div>
        </div>
    )
}
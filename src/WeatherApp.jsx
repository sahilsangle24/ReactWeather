import { useState } from "react";
import Search from "./Search.jsx";
import Infobox from "./Infobox.jsx";
import Cards from "./Cards.jsx";
import "./WeatherApp.css";

export default function WeatherApp() {
  const [weatherInfo, setWeatherInfo] = useState({
    city: "mumbai",
    feelslike: 30,
    humidity: 70,
    temp: 32,
    tempmax: 34,
    tempmin: 28,
    weatherType: "Cloudy",
  });

  const updateInfo = (newInfo) => {
    console.log("New info from Search:", newInfo);
    setWeatherInfo(newInfo);
  };

  return (
    <div className="weather">
      <h1>WEATHER BY LOCATION 📍</h1>

      <Search updateInfo={updateInfo} />

      <Infobox info={weatherInfo} />

      <br />
      <br />
      <br />
      <br />
     
      
      <h2><i className="qoutes">Clouds drift. Winds change. Light returns &#9925;</i></h2>
      <Cards />
    </div>
  );
}

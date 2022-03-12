import React, { useState } from "react";
import Loading from "../loading/Loading";
import { Link } from "react-router-dom";
import "./weather.css";

const api = {
  key: "18473f42aae6e9202a79ec75db7abfab",
  base: "https://api.openweathermap.org/data/2.5/",
};

function Apps() {
  const [isLoading, setLoading] = useState(false);
  const [query, setQuery] = useState("");
  const [weather, setWeather] = useState({});

  const search = (evt) => {
    if (evt.key === "Enter") {
      fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
        .then((res) => res.json())
        .then((result) => {
          setWeather(result);
          setQuery("");
          // setLoading(true)
        });
    } else {
      // setLoading(false)
    }
  };

  const dateBuilder = (d) => {
    let months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];

    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();

    return `${day} ${date} ${month} ${year}`;
  };

  return (
    <div
      className={
        typeof weather.main != "undefined"
          ? weather.main.temp > 16
            ? "app-warm"
            : "app"
          : "app"
      }
    >
    
      <main>
        <div className="search-box">
          <input
            type="text"
            className="search-bar"
            placeholder="Search..."
            onChange={(e) => setQuery(e.target.value)}
            value={query}
            onKeyPress={search}
          />
        </div>
      
        {isLoading ? <Loading /> : ""}
        {typeof weather.main != "undefined" ? (
          <div>
            <div className="location-box">
              <div className="location">
                {weather.name} , {weather.sys.country}
              </div>
              <div className="date">{dateBuilder(new Date())}</div>
              <div className="weather-box">
                <div className="temp">{Math.round(weather.main.temp)} °c</div>
                <div className="weather">
                  {typeof weather.main != "undefined"
                    ? weather.main.temp > 16
                      ? "sunny"
                      : "cloudy"
                    : "sunny"}
                </div>
              </div>
            </div>
          </div>
        ) : (
          ""
        )}
     
      </main>
    
    </div>
  );
}

export default Apps;

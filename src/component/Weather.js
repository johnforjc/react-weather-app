import React from "react";
import "./Weather.css";
import Infos from "./Infos";

const Weather = ({ Location, Info }) => {
  console.log(Info);
  if (Location == "Location not found") {
    return (
      <div className="weatherBox">
        <div className="geografis-info">
          <h3>{Location}</h3>
        </div>
      </div>
    );
  } else if (Info == "") {
    return <div className="weatherBox"></div>;
  } else {
    return (
      <div className="weatherBox">
        <div className="geografis-info">
          <h3>{Location}</h3>
        </div>

        <div className="weather-info">
          <div className="weather-icon">
            <i className="bi bi-cloud-rain-fill"></i>
          </div>

          <div className="weather-detail">
            <p>{Info.weather[0].main}</p>
          </div>

          <div className="info-box">
            <Infos title={"Temperature"} value={Info.main.temp + "℃"}></Infos>
            <Infos title={"Humidity"} value={Info.main.humidity + "%"}></Infos>
            <Infos title={"Wind"} value={Info.wind.speed + "m/s"}></Infos>
          </div>
        </div>
      </div>
    );
  }
};

export default Weather;

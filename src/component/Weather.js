import React from "react";

const Weather = ({ Location, Info }) => {
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
          <p>Heavy Rain</p>
        </div>

        <div className="info-box">
          <div className="infochild"></div>
        </div>
      </div>
    </div>
  );
};

export default Weather;

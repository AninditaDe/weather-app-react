import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
//let FontAwesomeIcon = require("react-fontawesome");

import "../styles/DisplayData.css";
import "../styles/WeatherRecords.css";

let backGroundChanger = "";

const changeBackGroundImage = (weatherStatus) => {
  switch (weatherStatus) {
    case "Clouds":
      backGroundChanger = "displayImages-clouds";
      break;
    case "Rain":
      backGroundChanger = "displayImages-rainy";
      break;
    case "Snow":
      backGroundChanger = "displayImages-snow";
      break;
    case "Mist":
      backGroundChanger = "displayImages-mist";
      break;
    case "Smoke":
      backGroundChanger = "displayImages-smoke";
      break;
    case "Clear":
      backGroundChanger = "displayImages-clear";
      break;
    case "Fog":
      backGroundChanger = "displayImages-fog";
      break;
    case "Haze":
      backGroundChanger = "displayImages-haze";
      break;
    default:
      backGroundChanger = "displayImages-main";
  }
  return backGroundChanger;
};

const DisplayData = ({ data = [] }) => {
  const [place, date, temp, weather, desc] = data;

  let bgChanger = changeBackGroundImage(weather);

  return (
    <div className={`weather-records displayImages ${bgChanger}`}>
      <p className="placeName font-color">
        <FontAwesomeIcon className="fas fa-map-marker"></FontAwesomeIcon>
        {place}
      </p>
      <p className="weather-data font-color">{date}</p>
      <p className="weather-data font-color">
        <FontAwesomeIcon className="fas fa-temperature-hot"></FontAwesomeIcon>
        {temp}&deg;c
      </p>
      <p className="weather-data font-color">
        <FontAwesomeIcon className="fas fa-cloud-sun-rain"></FontAwesomeIcon>
        {weather}
      </p>
      <p className="weather-data font-color">{desc}</p>
    </div>
  );
};

export default DisplayData;

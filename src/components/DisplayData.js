import React from "react";
import "../Styles/DisplayData.css";
import "../Styles/WeatherRecords.css";
import "font-awesome/css/font-awesome.min.css";
let FontAwesomeIcon = require("react-fontawesome");

let style = {};
let imageUrlCoudy = "./images/cloud.jpg";
let imageUrlRainy = "./images/rainy.jpg";
let imageUrlSnowy = "./images/snow.jpeg";
let imageUrlMist = "./images/mist.jpg";
let imageUrlSmoke = "./images/smoke.jpg";
let imageUrlClear = "./images/clear.png";
let imageUrlFog = "./images/fog.jpeg";
let imageUrlHaze = "./images/haze.jpeg";
let imageUrl = "";

const changeBackGroundImage = (weatherStatus) => {
  switch (weatherStatus) {
    case "Clouds":
      imageUrl = imageUrlCoudy;
      break;
    case "Rain":
      imageUrl = imageUrlRainy;
      break;
    case "Snow":
      imageUrl = imageUrlSnowy;
      break;
    case "Mist":
      imageUrl = imageUrlMist;
      break;
    case "Smoke":
      imageUrl = imageUrlSmoke;
      break;
    case "Clear":
      imageUrl = imageUrlClear;
      break;
    case "Fog":
      imageUrl = imageUrlFog;
      break;
    case "Haze":
      imageUrl = imageUrlHaze;
      break;
    default:
      imageUrl = "./images/main.jpg";
  }
  style = {
    backgroundImage: "url(" + imageUrl + ")",
  };
  return style;
};

const DisplayData = ({ data = [] }) => {
  //console.log("data", data);

  const [place, date, temp, weather, desc] = data;

  let style = changeBackGroundImage(weather);

  return (
    <div className="weather-records displayImages" style={style}>
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

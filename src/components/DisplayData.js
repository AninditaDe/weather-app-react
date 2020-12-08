import * as React from "react";
import "./CSS/DisplayData.css";
// import "font-awesome/css/font-awesome.min.css";
let FontAwesomeIcon = require("react-fontawesome");

const changeBackGroundImage = (weatherStatus) => {
  let style = {};
  let imageUrlCoudy = "./images/cloudy-day-sky.jpg";
  let imageUrlRainy = "./images/rainy-day.jpg";
  let imageUrlSnowy = "./images/snow.jpeg";
  let imageUrlMist = "./images/mist.jpg";
  let imageUrlSmoke = "./images/smoke.jpg";
  let imageUrlClear = "./images/sunnyday.png";
  let imageUrlFog = "./images/fog.jpeg";
  let imageUrl = "";
  // TODO: use a switch statement here
  // TODO: encapsulate in an external function outside of the react component
  if (weatherStatus === "Clouds") {
    imageUrl = imageUrlCoudy;
  } else if (weatherStatus === "Rain") {
    imageUrl = imageUrlRainy;
  } else if (weatherStatus === "Snow") {
    imageUrl = imageUrlSnowy;
  } else if (weatherStatus === "Mist") {
    imageUrl = imageUrlMist;
  } else if (weatherStatus === "Smoke") {
    imageUrl = imageUrlSmoke;
  } else if (weatherStatus === "Clear") {
    imageUrl = imageUrlClear;
  } else if (weatherStatus === "Fog") {
    imageUrl = imageUrlFog;
  } else {
    imageUrl = "./images/Main-Animated.txt";
  }
  style = {
    backgroundImage: "url(" + imageUrl + ")",
  };
  return style;
};

const DisplayData = ({ data = {} }) => {
  console.log("data", data);

  const { place, date, temp, weather, desc } = data;

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

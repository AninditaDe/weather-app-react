import React from "react";

import WeatherRecords from "../components/WeatherRecords";

export default function UrlBuilder(props) {
  let FULL_URL = props.cityName
    ? `https://api.openweathermap.org/data/2.5/weather?q=${props.cityName}&APPID=${process.env.REACT_APP_WEATHER_API_KEY}`
    : "";

  return FULL_URL ? <WeatherRecords fullUrl={FULL_URL} /> : <div></div>;
}

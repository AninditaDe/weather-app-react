import React from "react";

import WeatherRecords from "../components/WeatherRecords";

const WEATHER_API = new URL(
  "https://api.openweathermap.org/data/2.5/weather?q=London"
);

export default function UrlBuilder(props) {
  if (props.cityName) {
    WEATHER_API.searchParams.set("q", props.cityName);
    let FULL_URL = `${WEATHER_API}&APPID=${process.env.REACT_APP_WEATHER_API_KEY}`;

    console.log("FULL_URL", FULL_URL);
    return <WeatherRecords fullUrl={FULL_URL} />;
  } else return <div></div>;
}

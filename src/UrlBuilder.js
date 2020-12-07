import React from "react";

import WeatherApiHooks from "./WeatherApiHooks";
// TODO: move this to an .env file
// https://create-react-app.dev/docs/adding-custom-environment-variables/

const apiKey = "de93b9fc1363db83f12e17eacffce8f0";

// const apiKey1 = "022585710e14ff3b2155c0af1deebe47";
const WEATHER_API = new URL(
  "https://api.openweathermap.org/data/2.5/weather?q=London"
);

export default function UrlBuilder(props) {
  if (props.cityName) {
    WEATHER_API.searchParams.set("q", props.cityName);
    let FULL_URL = `${WEATHER_API}&APPID=${apiKey}`;

    console.log("FULL_URL", FULL_URL);
    return <WeatherApiHooks fullUrl={FULL_URL} />;
  } else return <div></div>;
}

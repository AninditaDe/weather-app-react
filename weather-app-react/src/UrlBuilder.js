import React from "react";
import WeatherApiHooks from "./WeatherApiHooks";

export default function UrlBuilder(cityName) {
  const apiKey = "de93b9fc1363db83f12e17eacffce8f0";
  const WEATHER_API = new URL(
    "https://api.openweathermap.org/data/2.5/weather?q=London"
  );
  WEATHER_API.searchParams.set("q", cityName);
  let FULL_URL = `${WEATHER_API}&APPID=${apiKey}`;
  if (FULL_URL) {
    console.log("FULL_URL", FULL_URL);
    return <WeatherApiHooks fullUrl={FULL_URL} />;
  } else return;
}

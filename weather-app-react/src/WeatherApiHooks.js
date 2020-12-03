import React, { useState, useEffect } from "react";
//import DisplayData from "./DisplayData";

function WeatherApiHooks() {
  const [data, setItem] = useState({ items: [] });
  //const [isLoaded] = useState(false);

  const fetchData = async () => {
    const apiKey = "de93b9fc1363db83f12e17eacffce8f0";
    const WEATHER_API = new URL(
      "https://api.openweathermap.org/data/2.5/weather?q=London"
    );
    WEATHER_API.searchParams.set("q", "London");
    let FULL_URL = `${WEATHER_API}&APPID=${apiKey}`;

    const res = await fetch(FULL_URL);
    res.json().then((data) => {
      console.log(data);
      const location = data.name;
      const date = data.dt;
      const temp = data.main.temp;
      const weather = data.weather.map((w) => [w.main, w.description]);
      const [main, description] = weather[0];
      const record = { location, date, temp, main, description };
      setItem(record);
    });
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div>
      {data}
      {/* {data.items.map((record, key) => (
        <li key={key}>{record}</li>
      ))} */}
    </div>
  );
}

export default WeatherApiHooks;

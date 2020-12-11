import React, { useState, useEffect } from "react";

import DisplayData from "../components/DisplayData";
import { FormatDate, ConvertKelvinTemp } from "../Utils/Utils";
import "../Styles/WeatherRecords.css";

const fetchData = (urlLink, setItem, setError, error) => {
  fetch(urlLink)
    .then((res) => {
      if (!(res.status === 200)) {
        setError(res.statusText);
        console.log("error: " + error);
        throw new Error(res.status);
      } else {
        setError("");
        return res.json();
      }
    })
    .then((data) => {
      if (data.cod === 200) {
        const location = data.name;
        const date = FormatDate(data.dt);
        const temp = ConvertKelvinTemp(data.main.temp);
        const weather = data.weather.map((w) => [w.main, w.description]);
        const [main, description] = weather[0];
        const record = [location, date, temp, main, description];

        setItem([...record]);
      }
    })
    .catch((error) => {
      setError(error.message);
    });
};

function WeatherRecords({ fullUrl }) {
  const [data, setItem] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchData(fullUrl, setItem, setError, error);
    console.log("props.fullUrl", fullUrl);
  }, [fullUrl, error]);

  return (
    <div className="weather-records">
      <div>
        {data.length > 0 && <DisplayData data={data} />}
        {error && <div style={{ color: `red` }}>some error occurred!</div>}
      </div>
    </div>
  );
}

export default WeatherRecords;

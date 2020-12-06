import React, { useState, useEffect } from "react";
import DisplayData from "./DisplayData";
import "./CSS/WeatherApiHooks.css";
import moment from "moment";

function WeatherApiHooks(props) {
  const [data, setItem] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchData = (urlLink) => {
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
            console.log("result.record", record);
          }
        })
        .catch((error) => {
          console.log("error: " + error);
          setError(error.message);
        });
    };

    fetchData(props.fullUrl);
    console.log("props.fullUrl", props.fullUrl);
  }, [props.fullUrl]);
  return (
    <div className="weather-records">
      <div>
        {data.length > 0 && <DisplayData data={data} />}
        {error && <div style={{ color: `red` }}>some error occurred!</div>}
      </div>
    </div>
  );
}
function FormatDate(date) {
  return moment(date * 1000).format("DD-MMM-YYYY");
}

function ConvertKelvinTemp(temp) {
  return Math.round(temp - 273.15);
}

export default WeatherApiHooks;

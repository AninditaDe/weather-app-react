import React, { useState, useEffect } from "react";
import DisplayData from "./DisplayData";

function WeatherApiHooks(props) {
  const [data, setItem] = useState([]);

  useEffect(() => {
    const fetchData = (urlLink) => {
      const result = fetch(urlLink)
        .then((res) => res.json())
        .then((data) => {
          const location = data.name;
          const date = data.dt;
          const temp = data.main.temp;
          const weather = data.weather.map((w) => [w.main, w.description]);
          const [main, description] = weather[0];
          const record = [location, date, temp, main, description];
          setItem([...record]);
          console.log("result.record", record);
        });
    };
    fetchData(props.fullUrl);
    console.log("props.fullUrl", props.fullUrl);
  }, [props.fullUrl]);
  return (
    <div>
      <div>{data.length > 0 && <DisplayData data={data} />}</div>
    </div>
  );
}

export default WeatherApiHooks;

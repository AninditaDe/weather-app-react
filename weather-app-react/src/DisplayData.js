import * as React from "react";

const DisplayData = (props) => {
  console.log(props);
  //const arrWeatherData = [...props.data];
  return (
    <div>
      {props.data.map((record, key) => (
        <li key={key}>{record}</li>
      ))}
    </div>
  );
};

export default DisplayData;

import * as React from "react";

const DisplayData = ({ data = [] }) => {
  console.log(data);
  //const arrWeatherData = [...props.data];
  return (
    <div>
      {data.map((record, key) => {
        if (record) {
          return <li key={key}>{record}</li>;
        }
        return null;
      })}
    </div>
  );
};

export default DisplayData;

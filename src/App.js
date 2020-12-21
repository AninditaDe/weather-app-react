import React from "react";

import SearchBox from "./components/SearchBox";
import "./styles/SearchBox.css";
import "./styles/App.css";
import "./styles/WeatherRecords.css";

const App = () => (
  <>
    <div className="App-content">
      <p className="title">Explore Anindita's Weather Forecasting App</p>
      <SearchBox />
    </div>
    {/*Unable to load the man background image, so commented this below code,
     If I load the main image the records are not displaying, it is hiding behind */}

    {/* <div className="weather-records displayImages displayImages-main"></div> */}
    <div></div>
  </>
);

export default App;

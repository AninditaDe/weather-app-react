import React from "react";

import SearchBox from "./components/SearchBox";
import "./Styles/SearchBox.css";
import "./Styles/App.css";
import "./Styles/WeatherRecords.css";

const imageUrl = "./images/main.jpg";

const style = {
  backgroundImage: "url(" + imageUrl + ")",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  height: "100vh",
};

const App = () => (
  <>
    <div className="App-content">
      <p className="title">Explore Anindita's Weather Forecasting App</p>
      <SearchBox />
    </div>
    <div style={style}></div>
  </>
);

export default App;

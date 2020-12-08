import * as React from "react";

import SearchBox from "./SearchBox";
import "./CSS/SearchBox.css";
import "./CSS/App.css";

const imageUrl = "./images/Main-Animated.txt";
const style = {
  backgroundImage: "url(" + imageUrl + ")",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
};

const App = () => (
  <>
    <div className="App-content">
      <p className="title">Explore Anindita's Weather Forecast App</p>
      <SearchBox />
    </div>
    <div className="weather-records" style={style}></div>
  </>
);

export default App;

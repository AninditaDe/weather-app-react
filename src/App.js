import * as React from "react";
import "./CSS/App.css";
import SearchBox from "./SearchBox";
import "./CSS/SearchBox.css";

export default class App extends React.Component {
  render() {
    let imageUrl = "./images/Main-Animated.txt";
    let style = {
      backgroundImage: "url(" + imageUrl + ")",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
    };
    return (
      <div className="weather-records" style={style}>
        <div className="App-content">
          <p className="title">Explore Anindita's Weather Forecast App</p>
          <SearchBox />
        </div>
      </div>
    );
  }
}

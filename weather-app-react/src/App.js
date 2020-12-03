import * as React from "react";
import "./App.css";
import WeatherApi from "./WeatherApi";
import SearchBox from "./SearchBox";
import "./SearchBox.css";
//import WeatherApiHooks from "./WeatherApiHooks";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cityName: "",
    };
    this.onEnterKeyPress = this.onEnterKeyPress.bind(this);
    this.onChange = this.onChange.bind(this);
  }
  onEnterKeyPress = (e) => {
    e.preventDefault();
    if (e.key === "Enter") {
      alert(this.state.cityName);
    }
  };
  onChange = (e) => {
    this.setState({
      cityName: e.target.value,
    });
  };

  render() {
    console.log(this.state.cityName);
    return (
      <div>
        <div className="App-content">
          <input
            className="searchBox"
            type="text"
            placeholder="Search.."
            onKeyDown={this.onEnterKeyPress}
            onChange={this.onChange}
          />
        </div>
        {/* <WeatherApiHooks /> */}
        {this.state.cityName && <WeatherApi />}
      </div>
    );
  }
}

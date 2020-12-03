import * as React from "react";
//import apikeys from "./ApiKeys";
import DisplayData from "./DisplayData";

export default class WeatherApi extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: [],
    };
  }
  componentDidMount() {
    const apiKey = "de93b9fc1363db83f12e17eacffce8f0";
    const WEATHER_API = new URL(
      "https://api.openweathermap.org/data/2.5/weather?q=London"
    );
    WEATHER_API.searchParams.set("q", "London");
    let FULL_URL = `${WEATHER_API}&APPID=${apiKey}`;

    fetch(FULL_URL)
      .then((res) => res.json())
      .then(
        (data) => {
          console.log(data);
          const location = data.name;
          const date = data.dt;
          const temp = data.main.temp;
          const weather = data.weather.map((w) => [w.main, w.description]);
          const [main, description] = weather[0];

          this.setState({
            isLoaded: true,
            items: [location, date, temp, main, description],
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error,
          });
        }
      );
  }
  render() {
    const { error, isLoaded, items } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading..</div>;
    } else {
      return (
        <div>
          <DisplayData data={items} />
        </div>
      );
    }
  }
}

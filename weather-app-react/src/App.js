import * as React from "react";
import "./App.css";
import SearchBox from "./SearchBox";
import "./SearchBox.css";

export default class App extends React.Component {
  render() {
    return (
      <div className="App-content">
        <SearchBox />
      </div>
    );
  }
}

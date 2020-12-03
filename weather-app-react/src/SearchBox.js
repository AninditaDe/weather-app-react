import React, { useState } from "react";
import "./SearchBox.css";
import UrlBuilder from "./UrlBuilder";

export default function SearchBox() {
  const [input, setInput] = useState("");
  const handleChange = (e) => {
    e.preventDefault();
    setInput(e.target.value);
  };
  const handleKeyDown = (e) => {
    if (input && e.keyCode === 13) {
      UrlBuilder(input);
    }
  };

  return (
    <input
      className="searchBox"
      type="text"
      placeholder="Search city.."
      value={input}
      onChange={handleChange}
      onKeyDown={handleKeyDown}
    />
  );
}

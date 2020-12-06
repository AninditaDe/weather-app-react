import React, { useState } from "react";
import "./CSS/SearchBox.css";
import UrlBuilder from "./UrlBuilder";

export default function SearchBox() {
  const [input, setInput] = useState("");
  const [isEntered, setEntered] = useState(false);
  const handleChange = (e) => {
    e.preventDefault();
    setInput(e.target.value);
  };
  const handleKeyDown = (e) => {
    if (input && e.keyCode === 13) {
      setEntered(true);
    }
    if (e.keyCode === 8) {
      setEntered(false);
    }
  };

  return (
    <>
      <input
        className="searchBox"
        type="text"
        placeholder="Enter city..."
        value={input}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
      />
      {isEntered && <UrlBuilder cityName={input} />}
    </>
  );
}

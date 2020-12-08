import React, { useState } from "react";
import styled from "styled-components";

import UrlBuilder from "./UrlBuilder";
// TODO: change css folder name to styles
import "./CSS/SearchBox.css";

export default function SearchBox() {
  const [input, setInput] = useState("");
  const [isEntered, setEntered] = useState(false);

  const handleChange = (e) => {
    // Do we really need this?
    // preventDefault is  for preventing a form submit
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
      <SearchInput
        className="searchBox"
        type="text"
        placeholder="Enter city..."
        value={input}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
      />
      {/*  isEnterd can be more explicit */}
      {isEntered && <UrlBuilder cityName={input} />}
    </>
  );
}

const SearchInput = styled.input`
  border-radius: 12px;
  border: 1px solid grey;
  padding: 0.25rem 1rem;
`;

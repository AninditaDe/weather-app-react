import React, { useState } from "react";
import styled from "styled-components";

import Debouncer from "../components/Debouncer";
import UrlBuilder from "../components/UrlBuilder";
import "../styles/SearchBox.css";

export default function SearchBox() {
  const [input, setInput] = useState("");
  const [isEntered, setEntered] = useState(false);
  const [debouncedState, setDebouncedState] = Debouncer(input);

  const handleChange = (e) => {
    setInput(e.target.value);
    setDebouncedState(e.target.value);
  };

  const handleKeyDown = (e) => {
    if (input && e.keyCode === 13) {
      console.log(debouncedState);
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
      {isEntered && <UrlBuilder cityName={debouncedState} />}
    </>
  );
}

const SearchInput = styled.input`
  border-radius: 12px;
  border: 1px solid grey;
  padding: 0.25rem 1rem;
`;

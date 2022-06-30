import React, { useState, useContext } from "react";
import createContextFunction from "../context/createContextFunction";
const Search = () => {
  const [inputText, setInputText] = useState("");
  const context = useContext(createContextFunction);
  const handleForm = (e) => {
    setInputText(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(inputText);
    context.getCityName(inputText);
    setInputText("");
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="City Name"
        required="true"
        value={inputText}
        onChange={handleForm}
      />
      <button type="submit">
        <i className="fas fa-search"></i>
      </button>
    </form>
  );
};

export default Search;

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
    context.getCityName(inputText);
    setInputText("");
  };
  return (
    <form
      onSubmit={handleSubmit}
      className=" focus:shadow-xl transition-all w-ful h-32 flex justify-center items-center"
    >
      <input
        type="text"
        placeholder="City Name"
        required="true"
        value={inputText}
        onChange={handleForm}
        autoComplete="off"
        className="p-2 md:px-10 rounded-l-md bg-white focus:outline-none text-center focus:border-l-4 border-orange-200"
      />
      <button type="submit" className="p-2 bg-white rounded-r-md">
        <i className="fas fa-search"></i>
      </button>
    </form>
  );
};

export default Search;

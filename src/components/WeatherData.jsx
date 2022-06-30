import React, { useContext } from "react";
import createContextFunction from "../context/createContextFunction";

const WeatherData = () => {
  const { DummyData } = useContext(createContextFunction);
  // console.log(DummyData);
  return <div>hehe</div>;
};

export default WeatherData;

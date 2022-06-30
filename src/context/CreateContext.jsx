import axios from "axios";
import React, { useEffect, useState } from "react";
import createContextFunction from "./createContextFunction";

const CreateContext = ({ children }) => {
  const [isCityName, setIsCityName] = useState(false);
  const [cityName, setCityName] = useState("");
  const getCityName = (city) => {
    setCityName(city);
    setIsCityName(true);
  };
  const [weatherData, setWeatherData] = useState([]);
  const apitkey = "30c06c817dfaf455478e39636b9e5619";
  useEffect(() => {
    const api = `https://api.openweathermap.org/data/2.5/weather?q=${
      isCityName ? cityName : "Kolkata"
    }&units=metric&appid=${apitkey}`;
    // console.log(api);
    const getData = async () => {
      const res = await axios.get(api);
      const data = await res.data;
      setWeatherData(data);
    };
    getData();
  }, [cityName]);
  return (
    <createContextFunction.Provider
      value={{
        // Data: DummyData,
        Data: weatherData,
        getCityName: getCityName,
      }}
    >
      {children}
    </createContextFunction.Provider>
  );
};

export default CreateContext;

import axios from "axios";
import React, { useEffect, useState } from "react";
import createContextFunction from "./createContextFunction";

const CreateContext = ({ children }) => {
  // const [isCityName, setIsCityName] = useState(false);
  const dummyData = {
    coord: {
      lon: 88.3697,
      lat: 22.5697,
    },
    weather: [
      {
        id: 721,
        main: "Haze",
        description: "haze",
        icon: "50d",
      },
      {
        id: 501,
        main: "Rain",
        description: "moderate rain",
        icon: "10d",
      },
    ],
    base: "stations",
    main: {
      temp: 29.97,
      feels_like: 36.97,
      temp_min: 29.97,
      temp_max: 29.97,
      pressure: 998,
      humidity: 84,
    },
    visibility: 3200,
    wind: {
      speed: 4.12,
      deg: 140,
    },
    rain: {
      "1h": 2.59,
    },
    clouds: {
      all: 100,
    },
    dt: 1656665564,
    sys: {
      type: 1,
      id: 9114,
      country: "IN",
      sunrise: 1656631516,
      sunset: 1656680102,
    },
    timezone: 19800,
    id: 1275004,
    name: "Kolkata",
    cod: 200,
  };
  const [cityName, setCityName] = useState("Kolkata");
  const [weatherData, setWeatherData] = useState(dummyData);
  const getCityName = (city) => {
    setCityName(city);
  };
  const apitkey = "30c06c817dfaf455478e39636b9e5619";
  const api = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=${apitkey}`;
  useEffect(() => {
    axios.get(api).then((res) => setWeatherData(res.data));
  }, [cityName]);
  return (
    <createContextFunction.Provider
      value={{
        Data: weatherData,
        getCityName: getCityName,
      }}
    >
      {children}
    </createContextFunction.Provider>
  );
};

export default CreateContext;

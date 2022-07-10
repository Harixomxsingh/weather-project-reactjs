import React, { useContext } from "react";
import { useState } from "react";
import { useEffect } from "react";
import createContextFunction from "../context/createContextFunction";

const WeatherData = () => {
  const { Data } = useContext(createContextFunction);
  const url = `https://openweathermap.org/img/wn/${Data.weather[0].icon}@2x.png`;
  const [time, setTime] = useState("");
  const [currentDate, setCurrentDate] = useState("");
  const date = new Date();
  useEffect(() => {
    const intervel = setInterval(() => {
      setTime(date.toLocaleTimeString());
    }, 1000);
    return () => {
      clearInterval(intervel);
    };
  }, [time]);
  useEffect(() => {
    setCurrentDate(date.toLocaleDateString());
  }, []);

  return (
    <div className="text-white">
      <div className="w-full flex flex-col justify-center items-center text-white md:text-2xl md:font-Oswald font-mono">
        <p> Weather in {Data.name}</p>
        <p>Date: {currentDate}</p>
        <p>Time: {time}</p>
      </div>
      <div className="grid grid-cols-2 justify-center items-center">
        <div>
          <img src={url} alt="Weather-icon" className="inline" />
          <br />
          <span>{Data.weather[0].main}</span>
        </div>
        <div className="md:text-2xl">
          <p>Temp: {Data.main.temp}℃</p>
        </div>
      </div>

      <div className="database gap-5 w-full h-72 md:h-60 flex flex-col justify-center items-center md:grid md:grid-cols-3 md:gap-5 md:justify-items-center md:items-center transition-all mt-12">
        <div className="w-32 h-32 flex flex-col justify-center items-center bg-slate-300 text-black rounded-md bg-opacity-50 text-lg hover:shadow-lg hover:scale-125 transition-all  ">
          <p>Feels Like</p>
          <span>{Data.main.feels_like}℃</span>
        </div>
        <div className="w-32 h-32 flex flex-col justify-center items-center bg-slate-300 text-black rounded-md bg-opacity-50 text-lg hover:shadow-lg  hover:scale-125 transition-all">
          <p>Wind Like</p>
          <span>{Data.wind.speed}Km</span>
        </div>
        <div className="w-32 h-32 flex flex-col justify-center items-center bg-slate-300 text-black rounded-md bg-opacity-50 text-lg hover:shadow-lg transition-all hover:scale-125 ">
          <p>Max Temp</p>
          <span>{Data.main.temp_max}℃</span>
        </div>
      </div>
      {/* <p>Feel Like: {Data.main.feels_like}℃</p> */}
    </div>
  );
};

export default WeatherData;

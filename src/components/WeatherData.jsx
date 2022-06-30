import React, { useContext } from "react";
import createContextFunction from "../context/createContextFunction";

const WeatherData = () => {
  const { Data } = useContext(createContextFunction);
  const url = `https://openweathermap.org/img/wn/${Data.weather[0].icon}@2x.png`;
  console.log(Data);
  return (
    <div>
      <section>
        <div className="flex flex-row justify-between items-center ">
          {/* Name  */}
          <div className="mx-2 text-lg font-mono font-bold capitalize">
            {Data.name}
          </div>

          {/* icon  */}
          <div>
            <img src={url} alt="Weather-icon" />
          </div>
        </div>
        {/* temp  */}

        <p>Temperature: {Data.main.temp}℃</p>
        <p>Feel Like: {Data.main.feels_like}℃</p>
        <p>{Data.weather[0].main}</p>
      </section>
    </div>
  );
};

export default WeatherData;

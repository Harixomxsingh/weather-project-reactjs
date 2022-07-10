import React from "react";
import CloudsImg from "../img/clouds.jpg";
import RainImg from "../img/rain-sm.jpg";
import MistImg from "../img/mist-sm.jpg";
import HazeImg from "../img/haze.jpg";
import DefaultImg from "../img/default.jpg";
import createContextFunction from "../context/createContextFunction";
import { useContext } from "react";

const BackgroundImage = () => {
  const { Data } = useContext(createContextFunction);

  return (
    <div>
      {(() => {
        switch (Data.weather[0].main) {
          case "Haze":
            return (
              <img
                src={HazeImg}
                className="object-cover blur-sm w-full h-screen z-[1]"
              />
            );
          case "Clouds":
            return (
              <img
                src={CloudsImg}
                className="object-cover blur-sm w-full h-screen z-[1]"
              />
            );
          case "Mist":
            return (
              <img
                src={MistImg}
                className="object-cover blur-sm w-full h-screen z-[1]"
              />
            );
          case "Rain":
            return (
              <img
                src={RainImg}
                className="object-cover blur-sm w-full h-screen z-[1]"
              />
            );
          default:
            return (
              <img
                src={DefaultImg}
                className="object-cover blur-sm w-full h-screen z-[1]"
              />
            );
        }
      })()}
    </div>
  );
};

export default BackgroundImage;

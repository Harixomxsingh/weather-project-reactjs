import React from "react";
import Search from "../components/Search";
import WeatherData from "../components/WeatherData";
// import createContextFunction from "../context/createContextFunction";

const MainBody = () => {
  //   const weatherDataFromContext = useContext(createContextFunction);
  //   console.log(a);
  return (
    <div className="flex flex-col justify-around items-center w-full h-screen ">
      {/* {a.map((item) => (
          <li>{item.city}</li>
        ))} */}

      {/* Search  */}
      <Search />
      {/* WeatherData  */}
      <WeatherData />
    </div>
  );
};

export default MainBody;

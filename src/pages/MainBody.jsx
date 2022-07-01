/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/jsx-no-comment-textnodes */
import React from "react";
import Footer from "../components/Footer";
import Search from "../components/Search";
import WeatherData from "../components/WeatherData";

const MainBody = () => {
  return (
    <div className="">
      {/* overlay  */}
      <div className=" w-full h-screen bg-black/20 absolute left-0 top-0 right-0 bottom-0 z-[1]" />
      <img
        src="https://images.unsplash.com/photo-1646813498796-2e98592cfc83?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1040&q=80"
        className="object-cover blur-sm w-full h-screen z-[1]"
      />
      <div className="all__element h-screen w-full z-[10]  absolute top-0 right-0 bottom-0 left-0 ">
        <h1 className="w-full h-20 flex flex-col justify-center items-center font-Oswald text-2xl">
          Weather project by Hari
        </h1>
        {/* Search  */}
        <Search />
        {/* WeatherData  */}
        <WeatherData />
        <Footer />
      </div>
    </div>
  );
};

export default MainBody;

import React from "react";

const Footer = () => {
  return (
    <footer>
      <div className="bg-blue-200 z-[1] absolute bottom-0 w-full">
        Made with <span className="text-red-400">❤</span> by
        <a href="https://twitter.com/harixom" target="__blank">
          {" "}
          Hari om singh
        </a>
      </div>
    </footer>
  );
};

export default Footer;

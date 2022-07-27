import React from "react";

const Header = ({ onShow }) => {
  return (
    <header className="fixed z-50 flex justify-between items-center text-center w-full h-20 bg-red-800 text-white text-3xl font-bold p-8 md:pl-24 md:pr-24 lg:pl-48 lg:pr-48">
      <div>Food Order</div>
      <div onClick={onShow}>cart</div>
    </header>
  );
};

export default Header;

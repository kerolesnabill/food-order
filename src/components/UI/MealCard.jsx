import React from "react";

const MealCard = ({ title, price, img }) => {
  return (
    <div className="text-white bg-neutral-700 shadow-2xl shadow-neutral-900 rounded-xl hover:scale-105 hover:shadow-red-900 transition-all w-10/12 mx-auto">
      <img className="w-full h-[70%] rounded-t-xl" src={img} alt="" />
      <div className="p-4 grid grid-cols-2">
        <div>
          <h3 className="text-3xl font-bold md:text-2xl lg:text-xl">
            {title}
            <span className="text-xl text-yellow-500 pt-1"> ${price}</span>
          </h3>
        </div>
        <div className="block text-center my-auto">
          <button className="bg-red-700 font-bold p-3 rounded-3xl h-12 w-10/12 hover:bg-red-800 transition-all">
            + Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default MealCard;

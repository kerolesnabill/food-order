import React from "react";
import Img from "../assets/imgs/meals.jpg";

const Bunner = () => {
  return (
    <section className="pt-20 relative text-center text-white">
      <img className="w-full lg:h-96 overflow-hidden" src={Img} alt="" />
      <div className="absolute max-w-2xl w-[90%] top-2/1 left-1/2 -translate-y-1/2 -translate-x-1/2 bg-neutral-700 p-12 rounded-3xl shadow-2xl shadow-neutral-900">
        <h2 className="text-3xl font-bold pb-4">
          Delicious Food, Delivered To You
        </h2>
        <p className="text-lg pb-2">
          Choose your favorite meal from our broad selection of available meals
          and enjoy a delicious lunch or dinner at home.
        </p>
        <p className="text-lg">
          All our meals are cooked with high-quality ingredients, just-in-time
          and of course by experienced chefs!
        </p>
      </div>
    </section>
  );
};

export default Bunner;

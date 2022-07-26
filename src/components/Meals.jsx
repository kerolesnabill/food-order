import React from "react";
import MealCard from "./UI/MealCard";

const Meals = () => {
  return (
    <section className="container mx-auto grid grid-cols gap-y-12 mt-64 md:grid-cols-2 lg:grid-cols-4">
      <MealCard />
    </section>
  );
};

export default Meals;

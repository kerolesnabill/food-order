import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMeals } from "../store/features/mealsSlice";
import MealCard from "./UI/MealCard";

const Meals = () => {
  const dispatch = useDispatch();
  const { meals, isLoading } = useSelector((state) => state.meals);

  useEffect(() => {
    dispatch(getMeals());
  }, [dispatch]);

  const mapMeals = meals.map((meal) => (
    <MealCard
      key={meal.id}
      id={meal.id}
      title={meal.title}
      price={meal.price}
      img={meal.img}
    />
  ));
  return (
    <section className="container mx-auto my-64">
      {isLoading ? (
        <p className="text-center text-gray-300 text-xl align-middle">
          Loading...
        </p>
      ) : !mapMeals.length > 0 ? (
        <p className="text-center text-gray-300 text-xl">There is no Meals</p>
      ) : (
        <div className="grid grid-cols gap-y-12 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {mapMeals}
        </div>
      )}
    </section>
  );
};

export default Meals;

import React from "react";
import MealCard from "./MealCard";
import { useState, useEffect } from "react";

function Main(props) {
  const [availableMeals, setAvailableMeals] = useState([]);
  const [isFetching, setIsFetching] = useState(true);
  const [error , setError] = useState(false);

  return (
    <>
      {isFetching ? (
        <div className="container grid grid-cols-1 mx-auto justify-center text-center ">
          <p>Meals are loading...</p>
        </div>
      ) : (
        <div className="container grid  lg:grid-cols-2 xl:grid-cols-3 mx-auto gap-10 py-10 px-36 ">
          {availableMeals.map((meal) => {
            return <MealCard />;
          })}
        </div>
      )}
    </>
  );
}

export default Main;

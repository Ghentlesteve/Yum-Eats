import React, { useState } from "react";
import { ArrowSmRightIcon } from "@heroicons/react/outline";
import { mealData } from "../data/data";

const Meal = () => {
  const [foods, setFoods] = useState(mealData);
  const filteredCategory = (category) => {
    setFoods(
      mealData.filter((item) => {
        return item.category === category;
      })
    );
  };
  return (
    <div className=" max-w-[1520px] m-auto px-4 py-12 ">
      <h1 className="text-orange-500 font-bold text-2xl text-center py-2 pb-6 ">
        Our Meals
      </h1>
      <div className="flex flex-col lg:flex-row justify-center ">
        <div className=" lt flex justify-center md:justify-center  ">
          <button
            onClick={() => setFoods(mealData)}
            className="mb-2 mr-1 border-orange-600 bg-orange-700 text-white hover:bg-white hover:text-orange-700 hover:border-orange-700 py-1 px-[9px]"
          >
            All
          </button>
          <button
            onClick={() => filteredCategory("pizza")}
            className="mb-2 mr-1 border-orange-600 bg-orange-700 text-white hover:bg-white hover:text-orange-700 hover:border-orange-700 py-1 px-[9px]"
          >
            Pizza
          </button>
          <button
            onClick={() => filteredCategory("chicken")}
            className="mb-2 mr-1 border-orange-600 bg-orange-700 text-white hover:bg-white hover:text-orange-700 hover:border-orange-700 py-1 px-[9px] "
          >
            Chicken
          </button>
          <button
            onClick={() => filteredCategory("salad")}
            className="mb-2 mr-1 border-orange-600 bg-orange-700 text-white hover:bg-white hover:text-orange-700 hover:border-orange-700 py-1 px-[9px]"
          >
            Salad
          </button>
          <button
            onClick={() => filteredCategory("pasta")}
            className="mb-2 mr-1 border-orange-600 bg-orange-700 text-white hover:bg-white hover:text-orange-700 hover:border-orange-700 py-1 px-[9px]"
          >
            Pasta
          </button>
        </div>
      </div>
      <div className="grid md:grid-cols-2 sm:grid-cols-1 lg:grid-cols-4 gap-6 ">
        {foods.map((item) => {
          return (
            <div
              className="border-none hover:scale-105 duration-300"
              key={item.id}
            >
              <img
                src={item.img}
                alt={item.name}
                className=" w-full h-[250px] object=cover rounded-lg "
              />
              <div className="flex justify-between py-2 px-4 ">
                <p className="font-bold">{item.name}</p>
                <p className=" bg-orange-700 w-18 h-14 rounded-full text-center -mt-10 text-white py-2 px-2 border-8 font-bold ">
                  {item.price}
                </p>
              </div>
              <div className="pl-2 py-4 -mt-6 ">
                <p className="cursor-pointer flex items-center text-white bg-orange-400 w-28 rounded-xl text-center pl-2">
                  View More <ArrowSmRightIcon className="w-5 ml-2" />
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Meal;

import React from "react";
import SpecialDishes from "./SpecialDishes";
import backgroundImg from "../assets/bg-10.jpg";

function TodaysSpecials() {
  return (
    <div className="todays-specials-container">
      <div className="specials-top-container">
        <h1>TODAY'S SPECIALS</h1>
        <p>
          Here's the list of the Special deishes for today, if you plan on
          visiting us here then we recommend you try one of these!
        </p>
      </div>
      <div className="todays-special-img">
        <div className="todays-special-dishes-container">
          <SpecialDishes
            name="LAMB CHOPS"
            types="Lamb Chops, Sauce, Arugula, Cherry Tomato, Almonds"
            price="45"
          />
          <SpecialDishes
            name="SUSHI"
            types="Lorem Ipsum, Dolor, Sit Amet, Consectetur"
            price="65"
          />
          <SpecialDishes
            name="PASTA MILANESE"
            types="Adipiscing Elit, Vivamus, Convallis, Vitae Elit, Eget Iaculis"
            price="32"
          />
          <SpecialDishes
            name="STEAK"
            types="Beef Stake, Potatoes, Curabitur, Non Vulputate Ligula"
            price="50"
          />
          <SpecialDishes
            name="PRIMAVERA SALAD"
            types="Tomatoes, Olives, Egg, Sed, Pellentesqu, Sit Amet, Viverra"
            price="20"
          />
        </div>
      </div>
    </div>
  );
}

export default TodaysSpecials;

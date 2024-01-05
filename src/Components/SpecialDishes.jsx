import React from "react";

function SpecialDishes({ name, types, price }) {
  return (
    <div className="special-dishes-list">
      <div className="special-dish-wrapper">
        <h2>{name}</h2>
        <div className="dotted-line"></div>
      </div>
      <p className="types-of-food">{types}</p>
      <p className="special-dish-price">${price}</p>
    </div>
  );
}

export default SpecialDishes;

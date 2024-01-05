import React from "react";

function MainCourses({ img, name, text, price }) {
  return (
    <div className="dish-container">
      <img src={img} alt="" />
      <div className="dish-container-info">
        <div className="dish-container-header">
          <h1>{name}</h1>
          <div className="dotted-line"></div>
          <p className="dish-price">${price}</p>
        </div>
        <p className="dish-container-text">{text}</p>
      </div>
    </div>
  );
}

export default MainCourses;

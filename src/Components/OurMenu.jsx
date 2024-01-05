import React from "react";
import { useAppContext } from "../AppContext";
import { Link } from "react-router-dom";

function OurMenu() {
  const { currentPage, setPage } = useAppContext();

  const handleClick = (page) => {
    window.scrollTo(0, 0);
    setPage(page);
  };

  return (
    <div className="our-menu-container">
      <div className="our-menu-text">
        <h1>Our Menu</h1>
        <p>
          Our menu offers something for everybody, from the light passage of
          plates of mixed greens and little nibbles to the inconceivable T Bone
          steak. Our steaks are sliced in-house to guarantee flawlessness and
          expertly barbecued at 2,000 degrees.
        </p>
        <Link onClick={() => handleClick("menu")} to="/menu">
          <button>EXPLORE MENU</button>
        </Link>
      </div>

      <div className="food-menus">
        <div className="dessert-menu-background">
          <h1>DESSERT MENU</h1>
        </div>
        <div className="dining-menu-background">
          <h1>DINING MENU</h1>
        </div>
      </div>
    </div>
  );
}

export default OurMenu;

import React from "react";
import { Link } from "react-router-dom";
import { useAppContext } from "../AppContext";

function OurHistory() {
  const { currentPage, setPage } = useAppContext();

  const handleClick = (page) => {
    window.scrollTo(0, 0);
    setPage(page);
  };
  return (
    <div className="our-history-container">
      <div className="our-history-wrapper">
        <div className="our-history-headers">
          <h2>Since 1980</h2>
          <h1>OUR HISTORY</h1>
        </div>
        <div className="our-history-text">
          <h3>HOW IT ALL STARTED</h3>
          <p>
            At Élicieux, our journey began with a simple yet profound vision to
            create a haven for food enthusiasts, a place where flavors come
            alive, and memories are made. Established in 1980s, we embarked on
            this culinary adventure with the aim of offering a unique blend of
            delectable cuisine, inviting ambiance, and impeccable service.
          </p>
        </div>
        <Link onClick={() => handleClick("history")} to="/history">
          <button className="history-btn">OUR FULL HISTORY</button>
        </Link>
      </div>
    </div>
  );
}

export default OurHistory;

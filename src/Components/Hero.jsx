import React from "react";

function Hero({ h1text, h2text, backgroundImage, height }) {
  const background = {
    backgroundImage: `url(${backgroundImage})`,
  };

  const heightDisplay = {
    minHeight: height,
  };

  return (
    <div className="hero-background-wrapper" style={background}>
      <div className="hero-container" style={heightDisplay}>
        <h2>{h1text}</h2>
        <h1>{h2text}</h1>
      </div>
    </div>
  );
}

export default Hero;

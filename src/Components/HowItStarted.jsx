import React from "react";
import { FaCircle } from "react-icons/fa";

function HowItStarted({ date, title, text, className }) {
  return (
    <div className={className}>
      <h2>{date}</h2>
      <h1>{title}</h1>
      <p>{text}</p>
    </div>
  );
}

export default HowItStarted;

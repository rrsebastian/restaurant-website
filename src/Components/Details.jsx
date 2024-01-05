import React from "react";

function Details({ title, info }) {
  return (
    <div className="detail-container">
      <h3>{title}</h3>
      <p>{info}</p>
    </div>
  );
}

export default Details;

import React from "react";
import SignatureImg from "../assets/signature.png";
import FounderImg from "../assets/founder.jpg";
import HouseImg from "../assets/bg-0002.jpg";

function TheFounder() {
  return (
    <div className="the-founder-container">
      <div className="the-founder-text-container">
        <div className="the-founder-top-container">
          <h2>A few words about our founder</h2>
          <h1>The Founder</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ac
            nulla facilisis, tincidunt ex eget, porta odio. Integer convallis
            cursus lacus, et cursus sapien. Cras fringilla diam nisl, ut euismod
            ex faucibus quis. Suspendisse eu orci turpis. Etiam ut ullamcorper
            metus. Ut eget tellus laoreet, aliquam massa at, finibus libero. Nam
            mauris dolor, semper in eleifend vitae, luctus vitae nibh. Mauris
            egestas quis magna nec molestie.
          </p>
        </div>
        <div className="the-founder-bottom-container">
          <em>
            "Praesent ac nulla facilisis, tincidunt ex eget, porta odio. Integer
            convallis cursus lacus, et cursus sapien. "
          </em>
          <img className="signature-img" src={SignatureImg} alt="" />
        </div>
      </div>
      <div className="img-container">
        <img className="founder-img" src={FounderImg} />
      </div>
      <div className="the-founder-house-img">
        <img src={HouseImg} />
      </div>
    </div>
  );
}

export default TheFounder;

import React from "react";
import aboutUsImg1 from "../assets/bg-07.jpg";
import aboutUsImg2 from "../assets/bg-06.jpg";

function AboutUs() {
  return (
    <div className="about-us-container">
      <div className="about-us-info-container">
        <h2>ABOUT US</h2>
        <p>
          Welcome to Élicieux, where culinary excellence meets warm hospitality.
          Our story is one of passion, dedication, and a commitment to
          delivering an exceptional dining experience to our cherished guests.
          From the moment you step through our doors, our friendly and attentive
          staff are here to make you feel at home. We take pride in creating an
          atmosphere where every guest is not just a patron but a welcomed
          member of our extended family.
        </p>
        <button>READ MORE</button>
      </div>

      <div className="about-us-img-container">
        <img className="about-us-img1" src={aboutUsImg1} />
        <img className="about-us-img2" src={aboutUsImg2} />
      </div>
    </div>
  );
}

export default AboutUs;

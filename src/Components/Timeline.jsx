import React from "react";
import HowItStarted from "./HowItStarted";
import { FaCircle } from "react-icons/fa";

function Timeline() {
  return (
    <div className="timeline-container">
      <div className="timeline-wrapper">
        <div className="timeline-top-wrapper">
          <h2>Open since 1980</h2>
          <h1>
            The History starts over 40 years ago, when flavio opened his
            restaurant...
          </h1>
        </div>
        <div className="timeline-bottom-container">
          <div className="line-wrapper">
            <div className="line"></div>
            <div className="circle-wrapper">
              <FaCircle className="circle-img" />
              <FaCircle className="circle-img" />
              <FaCircle className="circle-img" />
              <FaCircle className="circle-img" />
              <FaCircle className="circle-img" />
            </div>
          </div>
          <h3>How it all started</h3>
          <div className="howitstarted-wrapper">
            <HowItStarted
              date="January 15, 1980"
              title="Opened in 1980"
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ac nulla facilisis, tincidunt ex eget, porta odio. Integer convallis cursus lacus, et cursus sapien. Cras fringilla diam nisl, ut euismod ex faucibus quis. Suspendisse eu orci turpis"
              className="timeline-section-container-left"
            />
            <HowItStarted
              date="March 20, 1994"
              title="The birth of his menu"
              text="Praesent ac nulla facilisis, tincidunt ex eget, porta odio. Integer convallis cursus lacus, et cursus sapien. Cras fringilla diam nisl, ut euismod ex faucibus quis. Suspendisse eu orci turpis"
              className="timeline-section-container-right"
            />

            <HowItStarted
              date="Aril 10, 2010"
              title="French gastronomic food emerged"
              text="Praesent ac nulla facilisis, tincidunt ex eget, porta odio. Integer convallis cursus lacus, et cursus sapien. Cras fringilla diam nisl, ut euismod ex faucibus quis. Suspendisse eu orci turpis"
              className="timeline-section-container-left"
            />

            <HowItStarted
              date="October 5, 2015"
              title="The new team of chefs is formed"
              text="Praesent ac nulla facilisis, tincidunt ex eget, porta odio. Integer convallis cursus lacus, et cursus sapien. Cras fringilla diam nisl, ut euismod ex faucibus quis. Suspendisse eu orci turpis"
              className="timeline-section-container-right"
            />

            <HowItStarted
              date="May 3, 2019"
              title="Restaurant rebranding"
              text="Praesent ac nulla facilisis, tincidunt ex eget, porta odio. Integer convallis cursus lacus, et cursus sapien. Cras fringilla diam nisl, ut euismod ex faucibus quis. Suspendisse eu orci turpis"
              className="timeline-section-container-left"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Timeline;

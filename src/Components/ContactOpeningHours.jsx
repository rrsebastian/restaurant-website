import React from "react";
import Details from "./Details";

function ContactOpeningHours() {
  return (
    <div className="contact-info-container">
      <h2>Contact Info</h2>
      <div>
        <Details title="Dining" info="(555) 555-7788" />
        <Details title="Take out" info="(555) 456-2442" />
        <Details title="Email" info="contact@info.com" />
        <Details title="Location" info="London, Palace Green" />
      </div>
      <h2 className="opening-hours">Opening Hours</h2>
      <div>
        <Details title="Monday-Friday" info="9:00 AM - 10:00 PM" />
        <Details title="Saturday" info="9:00 AM - 18:00 PM" />
        <Details title="Sunday" info="Closed" />
      </div>
    </div>
  );
}

export default ContactOpeningHours;

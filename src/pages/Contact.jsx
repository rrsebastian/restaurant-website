import React from "react";
import Navbar from "../Components/Navbar";
import Hero from "../Components/Hero";
import backgroundImage from "../assets/bg-00011.jpg";
import ContactOpeningHours from "../Components/ContactOpeningHours";
import DropUsAMessage from "../Components/DropUsAMessage";
import Map from "../Components/Map";
import Footer from "../Components/Footer";

function Contact() {
  return (
    <div>
      <Navbar />
      <Hero
        h1text="Get in touch"
        h2text="Contact"
        height="55vh"
        backgroundImage={backgroundImage}
      />
      <div className="contact-message-wrapper">
        <ContactOpeningHours />
        <DropUsAMessage />
      </div>
      <Map />
      <Footer />
    </div>
  );
}

export default Contact;

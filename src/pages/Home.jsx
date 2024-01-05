import React, { useRef } from "react";
import Navbar from "../Components/Navbar";
import Hero from "../Components/Hero";
import AboutUs from "../Components/AboutUs";
import OurHistory from "../Components/OurHistory";
import OurMenu from "../Components/OurMenu";
import TodaysSpecials from "../Components/TodaysSpecials";
import BookATable from "../Components/BookATable";
import Footer from "../Components/Footer";
import backgroundImage from "../assets/bg-0001.jpg";

function Home() {
  const bookATableRef = useRef();

  return (
    <div>
      <Navbar bookATableRef={bookATableRef} />
      <Hero
        height="100vh"
        h1text="Welcome to our"
        h2text="Restaurant"
        backgroundImage={backgroundImage}
      />
      <AboutUs />
      <OurHistory />
      <OurMenu />
      <TodaysSpecials />
      <BookATable ref={bookATableRef} />
      <Footer />
    </div>
  );
}

export default Home;

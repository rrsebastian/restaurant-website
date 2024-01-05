import React, { useRef } from "react";
import Navbar from "../Components/Navbar";
import Hero from "../Components/Hero";
import backgroundImage from "../assets/bg-00011.jpg";
import MainSideDishes from "../Components/MainSideDishes";
import DesertsBeverages from "../Components/DesertsBeverages";
import BookATable from "../Components/BookATable";
import Footer from "../Components/Footer";

function Menu() {
  const bookATableRef = useRef();

  return (
    <div>
      <Navbar bookATableRef={bookATableRef} />
      <Hero
        height="55vh"
        h1text="Check out our"
        h2text="Menu"
        backgroundImage={backgroundImage}
      />
      <MainSideDishes />
      <DesertsBeverages />
      <BookATable ref={bookATableRef} />
      <Footer />
    </div>
  );
}

export default Menu;

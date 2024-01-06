import React, { useEffect, useRef, useState } from "react";
import Hero from "../Components/Hero";
import backgroundImage from "../assets/bg-00011.jpg";
import Navbar from "../Components/Navbar";
import TheFounder from "../Components/TheFounder";
import Timeline from "../Components/Timeline";
import BookATable from "../Components/BookATable";
import Footer from "../Components/Footer";
import { useNavigate } from "react-router-dom";

function History() {
  const navigate = useNavigate();
  const [shouldRedirect, setShouldRedirect] = useState(false);
  const bookATableRef = useRef();

  useEffect(() => {
    const isRefreshed =
      window.performance.getEntriesByType("navigation")[0].type === "reload";

    if (isRefreshed && window.location.pathname === "/history") {
      // If refreshed and on /history, set shouldRedirect to true
      setShouldRedirect(true);
    }
  }, []);

  useEffect(() => {
    // Use the navigate function to redirect when shouldRedirect is true
    if (shouldRedirect) {
      navigate("/history");
    }
  }, [shouldRedirect, navigate]);

  return (
    <div>
      <Navbar bookATableRef={bookATableRef} />
      <Hero
        h1text="About us"
        h2text="History"
        height="55vh"
        backgroundImage={backgroundImage}
      />
      <TheFounder />
      <Timeline />
      <BookATable ref={bookATableRef} />
      <Footer />
    </div>
  );
}

export default History;

//

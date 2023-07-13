import React from "react";
// components
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import About from "./Components/About";
import Service from "./Components/Service";
import Testimonials from "./Components/Testimonials";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
// import Slide from "./Components/Slide";

const App = () => {
  return (
    <>
      <div className="w-full min-h-screen overflow-hidden">
        <Header />
        <Hero />
        <About />
        <Service />
        <Testimonials />
        <Contact />
        <Footer />

        {/* <Slide /> */}
      </div>
    </>
  );
};

export default App;

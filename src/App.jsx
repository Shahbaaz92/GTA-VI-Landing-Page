import React from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import NavBar from "./sections/NavBar";
import Hero from "./sections/Hero";
import ComingSoon from "./sections/ComingSoon";

gsap.registerPlugin(ScrollTrigger);

const App = () => {
  return (
    <main>
      <NavBar />
      <Hero />
      <ComingSoon />
    </main>
  );
};

export default App;

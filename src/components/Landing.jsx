import React from "react";
import NavBar from "./NavBar";
import ImageCarouselSlider from "./Slider";
import ImageCarousel from "./CarouselSlider";
import OurDream from "./OurDream";
import Countup from "./Countup";
import Testimonials from "./Testimonials";
import PropertyOne from "../../src/assets/png/King’sCourtGate3D.jpg";

const Landing = () => {
  const slideStyles = {
    position: "relative",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    maxHeight: "500px", // Adjust the height as needed
  };

  const overlayStyles = {
    position: "absolute",
    top: "70%",
    left: "20%",
    transform: "translate(-50%, -50%)",
    color: "white",
    fontSize: "24px",
    fontWeight: "bold",
    textShadow: "2px 2px 4px rgba(0, 0, 0, 0.8)",
  };
  return (
    <div>
      {/* <NavBar/> */}
      {/* <div style={slideStyles}>
        <img src={PropertyOne} alt="Slide 1" />
        <div style={overlayStyles}>Text Overlay 1</div>
      </div> */}
      <ImageCarousel />
      <OurDream />

      <Countup />
      <div className="mt-4 mb-4">Projects</div>
      <ImageCarouselSlider />
      <Testimonials />
    </div>
  );
};

export default Landing;

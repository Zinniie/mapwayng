import React, { useEffect, useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import PropertyOne from "../../src/assets/png/King’sCourtGate3D.jpg";
import PropertyTwo from "../../src/assets/png/property2.jpeg";
import PropertyThree from "../../src/assets/png/property3.webp";

const ImageCarousel = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if the window width is less than or equal to 767px (typical mobile screen width)
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 767);
    };

    // Initial check on component mount
    handleResize();

    // Listen for window resize events
    window.addEventListener("resize", handleResize);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const slideStyles = {
    position: "relative",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    maxHeight: "500px", // Adjust the height as needed
  };

  let overlayStyles = {
    position: "absolute",
    top: "80%",
    left: "15%",
    transform: "translate(-50%, -50%)",
    color: "white",
    fontSize: "24px",
    fontWeight: "bold",
    textShadow: "2px 2px 4px rgba(0, 0, 0, 0.8)",
  };

  if (isMobile) {
    // Adjust overlay styles for mobile
    overlayStyles = {
      ...overlayStyles,
      top: "83%", 
      fontSize: "12px", 
      left: "23%",
    };
  }
  return (
    <Carousel
      showArrows={true}
      infiniteLoop={true}
      showThumbs={false}
      autoPlay={true}
      interval={1300000}
      renderArrowPrev={(onClickHandler, hasPrev, label) =>
        hasPrev && (
          <button
            type="button"
            onClick={onClickHandler}
            title={label}
            style={{ zIndex: 2, position: "absolute", bottom: "10%", left: 15 }}
          >
            Previous
          </button>
        )
      }
      renderArrowNext={(onClickHandler, hasNext, label) =>
        hasNext && (
          <button
            type="button"
            onClick={onClickHandler}
            title={label}
            style={{
              zIndex: 2,
              position: "absolute",
              bottom: "10%",
              right: 15,
            }}
          >
            Next
          </button>
        )
      }
    >
      <div style={slideStyles}>
        <img src={PropertyOne} alt="Slide 1" />
        <div style={overlayStyles}>
          Offering long lasting investment <br />
          opportunities for millennials <br /> through the creation <br /> of
          real estate solutions
        </div>
      </div>
    </Carousel>
  );
};

export default ImageCarousel;

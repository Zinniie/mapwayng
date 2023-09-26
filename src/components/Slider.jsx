import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import MapWay1 from "../../src/assets/png/MapwayBack-1.jpg";
import MapWay2 from "../../src/assets/png/MapwayFront1-2.jpg";
import MapWay3 from "../../src/assets/png/mapway3.jpeg";
import MapWay4 from "../../src/assets/png/prelaunchprice.jpg";
import MapWay5 from "../../src/assets/png/prelaunch.jpg";
import MapWay6 from "../../src/assets/png/kingscourtprice.jpg";

const ImageCarouselSlider = () => {
  const carouselStyles = {
    maxWidth: "1000px", // Adjust the width as needed
    margin: "0 auto", // Center the carousel on the page
  };

  const slideStyles = {
    display: "flex",
    flexDirection: "column", // Stack content vertically
    alignItems: "center", // Center items horizontally
    justifyContent: "center", // Center items vertically
    margin: "0 20px",
    // height: "400px",
  };

  const descriptionStyles = {
    textAlign: "center",
    maxWidth: "88%", // Adjust the width as needed
    margin: "20px 0",
  };

  const readMoreButtonStyles = {
    backgroundColor: "#007bff",
    color: "#fff",
    padding: "10px 20px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    textDecoration: "none",
  };

  const isMobileDevice = window.innerWidth <= 767; // Define the breakpoint for mobile devices

  const centerSlidePercentage = isMobileDevice ? 100 : 33.3333; // Set centerSlidePercentage based on the device type

  return (
    <div className="container-fluid bg-success carousel-container pb">
      <div className="pt-1 " style={carouselStyles}>
        <Carousel
          showThumbs={false}
          autoPlay={true}
          interval={1000} // Adjust the interval as needed
          showArrows={false}
          showStatus={false}
          infiniteLoop={true}
          emulateTouch={true}
          centerMode={true}
          centerSlidePercentage={centerSlidePercentage}
          swipeScrollTolerance={true}
        >
          <div className="pt-1 pb-3" style={slideStyles}>
            <img src={MapWay1} alt="Slide 1" />
            <div style={descriptionStyles}>
              Ace Real Estate is an award-winning and value-driven real estate
            </div>
            <a href="/readmore">Read More</a>
          </div>
          <div className="pt-1 pb-5" style={slideStyles}>
            <img src={MapWay2} alt="Slide 1" />
            <div style={descriptionStyles}>
              Ace Real Estate is an award-winning and value-driven real estate
            </div>
            <a href="/readmore">Read More</a>
          </div>
          <div className="border border-success pb-3" style={slideStyles}>
            <img src={MapWay3} alt="Slide 1" />
            <div style={descriptionStyles}>
              Ace Real Estate is an award-winning and value-driven real estate
            </div>
            <div>Read More</div>
            {/* <a href="/readmore" >
              Read More
            </a> */}
          </div>
          <div className="pt-1 pb-2" style={slideStyles}>
            <img src={MapWay4} alt="Slide 1" />
          </div>
          <div className="pt-1 pb-2" style={slideStyles}>
            <img src={MapWay5} alt="Slide 1" />
          </div>
          <div className="pt-1 pb-2" style={slideStyles}>
            <img src={MapWay3} alt="Slide 1" />
          </div>
          <div className="pt-1 pb-2" style={slideStyles}>
            <img src={MapWay6} alt="Slide 1" />
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default ImageCarouselSlider;

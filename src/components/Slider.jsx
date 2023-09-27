import React from "react";
import styled from "styled-components";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import MapWay1 from "../../src/assets/png/MapwayBack-1.jpg";
import MapWay2 from "../../src/assets/png/MapwayFront1-2.jpg";
import MapWay3 from "../../src/assets/png/mapway3.jpeg";
import MapWay4 from "../../src/assets/png/prelaunchprice.jpg";
import MapWay5 from "../../src/assets/png/prelaunch.jpg";
import MapWay6 from "../../src/assets/png/kingscourtprice.jpg";
import { Link } from "react-router-dom";

const ImageCarouselSlider = () => {
  const text = [
    {
      image: MapWay1,
      text: " Ace Real Estate is an award-winning and value-driven real estate",
      btnn: "Read More",
    },
    {
      image: MapWay2,
      text: "Ace Real Estate is an award-winning and value-driven real estate",
      btnn: "Read More",
    },
    {
      image: MapWay3,
      text: "Ace Real Estate is an award-winning and value-driven real estate",
      btnn: "Read More",
    },
    {
      image: MapWay4,
      text: "Ace Real Estate is an award-winning and value-driven real estate",
      btnn: "Read More",
    },
    {
      image: MapWay5,
      text: "Ace Real Estate is an award-winning and value-driven real estate",
      btnn: "Read More",
    },
    //  {
    //    image: MapWay6,
    //    text: "Ace Real Estate is an award-winning and value-driven real estate",
    //    btnn: "Read More",
    //  },
  ];
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
          interval={5000} // Adjust the interval as needed
          showArrows={false}
          showStatus={false}
          infiniteLoop={true}
          emulateTouch={true}
          centerMode={true}
          centerSlidePercentage={centerSlidePercentage}
          swipeScrollTolerance={true}
        >
          {text.map((slide, index) => (
            <div
              key={index}
              className="border pt-1 pb2 mb-5"
              style={slideStyles}
            >
              <img src={slide.image} alt={`Slide ${index + 1}`} />
              <div style={descriptionStyles}>{slide.text}</div>
              <LearnMoreBtn>
                <Link to="/project-details">Read More</Link>
              </LearnMoreBtn>
              {/* <a href="/readmore">{slide.btnn}</a> */}
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default ImageCarouselSlider;

const LearnMoreBtn = styled.div`
  // margin-right: 50px;
  a {
    text-decoration: none; /* Remove underline */
    color: #000; /* Set the desired color for the links */
  }
`;

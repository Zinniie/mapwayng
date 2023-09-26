import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import PropertyOne from "../../src/assets/png/King’sCourtGate3D.jpg";
import PropertyTwo from "../../src/assets/png/property2.jpeg";
import PropertyThree from "../../src/assets/png/property3.webp";

const ImageCarousel = () => {
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
        <div style={overlayStyles}>Text Overlay 1</div>
      </div>

      <div>
        <img src={PropertyTwo} alt="Slide 2" style={slideStyles} />
        <div style={overlayStyles}>Text Overlay 1</div>
        {/* <p className="legend">Image 2</p> */}
      </div>
      <div>
        <img src={PropertyThree} alt="Slide 3" style={slideStyles} />
        <div style={overlayStyles}>Text Overlay 1</div>
      </div>
    </Carousel>
  );
};

export default ImageCarousel;

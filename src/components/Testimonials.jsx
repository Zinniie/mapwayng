import React from "react";
import Woman from "../../src/assets/png/woman1.png";
import { styled } from "styled-components";

const Testimonials = () => {
  return (
    <TestimonialsContainer className="container  mt-5 ">
      {/* <div className="text-center">Testimonials</div> */}
      <div className="text-center">What our clients say about us</div>
      <div className="row">
        <div className="col-sm-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
          <TestimonialContent className=" align-items-center justify-content-center border border-dark px-5">
            <div className=" mt-4">
              My journey with KingsCourts has been the most productive and most
              pleasant I've ever had with a real estate company! No stress,
              great results!
            </div>
            <div className="d-flex justify-content-between my-4 ">
              <div className="circle-container">
                <img
                  src={Woman}
                  alt="Slide 1"
                  className="img-fluid rounded-circle "
                  style={{ width: "100px", height: "100px" }}
                />
              </div>
              <div>
            Tosin DaCosta <br /> Stock Broker, <br /> Company Ltd.
              </div>
             
            </div>
          </TestimonialContent>
        </div>
        <div className="col-sm-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
          <TestimonialContent className=" d-flex align-items-center justify-content-center border border-dark">
            thwd
          </TestimonialContent>
        </div>
        <div className="col-sm-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
          <TestimonialContent className=" d-flex align-items-center justify-content-center border border-dark">
            djn
          </TestimonialContent>
        </div>
      </div>
    </TestimonialsContainer>
  );
};

export default Testimonials;

const TestimonialsContainer = styled.div`
//   background: red;
 width: 80%;

 
`;

const TestimonialContent = styled.div`
  background: lavender;
  margin-top: 10px;
  //   width: 75%;
`;

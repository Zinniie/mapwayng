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
          <TestimonialContent className=" align-items-center justify-content-center border border rounded-3 px-5">
            <div className=" mt-4">
              Investing in real estate with MapWay has been a game-changer for
              me. They provided expert guidance and tailored solutions that
              perfectly aligned with my investment goals. The properties they
              recommended have not only met but exceeded my expectations,
              resulting in significant returns on my investments. I highly
              recommend MapWay to anyone seeking reliable and profitable real
              estate opportunities. I also look forward to doing more business
              with them.
            </div>
            <div className="d-flex justify-content-between my-4 ">
              <div className="circle-container">
                {/* <img
                  src={Woman}
                  alt="Slide 1"
                  className="img-fluid rounded-circle "
                  style={{ width: "100px", height: "100px" }} */}
                {/* /> */}
              </div>
              <div>
                Tosin Dabota.
                {/* <br /> Satiafie, <br /> Company Ltd. */}
              </div>
            </div>
          </TestimonialContent>
        </div>
        <div className="col-sm-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
          <TestimonialContent className=" align-items-center justify-content-center border border rounded-3 px-5">
            <div className=" mt-4">
              Working with MapWay was an absolute pleasure. From the moment I
              stepped my feet on the land, I knew I made the right choice. The
              team listened to my needs and preferences, ensuring every detail
              was taken care of. Their dedication and professionalism made the
              entire property-buying experience smooth and stress-free. I can't
              thank them enough for helping me find the perfect place to call
              mine and making my journey to owning a property hassle free.
            </div>
            <div className="d-flex justify-content-between my-4 ">
              <div className="circle-container">
                {/* <img
                  src={Woman}
                  alt="Slide 1"
                  className="img-fluid rounded-circle "
                  style={{ width: "100px", height: "100px" }} */}
                {/* /> */}
              </div>
              <div>
                Tophila Iwuala.
                {/* <br /> Satiafie, <br /> Company Ltd. */}
              </div>
            </div>
          </TestimonialContent>
        </div>
        <div className="col-sm-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
          <TestimonialContent className=" align-items-center justify-content-center border rounded-3 px-5">
            <div className=" mt-4">
              Buying land through MapWay was a pivotal moment in my life. The
              team at MapWay truly understood my vision for the perfect piece of
              land. They were patient, informative, and worked tirelessly to
              find exactly what I was looking for. The guidance they provided
              throughout the process was exceptional, making a complex
              transaction feel surprisingly simple. Now, as I stand on my new
              land, I couldn't be happier with my investment. Thank you, MapWay,
              for helping me find my slice of paradise.
            </div>
            <div className="d-flex justify-content-between my-4 ">
              <div className="circle-container">
                {/* <img
                  src={Woman}
                  alt="Slide 1"
                  className="img-fluid rounded-circle "
                  style={{ width: "100px", height: "100px" }} */}
                {/* /> */}
              </div>
              <div>
                Ezinne Nnabugwu.
                {/* <br /> Satiafie, <br /> Company Ltd. */}
              </div>
            </div>
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

import React from "react";
import styled from "styled-components";
import PropertyOne from "../../../../src/assets/png/property2.jpeg";
import DummyImageOne from "../../../../src/assets/png/dummyImg.jpeg";
import { color } from "../../../constant/color";
import { Link } from "react-router-dom";

const OurProjects = () => {
  return (
    <div>
      <TopImage src={PropertyOne} alt="Slide 1" />
      <ImageText color={color.cooltint} className="container  mt-4 py-4  text-center">
        Premium Listings.
        <div className="container " style={{ height: "2px", width: "70px" }}>
          .
        </div>
        We offer secure, Highly rewarding real estate investment options for a
        myriad of partners investing in the Nigerian real estate sector.
      </ImageText>
      <div
        className="container "
        // style={{ paddingLeft: "150px", paddingRight: "150px" }}
      >
        <div className="row g-5" style={{ marginTop: "0px" }}>
          <div className="col-sm-12 col-md-4 col-lg-4 col-xl-4 col-xxl-1">
            <div
              className="reminders-main d-flex align-items-center justify-content-center "
              style={{ height: "6px" }}
            ></div>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-5">
            <PropertyImage
              className=" d-flex align-items-center justify-content-center border border "
              style={{
                // height: "200px", // Set the desired height of the image container
                backgroundSize: "cover", // Make the image cover the container
                backgroundPosition: "center", // Center the image within the container
                backgroundImage: `url(${DummyImageOne})`, // Set the image URL as the background
              }}
            ></PropertyImage>
            <Listing
              color={color.lightertomatored}
              className="  mt-3 pt-3"
              //  style={{ marginLeft: "20px" }}
            >
              {" "}
              {/* Add a new <div> for the text content */}
              <h2 className="mx-3">Camberwall Advantage 4</h2>
              <p className="mx-3">Ikate Lekki, Lagos</p>
              <div className="row g-0">
                {" "}
                <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                  <div className="py-2 d-flex align-items-center justify-content-center border border-start-0 border-bottom-0">
                    <div className="my-2">
                      {" "}
                      Starting from <br /> ₦80,000,000
                    </div>
                  </div>
                </div>
                <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                  <div className="py-2 d-flex align-items-center justify-content-center border border-end-0 border-bottom-0 ">
                    <LearnMoreBtn>
                      <Link to="/project-details">
                        <BtnLearn className="my-2 py-3 px-4 bg-white">
                          LEARN MORE
                        </BtnLearn>
                      </Link>
                    </LearnMoreBtn>
                  </div>
                </div>
              </div>
            </Listing>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-5">
            <PropertyImage
              className=" d-flex align-items-center justify-content-center border border "
              style={{
                // height: "200px", // Set the desired height of the image container
                backgroundSize: "cover", // Make the image cover the container
                backgroundPosition: "center", // Center the image within the container
                backgroundImage: `url(${DummyImageOne})`, // Set the image URL as the background
              }}
            ></PropertyImage>
            <Listing
              color={color.lightertomatored}
              className="  mt-3 pt-3"
              //  style={{ marginLeft: "20px" }}
            >
              {" "}
              {/* Add a new <div> for the text content */}
              <h2 className="mx-3">Camberwall Advantage 4</h2>
              <p className="mx-3">Ikate Lekki, Lagos</p>
              <div className="row g-0">
                {" "}
                <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                  <div className="py-2 d-flex align-items-center justify-content-center border border-start-0 border-bottom-0">
                    <div className="my-2">
                      {" "}
                      Starting from <br /> ₦80,000,000
                    </div>
                  </div>
                </div>
                <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                  <div className="py-2 d-flex align-items-center justify-content-center border border-end-0 border-bottom-0 ">
                    <LearnMoreBtn>
                      <Link to="/project-details">
                        <BtnLearn className="my-2 py-3 px-4 bg-white">
                          LEARN MORE
                        </BtnLearn>
                      </Link>
                    </LearnMoreBtn>
                  </div>
                </div>
              </div>
            </Listing>
          </div>
          <div className="col-sm-12 col-md-4 col-lg-4 col-xl-4 col-xxl-1">
            <div
              className="reminders-main d-flex align-items-center justify-content-center "
              style={{ height: "6px" }}
            ></div>
          </div>
        </div>
      </div>
      <div
        className="container "
        // style={{ paddingLeft: "150px", paddingRight: "150px" }}
      >
        <div className="row g-5" style={{ marginTop: "0px" }}>
          <div className="col-sm-12 col-md-4 col-lg-4 col-xl-4 col-xxl-1">
            <div
              className="reminders-main d-flex align-items-center justify-content-center "
              style={{ height: "6px" }}
            ></div>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-5">
            <PropertyImage
              className=" d-flex align-items-center justify-content-center border border "
              style={{
                // height: "200px", // Set the desired height of the image container
                backgroundSize: "cover", // Make the image cover the container
                backgroundPosition: "center", // Center the image within the container
                backgroundImage: `url(${DummyImageOne})`, // Set the image URL as the background
              }}
            ></PropertyImage>
            <Listing
              color={color.lightertomatored}
              className="   mt-3 pt-3"
              //  style={{ marginLeft: "20px" }}
            >
              {" "}
              {/* Add a new <div> for the text content */}
              <h2 className="mx-3">Camberwall Advantage 4</h2>
              <p className="mx-3">Ikate Lekki, Lagos</p>
              <div className="row g-0">
                {" "}
                <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                  <div className="py-2 d-flex align-items-center justify-content-center border border-start-0 border-bottom-0">
                    <div className="my-2">
                      {" "}
                      Starting from <br /> ₦80,000,000
                    </div>
                  </div>
                </div>
                <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                  <div className="py-2 d-flex align-items-center justify-content-center border border-end-0 border-bottom-0 ">
                    <LearnMoreBtn>
                      <Link to="/project-details">
                        <BtnLearn className="my-2 py-3 px-4 bg-white">
                          LEARN MORE
                        </BtnLearn>
                      </Link>
                    </LearnMoreBtn>
                  </div>
                </div>
              </div>
            </Listing>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-5">
            <PropertyImage
              className=" d-flex align-items-center justify-content-center border border "
              style={{
                // height: "200px", // Set the desired height of the image container
                backgroundSize: "cover", // Make the image cover the container
                backgroundPosition: "center", // Center the image within the container
                backgroundImage: `url(${DummyImageOne})`, // Set the image URL as the background
              }}
            ></PropertyImage>
            <Listing
              color={color.lightertomatored}
              className=" mt-3 pt-3"
              //  style={{ marginLeft: "20px" }}
            >
              {" "}
              {/* Add a new <div> for the text content */}
              <h2 className="mx-3">Camberwall Advantage 4</h2>
              <p className="mx-3">Ikate Lekki, Lagos</p>
              <div className="row g-0">
                {" "}
                <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                  <div className="py-2 d-flex align-items-center justify-content-center border border-start-0 border-bottom-0">
                    <div className="my-2">
                      {" "}
                      Starting from <br /> ₦80,000,000
                    </div>
                  </div>
                </div>
                <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                  <div className="py-2  d-flex align-items-center justify-content-center border border-end-0 border-bottom-0 ">
                    <LearnMoreBtn>
                      <Link to="/project-details">
                        <BtnLearn className="my-2 py-3 bg-white px-4 ">
                          LEARN MORE
                        </BtnLearn>
                      </Link>
                    </LearnMoreBtn>
                  </div>
                </div>
              </div>
            </Listing>
          </div>
          <div className="col-sm-12 col-md-4 col-lg-4 col-xl-4 col-xxl-1">
            <div
              className="reminders-main d-flex align-items-center justify-content-center "
              style={{ height: "6px" }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurProjects;

const LearnMoreBtn = styled.div`
  // margin-right: 50px;
  a {
    text-decoration: none; /* Remove underline */
    color: #000; /* Set the desired color for the links */
  }

`;

const BtnLearn = styled.div`
  border-radius: 10px;
`;
const PropertyImage = styled.div`
  border-radius: 10px 10px 0 0;
  height: 300px;
`;

const Listing = styled.div`
  border-radius: 0 0 10px 10px;
  background: ${(props) =>
    props.color}; // Use template literals to interpolate the color prop
  /* Add any other styles as needed */
  // height: 300px;
`;

const TopImage = styled.img`
  // position: relative;
  width: 100%; /* Set the width to 100% of the container */
  height: 400px;
`;

const ImageText = styled.div`
  // position: absolute;
  // width: 75%;
  // top: 50%;
  background: ${(props) => props.color};
  // margin-left: 170px;
  // left: 50px;
  // transform: translate(-50%, -50%);
  color: white;
  font-size: 24px;
  font-weight: bold;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.8);
`;

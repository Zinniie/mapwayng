import React from "react";
import PropertyOne from "../../../src/assets/png/landmarks-modern-city.jpg";
import OfficialProfile from "../../../src/assets/png/Officialpicture.JPG";
import OfficialProfileTwo from "../../../src/assets/png/TemidayoFajemilugba.jpg";
import Innovation from "../../../src/assets/svg/innovation.svg";
import Partnership from "../../../src/assets/svg/partnership.svg";
import Accountability from "../../../src/assets/svg/accountability.svg";
import CustomerCentric from "../../../src/assets/svg/customer_centric.svg";
import Excellence from "../../../src/assets/svg/quality.svg";
import styled from "styled-components";

const AboutUs = () => {
  return (
    <div>
      <TopImage src={PropertyOne} alt="Slide 1" />
      <ImageText>
        MayWay Real Estate Limited <br />
        We're not just about transactions,
        <br /> we're your trusted partners, <br /> committed to reshaping the
        real estate <br /> landscape with excellence at its core.
      </ImageText>
      <div className="container">
        <div className="row justify-content-center ">
          {" "}
          <div className="col-sm-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
            {" "}
            <div className="  align-items-center justify-content-center bg-white shadow rounded p-5 mt-3 mb-3">
              <div className=" ">
                <img
                  src={OfficialProfile}
                  alt="Slide 1"
                  style={{ width: "250px", height: "250px" }}
                />
              </div>{" "}
              <div className="mt-3">Olamide Eniola Peters</div>
              <div className="mt-3">
                Our vision is to offer long lasting investment opportunities for
                millennials through the creation of real estate solutions.
              </div>
              {/* <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                {" "}
                <div className="  d-flex align-items-center justify-content-center shadow rounded">
                  <img
                    src={OfficialProfile}
                    alt="Slide 1"
                    style={{ width: "250px", height: "250px" }}
                  />
                </div>{" "}
              </div> */}
            </div>{" "}
          </div>{" "}
          <div className="col-sm-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
            {" "}
            <div className="  align-items-center justify-content-center bg-white shadow rounded p-5 mt-3 ">
              <div className=" ">
                <img
                  src={OfficialProfileTwo}
                  alt="Slide 1"
                  style={{ width: "250px", height: "250px" }}
                />
              </div>{" "}
              <div className="mt-3">Temidayo Fajemilugba</div>
              <div className="mt-3">
               Our Mission is to create excellent real <br /> estate solutions and opportunities to
                our clients.
              </div>
              {/* <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                {" "}
                <div className="  d-flex align-items-center justify-content-center shadow rounded">
                  <img
                    src={OfficialProfile}
                    alt="Slide 1"
                    style={{ width: "200px", height: "200px" }}
                  />
                </div>{" "}
              </div> */}
            </div>{" "}
          </div>{" "}
        </div>
        <div
          className="border text-center fw-bold py-3 mt-5"
          style={{ fontSize: "28px" }}
        >
          Our Core Values
        </div>
        <div className="row">
          <div className="col-sm-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
            {" "}
            <div className="align-items-center justify-content-center bg-white shadow rounded p-5 mt-5">
              <img
                src={Innovation}
                alt="Innovation"
                style={{ width: "100px", height: "100px" }}
              />
              <div className="mt-3">Innovation</div>
              <div className="mt-3">
                We create solution oriented projects that will solve the
                challenges of our clients.
              </div>
            </div>
          </div>{" "}
          <div className="col-sm-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
            {" "}
            <div className="align-items-center justify-content-center bg-white shadow rounded p-5 mt-5">
              <img
                src={Partnership}
                alt="Partnership"
                style={{ width: "100px", height: "100px" }}
              />
              <div className="mt-3">Partnership</div>
              <div className="mt-3">
                We are committed to building your desires with you.
              </div>
            </div>
          </div>{" "}
          <div className="col-sm-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
            <div className="align-items-center justify-content-center bg-white shadow rounded p-5 mt-5">
              <img
                src={Accountability}
                alt="Accountability"
                style={{ width: "100px", height: "100px" }}
              />
              <div className="mt-3">Accountability</div>
              <div className="mt-3">
                We Operate with a high level of trust and professionalism.
              </div>
            </div>
          </div>
        </div>

        <div className="row justify-content-center">
          <div className="col-sm-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
            <div className="align-items-center justify-content-center bg-white shadow rounded p-5 mt-5">
              <img
                src={CustomerCentric}
                alt="CustomerCentric"
                style={{ width: "100px", height: "100px" }}
              />
              <div className="mt-3">Customer Centric</div>
              <div className="mt-3">
                We go the extra mile by ensuring all of our services fulfill the
                heart desires of our clients.
              </div>
            </div>
          </div>{" "}
          <div className="col-sm-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
            <div className="align-items-center justify-content-center bg-white shadow rounded p-5 mt-5">
              <img
                src={Excellence}
                alt="Excellence"
                style={{ width: "100px", height: "100px" }}
              />
              <div className="mt-3">Excellence</div>
              <div className="mt-3">
                We do ordinary things in an extraordinary manner.
              </div>
            </div>
          </div>{" "}
        </div>
      </div>
    </div>
  );
};

export default AboutUs;

const TopImage = styled.img`
  position: relative;
  width: 100%; /* Set the width to 100% of the container */
  height: 400px;
`;

const ImageText = styled.div`
  position: absolute;
  top: 20%;
  left: 20px;
  // transform: translate(-50%, -50%);
  color: white;
  font-size: 20px;
  font-weight: bold;
  // text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.8);
`;

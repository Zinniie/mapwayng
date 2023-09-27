import React from "react";
import styled from "styled-components";
import { MdKeyboardArrowRight } from "react-icons/md";
import { AiOutlineCheck } from "react-icons/ai";
import {
  FaFacebookF,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const ProjectDetails = () => {
  return (
    <div>
      <div
        className="bg-success"
        style={{ height: "300px", paddingTop: "200px" }}
      >
        <div>Vision City</div>
        <div>WE'RE BUILDING A ZERO CARBON EMISSION CITY.</div>
      </div>
      <div className="container mt-5">
        <div className="row">
          <div className="col-sm-12 col-md-4 col-lg-4 col-xl-4 col-xxl-1">
            <div
              className="reminders-main d-flex align-items-center justify-content-center "
              style={{ height: "6px" }}
            ></div>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
            <div
              className="reminders-main align-items-center justify-content-center border border "
              //   style={{ height: "6px" }}
            >
              {" "}
              <div>
                The beauty of owning land is that it’s a tangible asset that you
                can bank on them, and also pass down through generations. Don’t
                let the opportunity to invest in your family’s future slip away.
                WE’RE BUILDING A ZERO CARBON EMISSION CITY. Own a piece of
                Vision City, It’s a well planned and structured project, Our
                desire to make property ownership easy, we’ve made this more
                affordable; we’ve available plot sizes from 150sqm, 200sqm,
                250sqm, 300sqm, 600sqm and commercial plots at 1000sqm. It’s
                currently still selling at a pre-launch price of N5,000 per
                square meter. Camberwall Advantage is an upscale real estate
                development project by Veritasi Homes and Properties. Comprising
                apartments and units of flat, Camberwall Advantage is
                strategically located at Ikate. The proposed project features
                unique and elegant designs tailored to meet the need of the
                modern day investor as well as appeal to aesthetics. With the
                existing reputation of Veritasi Homes with Camberwall projects,
                this project promises homes of a high standard, quality
                finishings and best value for investment. Our strategy
                transcends developing homes to solve the housing problems of
                Nigeria, we have injected interesting metrics to help our
                clients get cash flow into our product plan. With this,
                Camberwall Advantage is set to set a new hallmark for a
                sophisticated urban living. Ikate is one of the most developed
                neighbourhoods in Lagos Island, just about five minutes drive
                from the Lekki, assets here are a goldmine. Appreciation and
                easy liquidation of assets is assured.
              </div>
              <div className="border-bottom">
                <div>Client</div>
                <div>MapWay</div>
              </div>
              <div className="border-bottom">
                <div>Project type</div>
                <div>Land</div>
              </div>
              <div className="border-bottom">
                <div>Location</div>
                <div>Epe, Lagos</div>
              </div>
              <div className="d-flex mt-3">
                {" "}

                <IconContainer>
                  <Link
                    to="https://www.instagram.com/mapwayng"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Icon>
                      <FaInstagram />
                    </Icon>
                  </Link>
                </IconContainer>
                <IconContainer>
                  <Link
                    to="https://www.linkedin.com/company/mapway-real-estate-limited/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Icon>
                      <FaLinkedin />
                    </Icon>
                  </Link>
                </IconContainer>
                <IconContainer>
                  <Link
                    to="https://twitter.com/mapwayng"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Icon>
                      <FaTwitter />
                    </Icon>
                  </Link>
                </IconContainer>
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
            <div className="reminders-main align-items-center justify-content-center border border">
              <div>Property Description</div>
              <ul className="arrow-list">
                <ArrowListItem>
                  <ArrowIcon />
                  Oba Elegushi Palace
                </ArrowListItem>
                <ArrowListItem>
                  <ArrowIcon />
                  Spring bay estate
                </ArrowListItem>
                <ArrowListItem>
                  <ArrowIcon />
                  Prime water view estate
                </ArrowListItem>
                <ArrowListItem>
                  <ArrowIcon />
                  Abiola court 6
                </ArrowListItem>
                <ArrowListItem>
                  <ArrowIcon />
                  Parktonian Hotel
                </ArrowListItem>
                <ArrowListItem>
                  <ArrowIcon />
                  Kohinoor Lounge, Bar and Restaurant
                </ArrowListItem>
              </ul>
              <div>Quick Summary</div>
              <ul className="arrow-list">
                <ArrowListItem>
                  <CheckIcon />
                  100% Dry Land.
                </ArrowListItem>
                <ArrowListItem>
                  <CheckIcon />C of O in View.
                </ArrowListItem>
                <ArrowListItem>
                  <CheckIcon />
                  Good & Accessible Road.
                </ArrowListItem>
                <ArrowListItem>
                  <CheckIcon />
                  Secured Environment.
                </ArrowListItem>
                <ArrowListItem>
                  <CheckIcon />
                  instant Allocation.
                </ArrowListItem>
                <ArrowListItem>
                  <CheckIcon />
                  Modern Housing.
                </ArrowListItem>
                <ArrowListItem>
                  <CheckIcon />
                  Good and Accessible Road.
                </ArrowListItem>
                <ArrowListItem>
                  <CheckIcon /> Recreational Facilities.
                </ArrowListItem>
                <ArrowListItem>
                  <CheckIcon />
                  instant Allocation.
                </ArrowListItem>
              </ul>
            </div>
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

export default ProjectDetails;

const ArrowListItem = styled.li`
  list-style-type: none;
  display: flex;
  align-items: center;
  padding: 5px 0;
`;

const ArrowIcon = styled(MdKeyboardArrowRight)`
  margin-right: 5px;
`;

const CheckIcon = styled(AiOutlineCheck)`
  margin-right: 5px;
`;

const Areas = styled.ul`
  list-style: none;
  padding-left: 0;
`;

const ListItem = styled.li`
  ::before {
    content: "\f061"; /* Unicode for the right arrow icon from Font Awesome */
    font-family: "Font Awesome 5 Free"; /* Replace with the Font Awesome font-family you are using */
    font-weight: 900;
    // margin-right: 8px;
  }
`;

const IconContainer = styled.div`
  margin-left: 20px;
`;
const Icon = styled.div`
  color: black;
`;

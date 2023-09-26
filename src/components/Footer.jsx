import React from "react";
import { color } from "../constant/color";
import styled from "styled-components";

function Footer() {
  const text = [
    {
      text: "About Us",
      categories: [
        "We offer a full scope of real services custom fitted to you as a homeowner. We have a broad portfolio of detached house, semi-detached, lands in Lagos, Abuja, Dubai and London.",
      ],
      text2: "Company",
      categories2: [
        "About us",
        "Careers",
        "Press",
        "News",
        "Media kit",
        "Contact",
      ],
    },
    {
      text: "Product",
      categories: [
        "Overview",
        "Features",
        "Solutions",
        "Tutorial",
        "Pricing",
        "Releases",
      ],
      text2: "Company",
      categories2: [
        "About us",
        "Careers",
        "Press",
        "News",
        "Media kit",
        "Contact",
      ],
    },
    {
      text: "Resources",
      categories: [
        "Blog ",
        "Newsletter",
        "Events",
        "Help centre",
        "Tutorials",
        "Support",
      ],
      text2: "Use cases",
      categories2: [
        "Startups",
        "Enterprise",
        "Government",
        "SaaS",
        "Marketplaces",
        "Ecommerce",
      ],
    },
    {
      text: "Contact Us",
      categories: [
        "Twitter",
        "Facebook",
        "LinkedIn",
        "YouTube",
        'Instagram'
        
      ],
      text2: "Legal",
      categories2: [
        "Terms",
        "Privacy",
        "Cookies",
        "Licenses",
        "Settings",
        "Contact",
      ],
    },
  ];
  return (
    <FooterDiv
      className="footer mt-5 "
      style={{
        background: color.navyblue,
        color: color.lightergrey,
      }}
    >
      <div className="container top-footer-content pt-5 px-5">
        <div className="row ">
          <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
            <div className="subscribe-container d-flex">
              <div>
                <div
                  className="newsletter-text1 text-start"
                  style={{
                    color: color.lightgrey,
                  }}
                >
                  Join our newsletter
                </div>
                <div className="newsletter-text2 text-start">
                  Never Miss Anything From MapWayng By Signing Up To Our
                  Newsletter.
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
            <form
              action="https://getform.io/f/d1dea798-a2f8-4af7-9b71-ea61dcabce49"
              method="POST"
              className="subscribe-box d-flex align-items-end justify-content-end"
            >
              <div class="subscribe-auth py-2 px-3 shadow-lg mt-3 rounded-3 bg-white">
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                ></input>
              </div>
              <button
                className="subscribebtn border-0 py-2 px-3 mx-3 rounded-3 text-white"
                type="submit"
                style={{
                  background: color.tomatored,
                }}
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
      <div className="container  ">
        <div className="row">
          {text.map((item) => (
            <div className="col-sm-12 col-md-3 col-lg-3 col-xl-3 col-xxl-3 ">
              <div className="mt-3 mx-5 reminders-main d-flex align-items-center justify-content-between">
                <div className="enquiries-main-text-1 ">
                  <div className="text-white text-start mt-5">{item.text}</div>
                  <div className="mt-4">
                    {item.categories.map((i, index) => (
                      <div key={index} className="d-block text-start mt-3">
                        {i}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="container bottom-footer-content pt-5  px-5">
        <div className="row ">
          <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
            <div className="brand-cover  d-flex align-items-center">
              <div
                className="brand-icon d-flex text-white px-2 fw-bold shadow-sm rounded-2 mx-2 align-items-center justify-content-center"
                style={{
                  background: color.deepgrey,
                }}
              >
                R
              </div>
              <div className="brand-name fw-bold  mx-2">MapWay</div>
            </div>
            {/* <div className="subscribe-container d-flex">
              <div
                className="newsletter-text1 text-start"
                style={{
                  color: color.lightgrey,
                }}
              >
                U
              </div>
              <div className="newsletter-text2 text-start">Untitled UI</div>
            </div> */}
          </div>
          <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
            <div className="d-flex align-items-end justify-content-end  ">
              <div className="subscribebtn ">
                &copy; 2023 MapWay. All rights reserved
              </div>
            </div>
          </div>
        </div>
      </div>
    </FooterDiv>
  );
}

const FooterDiv = styled.div`
  //   margin-top: 4000px;
  // height: 100vh;
  padding-bottom: 50px;
  //   color: red
`;

export default Footer;

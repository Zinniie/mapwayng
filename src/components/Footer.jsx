import React from "react";
import { color } from "../constant/color";
import styled from "styled-components";

function Footer() {
  const text = [
    {
      text: "About Us",
      categories: [
        "At MapWay, we're driven by a vision to revolutionize real estate for millennials, providing enduring investment opportunities through innovative solutions. Our mission is to create exceptional real estate experiences, building lasting partnerships and upholding core values of Integrity, Partnership, Accountability, Customer-Centricity, and Excellence. Innovation fuels our projects, addressing unique client challenges, while a customer-first approach ensures we exceed expectations. We're not just about transactions; we're your trusted partners, committed to reshaping the real estate landscape with excellence at its core.",
      ],
    },

    {
      text: "Resources",
      categories: ["About Us", "Our Projects", "Blog ", "Tutorials", "Support"],
    },
    {
      text: "Contact Us",
      categories: [
        "+234 902 880 0969",
        "mapwayng@gmail.com",
        {
          category: "Twitter",
          link: "https://twitter.com/mapwayng",
        },
        {
          category: "LinkedIn",
          link: "https://www.linkedin.com/company/mapway-real-estate-limited/",
        },
        {
          category: "Instagram",
          link: "https://www.instagram.com/mapwayng",
        },
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
      <div className="container">
        <div className="row">
          {/* About Us (6 columns) */}
          <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
            <div className="mt-3 mx-5 reminders-main d-flex align-items-center justify-content-between">
              <div className="enquiries-main-text-1 ">
                <div className="text-white text-start mt-5">{text[0].text}</div>
                <div className="mt-4">
                  {text[0].categories.map((category, index) => (
                    <div key={index} className="d-block text-start mt-3">
                      {category}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Contact Us (3 columns) */}
          <div className="col-sm-12 col-md-3 col-lg-3 col-xl-3 col-xxl-3">
            <div className="mt-3 mx-5 reminders-main d-flex align-items-center justify-content-between">
              <div className="enquiries-main-text-1 ">
                <div className="text-white text-start mt-5">{text[1].text}</div>
                <div className="mt-4">
                  {text[1].categories.map((category, index) => (
                    <div key={index} className="d-block text-start mt-3">
                      {category}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-md-3 col-lg-3 col-xl-3 col-xxl-3">
            <div className="mt-3 mx-5 reminders-main d-flex align-items-center justify-content-between">
              <div className="enquiries-main-text-1 ">
                <div className="text-white text-start mt-5">{text[2].text}</div>
                <div className="mt-4">
                 
                      {text[2].categories.map((category, index) => {
                    let link = "";

                  if (typeof category === "string") {
                    return (
                      <div key={index} className="d-block text-start mt-3">
                        {category}
                      </div>
                    );
                  }

                  switch (category.category) {
                    case "Twitter":
                      link = category.link;
                      break;
                    case "LinkedIn":
                      link = category.link;
                      break;
                    case "Instagram":
                      link = category.link;
                      break;
                    default:
                      link = "#";
                  }

                    return (
                      <div key={index} className="d-block text-start mt-3">
                        <a
                          href={link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className=""
                          style={{color:  color.lightergrey, textDecoration: "none" }}
                        >
                          {category.category}
                        </a>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
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
                M
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
                &copy; 2023 MapWayNG. All rights reserved
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

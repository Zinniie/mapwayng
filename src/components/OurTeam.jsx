import React from "react";
import Man1 from "../../src/assets/png/man1.png";
import Man2 from "../../src/assets/png/man2.png";
import Man3 from "../../src/assets/png/man3.png";
import Woman1 from "../../src/assets/png/woman1.png";
import Woman2 from "../../src/assets/png/woman2.png";
import Woman3 from "../../src/assets/png/woman4.png";
import { color } from "../constant/color";

const OurTeam = () => {
  const text = [
    {
      src: Man1,
      name: "Phoenix Baker",
      position: "Founder & CEO",
    },
    {
      src: Woman1,
      name: "Lana Steiner",
      position: "Product Manager",
    },
    {
      src: Woman2,
      name: "Demi Wilkinson",
      position: "Engineering Manager",
    },
  ];
   const text2 = [
     {
       src: Man2,
       name: "Drew Cano",
       position: "UX Researcher",
     },
     {
       src: Man3,
       name: "Orlando Diggs",
       position: "Customer Success Lead",
     },
     {
       src: Woman3,
       name: "Natali Craig",
       position: "Product Designer",
     },
   ];
  return (
    <div className="container mt-5">
      <div className="top-contact-content" style={{}}>
        <div
          className="top-contact-text1"
          style={{ color: color.deepPrimary, fontSize: "12px" }}
        >
          We're hiring!
        </div>
        <div className="top-contact-text2 fs-1 mt-2">Meet our team</div>
        <div
          className="top-contact-text3 mt-2"
          style={{ color: color.deepgrey, fontSize: "14px" }}
        >
          Our philosophy is simple - hire a team of diverse, passionate people

        </div>
        <div
          className="top-contact-text3 mt-2"
          style={{ color: color.deepgrey, fontSize: "14px" }}
        >
          and foster a culture that empowers you to do your best work
        </div>
      </div>
      <div
        className="row px-5"
        // style={{
        //   background: color.deepPrimary,
        //   // width:' 80%',
        //   // marginLeft: '100px'
        // }}
      >
        {text.map((item) => (
          <div className="col-sm-12 col-md-6 col-lg-4 col-xl-4 col-xxl-4">
            <div className="mt-3  reminders-main d-flex align-items-center justify-content-center">
              <div className="enquiries-main-text mx-2 ">
                <div className="img mt-5">
                  <img
                    src={item.src}
                    className=""
                    alt={"Map"}
                    style={{
                      width: "380px",
                    }}
                  />
                </div>
                <div className="enquiries-main-text-2 text-start fw-bold fs-5 mt-2">
                  {item.name}
                </div>
                <div
                  className="enquiries-main-text-3 text-start mt-1"
                  style={{ color: color.deepgrey }}
                >
                  {item.position}
                </div>
              </div>
            </div>
          </div>
        ))}
        {text2.map((item) => (
          <div className="col-sm-12 col-md-6 col-lg-4 col-xl-4 col-xxl-4">
            <div className="mt-3  reminders-main d-flex align-items-center justify-content-center">
              <div className="enquiries-main-text mx-2 ">
                <div className="img mt-5">
                  <img
                    src={item.src}
                    className=""
                    alt={"Map"}
                    style={{
                      width: "380px",
                      //   height: '300px'
                    }}
                  />
                </div>
                <div className="enquiries-main-text-2 fw-bold fs-5 text-start mt-2">
                  {item.name}
                </div>
                <div
                  className="enquiries-main-text-3 text-start mt-1"
                  style={{ color: color.deepgrey }}
                >
                  {item.position}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurTeam;

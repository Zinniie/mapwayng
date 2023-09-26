import React from "react";
// import styled from "styled-components";
import { color } from "../constant/color";

function Enquiries() {
  const text = [
    {
      text: "Support",
      paragraph: "Our friendly team is here to help.",
      contact: "support@mapway.com",
    },
    {
      text: "Sales",
      paragraph: "Questions or queries? Get in touch!",
      contact: "sales@mapway.com",
    },
    {
      text: "Phone",
      paragraph: "Mon-Fri from 8am to 5pm",
      contact: "+1(555)000-0000",
    },
  ];
  return (
    <div className="container enquiriescontainer mt-5 ">
      <div
        className="row"
        // style={{
        //   background: color.deepPrimary,
        //   // width:' 80%',
        //   // marginLeft: '100px'
        // }}
      >
        {text.map((item) => (
          <div className="col-sm-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
            <div className="  reminders-main d-flex align-items-center justify-content-center">
              <div className="enquiries-main-text mx-2 ">
                <div className="enquiries-main-text-1 text-center ">
                  {item.text}
                </div>
                <div
                  className="enquiries-main-text-2 text-center mt-2"
                  style={{ color: color.deepgrey, fontSize: "14px" }}
                >
                  {item.paragraph}
                </div>
                <div
                  className="enquiries-main-text-3 text-center mt-2"
                  style={{ color: color.primary, fontSize: "14px" }}
                >
                  {item.contact}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// const Enqu = styled.div`
//   margin-right: 400px;
// `;

export default Enquiries;

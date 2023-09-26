import React from "react";
import { color } from "../constant/color";
import OfficialProfile from "../../src/assets/png/Officialpicture.JPG";

function OurDream() {
  return (
    <div className="container enquiriescontainer mt-5">
      <div className="row justify-content-center">
        <div className="col-sm-12 col-md-5 col-lg-5 col-xl-5 col-xxl-5">
          <div className="reminders-main d-flex align-items-center justify-content-center bg-white shadow rounded p-5">
            <div className="enquiries-main-text mx-2">
              <div className="enquiries-main-text-1 text-start">
                The MapWay Dream
              </div>
              <div
                className="enquiries-main-text-2 text-start mt-2"
                style={{ color: color.deepgrey, fontSize: "14px" }}
              >
                Our vision is to offer long lasting investment opportunities for
                millennials through the creation of real estate solutions.
              </div>
              <ul className="enquiries-main-list mt-3 text-start">
                <li className="enquiries-list-item">
                  We create solution oriented projects that will solve the
                  challenges of our clients.
                </li>
                <li className="enquiries-list-item">
                  We are committed to building your desires with you.
                </li>
                <li className="enquiries-list-item">
                  We Operate with a high level of trust and professionalism.
                </li>
                <li className="enquiries-list-item">
                  We go the extra mile by ensuring all of our services fulfill
                  the heart desires of our clients.
                </li>{" "}
                <li className="enquiries-list-item">
                  We do ordinary things in an extraordinary manner.
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-sm-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
          <div className="reminders-main d-flex align-items-center justify-content-center border border success">
            <div className="enquiries-main-text mx-2">
              <div>
                <img
                  src={OfficialProfile}
                  alt="Slide 1"
                  style={{ width: "300px", height: "300px" }}
                />
                {/* <div style={overlayStyles}>Text Overlay 1</div> */}
              </div>
              <div
                className="enquiries-main-text-2 text-center mt-2"
                style={{ color: color.deepgrey, fontSize: "14px" }}
              >
               Needs work!
              </div>
              <div
                className="enquiries-main-text-3 text-center mt-2"
                style={{ color: color.primary, fontSize: "14px" }}
              >
                need to work on this make it finer
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OurDream;

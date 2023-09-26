import React from "react";
import { color } from "../constant/color";
import OfficialProfile from "../../src/assets/png/Officialpicture.JPG";

function OurDream() {
  return (
    <div className="container enquiriescontainer mt-5">
      <div className="row">
        <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
          <div className="reminders-main d-flex align-items-center justify-content-center bg-white shadow rounded p-5">
            <div className="enquiries-main-text mx-2">
              <div className="enquiries-main-text-1 text-start">
                The MapWay Dream
              </div>
              <div
                className="enquiries-main-text-2 text-start mt-2"
                style={{ color: color.deepgrey, fontSize: "14px" }}
              >
                To become a leading icon in Nigeria and Africa’s real estate
                industry through our commitment to acquiring valuable properties
                easily accessible to just anyone
              </div>
              <ul className="enquiries-main-list mt-3 text-start">
                <li className="enquiries-list-item">
                  We strive for excellence and aim to provide the highest level
                  of service possible.
                </li>
                <li className="enquiries-list-item">
                  We operate with the highest level of honesty, professionalism,
                  and integrity at all times.
                </li>
                <li className="enquiries-list-item">
                  We adopt your own goals as our own: Your success is our
                  success.
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
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
                Questions or queries? Get in touch!
              </div>
              <div
                className="enquiries-main-text-3 text-center mt-2"
                style={{ color: color.primary, fontSize: "14px" }}
              >
                sales@mapway.com
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OurDream;

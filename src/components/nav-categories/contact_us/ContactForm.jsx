import React, { useState } from "react";
import { color } from "../../../constant/color";
import { MdOutlineLocationCity } from "react-icons/md";
import { TbMailOpened } from "react-icons/tb";
import { BiSolidPhoneCall } from "react-icons/bi";
import {
  FaFacebookF,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import styled from "styled-components";

const ContactForm = () => {
  return (
    <div
      className="container contactformcontent mt-5 pt"

      // style={{ width: "30%" }}
    >
      <div className="row g-0" style={{ margin: "40px" }}>
        <div className="col-sm-12 col-md-4 col-lg-4 col-xl-4 col-xxl-1">
          <div
            className="reminders-main d-flex align-items-center justify-content-center "
            style={{ height: "6px" }}
          ></div>
        </div>
        <div
          className="col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6 "
          // style={{ marginLeft: "150px" }}
        >
          <ContactUsForm
            action="https://getform.io/f/d1dea798-a2f8-4af7-9b71-ea61dcabce49"
            method="POST"
            className="reminders-main  align-items-center justify-content-center bg-white shadow  px-5 py-4"
          >
            <div className="top-contact-content " style={{}}>
              {/* <div
                className="top-contact-text1 fw-bold"
                style={{ color: color.deepPrimary, fontSize: "12px" }}
              >
                Contact us
              </div> */}
              {/* <div className="top-contact-text2 fs-1 mt-2">Get in touch</div> */}
              <div
                className="top-contact-text3 "
                style={{ color: color.deepgrey, fontSize: "14px" }}
              >
                We would love to hear from you. Please fill this form.
              </div>
            </div>
            <div
              className=" contactform mt-4"
              style={{ fontSize: "12px", color: color.deepgrey }}
            >
              <div class="row">
                <div class="col">
                  <div className="text-start">First Name</div>
                  <input
                    type="text"
                    name="firstName"
                    class="form-control mt-2"
                    placeholder="First name"
                    aria-label="First name"
                    style={{ fontSize: "12px" }}
                  />
                </div>
                <div class="col">
                  <div className="text-start">Last Name</div>
                  <input
                    type="text"
                    name="lastName"
                    class="form-control mt-2"
                    placeholder="Last name"
                    aria-label="Last name"
                    style={{ fontSize: "12px" }}
                  />
                </div>
              </div>
              <div class="row mt-4">
                <div class="col">
                  <div className="text-start">Email</div>
                  <input
                    type="email"
                    name="email"
                    class="form-control"
                    id="exampleFormControlInput1"
                    placeholder="you@company.com"
                    style={{ fontSize: "12px" }}
                  />
                </div>
                <div class="col">
                  <div className="text-start">Phone Number</div>
                  <input
                    type="phoneNumber"
                    name="phoneNumber"
                    class="form-control"
                    id="exampleFormControlInput1"
                    placeholder="08000 000 000"
                    style={{ fontSize: "12px" }}
                  />
                </div>
              </div>
              <div className="mb-3 mt-4">
                <div
                  for="exampleFormControlTextarea1"
                  className="form-label text-start"
                >
                  Message
                </div>
                <textarea
                  name="message"
                  className="form-control"
                  id="exampleFormControlTextarea1"
                  rows="3"
                ></textarea>
              </div>

              <button
                className="contact-auth mt-4 shadow-lg py-2 px-3 rounded-3 text-white border-0"
                type="submit"
                style={{
                  background: color.tomatored,
                }}
              >
                Send message
              </button>
            </div>
          </ContactUsForm>
        </div>
        <div className="col-sm-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
          <ContactUsDetails
            className="reminders-main d-flex align-items-center justify-content-center "
            style={{ background: color.tomatored, color: "white" }}
          >
            <div className="enquiries-main-text mx-2 py-4">
              <div
                className="enquiries-main-text-1 text-center"
                style={{ color: color.cooltint, fontSize: "14px" }}
              >
                Our Contact Information
              </div>
              <div
                className="enquiries-main-text-2 text-center mt-4"
                style={{ color: color.cooltint, fontSize: "14px" }}
              >
                Questions or queries? Get in touch via any of our communication
                channels with the details below!
              </div>

              <ul
                className="enquiries-main-list mt-5 text-start "
                style={{ listStyle: "none" }}
              >
                <div className="d-flex  " style={{ marginRight: "20px" }}>
                  <div>
                    <li className="mt-2">
                      <MdOutlineLocationCity size={30} />
                    </li>
                    <li className=" ">
                      <TbMailOpened size={30} style={{ marginTop: "28px" }} />
                    </li>
                    <li className="">
                      <BiSolidPhoneCall
                        size={30}
                        style={{ marginTop: "20px" }}
                      />
                    </li>
                  </div>
                  <div style={{ marginLeft: "20px" }}>
                    <li className="enquiries-list-item ">
                      1 Towry Close, Idejo Street, Adeola Odeku, Victoria
                      Island, Lagos
                    </li>
                    <li className="enquiries-list-item mt-4">
                      Email: hello@mapway.com
                    </li>
                    <li
                      className="enquiries-list-item mt-4"
                      style={{ marginTop: "10px" }}
                    >
                      Call: (234) 909 -327 2547
                    </li>
                  </div>
                </div>
                <div
                  className="d-flex align-content-center justify-content-between "
                  style={{ margin: " 66px 120px 0 50px" }}
                >
                  <FaFacebookF /> <FaInstagram />
                  <FaLinkedin />
                  <FaTwitter /> <FaYoutube />
                </div>
              </ul>
            </div>
          </ContactUsDetails>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;

const ContactUsForm = styled.form`
  border-radius: 10px 0 0 10px;
  // height: 300px;
`;


const ContactUsDetails = styled.div`
  border-radius: 0 10px 10px 0;
  // height: 300px;
`;

import React from "react";
import PropertyOne from "../../../../src/assets/png/3185942.jpg";
import styled from "styled-components";
import ContactForm from "./ContactForm";

const ContactUs = () => {
  return (
    <div>
      <TopImage src={PropertyOne} alt="Slide 1" />
      <ImageText>
        Contact Us <br /> Would you like to know more about us, make enquiry, or
        tender a complaint?
        <br /> Then send us a message or contact us on these channels
      </ImageText>

      <ContactForm />
    </div>
  );
};

export default ContactUs;

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
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.8);
`;

import React from "react";
import NavBar from "../../components/NavBar";
import styled from "styled-components";
import { color } from "../../constant/color";
import Enquiries from "../../components/Enquiries";
import Map from "../../assets/png/map.png";
import Locations from "../../components/Locations";
import Mentions from "../../components/Mentions";
import ContactForm from "../../components/nav-categories/contact_us/ContactForm";
import OurTeam from "../../components/OurTeam";
import ImageCarousel from "../../components/CarouselSlider";
import OurDream from "../../components/OurDream";
import Countdown from "../../components/Countup";
import ImageCarouselSlider from "../../components/Slider";
import {
  BrowserRouter,
  Routes,
  Route,
  createBrowserRouter,
} from "react-router-dom";
import AboutUs from "../../components/nav-categories/AboutUs";
import OurProjects from "../../components/nav-categories/our_projects/OurProjects";
import Resources from "../../components/nav-categories/Resources";
import ContactUs from "../../components/nav-categories/contact_us/ContactUs";
import Landing from "../../components/Landing";
import WebLayout from "../../components/WebLayout";
import ProjectDetails from "../../components/nav-categories/our_projects/ProjectDetails";

// function Home() {
//   return (
//     // <div>
//     //   <BrowserRouter>
//     //     <NavBar />

//     //     {/* Define routes for each page */}
//     //     <Routes>
//     //       <Route path="about-us" element={<AboutUs/>} />
//     //       <Route path="/our-projects" element={<OurProjects/>} />
//     //       <Route path="/resources" element={<Resources/>} />
//     //       <Route path="/contact-us" element={<ContactUs/>} />
//     //       {/* Add more routes for other pages as needed */}
//     //     </Routes>
//     //   </BrowserRouter>
//     //   <ImageCarousel />
//     //   <MainContent className="main-content">
//     //     {/* <div className="map-img mt-5">
//     //       <img
//     //         src={Map}
//     //         className="image-fluid map-image"
//     //         alt={"Map"}
//     //         style={{
//     //           width: "1000px",
//     //         }}
//     //       />
//     //     </div> */}
//     //     <OurDream />
//     //     <ImageCarouselSlider />
//     //     <Countdown />
//     //     <Enquiries />
//     //     <Locations />
//     //     {/* <OurTeam /> */}
//     //     <ContactForm />
//     //     {/* <Mentions /> */}
//     //   </MainContent>
//     // </div>
//     <div>

//     </div>
//   );
// }

const router = createBrowserRouter([
  {
    path: "/",
    children: [
      {
        element: <WebLayout />,
        children: [
          { index: true, element: <Landing /> },
          { element: <AboutUs />, path: "/about-us" },
          { element: <Resources />, path: "/resources" },
          { element: <OurProjects />, path: "/our-projects" },
          { element: <ContactUs />, path: "/contact-us" },
          { element: <ProjectDetails />, path: "/project-details" },
        ],
      },
    ],
  },
]);

// const MainContent = styled.div`
//   margin-top: 50px;
// `;

// const TopText = styled.div`
//   margin-top: 150px;
// `;

export default router;

import React from 'react'
import Washington from '../../src/assets/png/washington.png'
import TechCrunch from "../../src/assets/png/techcrunch.png";
import Bloomberg from "../../src/assets/png/bloomberg.png";
import Gizmodo from "../../src/assets/png/gizmodo.png";
import Forbes from "../../src/assets/png/forbes.png";
import { color } from '../constant/color';

const Mentions = () => {
   
  return (
    <div className="container mt-5 pt-5">
      <div
        className="mentions-text"
        style={{ color: color.deepgrey, fontSize: "14px" }}
      >
        We've been mentioned in the press
      </div> 
      <div className="row mentionsrow mt-" style={{ marginLeft: "90px" }}>
        <div className="col-sm-12 col-md-12 col-lg-2 col-xl-2 col-xxl-2">
          <div className="mt-3  ">
            <img
              className="mx-3 "
              src={Washington}
              alt="Washington"
              style={{ width: "250px" }}
            />
          </div>
        </div>
        <div className="col-sm-12 col-md-12 col-lg-2 col-xl-2 col-xxl-2">
          <div className="mt-3  mx-5 ">
            <img
              className="mx-3 "
              src={TechCrunch}
              alt="TechCrunch"
              style={{ width: "220px" }}
            />
          </div>
        </div>
        <div className="col-sm-12 col-md-12 col-lg-2 col-xl-2 col-xxl-2">
          <div className="mt-2  mx-5 ">
            <img
              className="mx-3 "
              src={Bloomberg}
              alt="Bloomberg"
              style={{ width: "190px" }}
            />
          </div>
        </div>
        <div className="col-sm-12 col-md-12 col-lg-2 col-xl-2 col-xxl-2">
          <div className="mt-2  mx-5 ">
            <img
              className="mx-3 "
              src={Gizmodo}
              alt="Gizmodo"
              style={{ width: "220px" }}
            />
          </div>
        </div>
        <div className="col-sm-12 col-md-12 col-lg-2 col-xl-2 col-xxl-2">
          <div className="mt-2   mx-5">
            <img
              className="mx-3 "
              src={Forbes}
              alt="Forbes"
              style={{ width: "150px" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
//  {
//    images.map((item) => (
//      <div key={item.id}>
//        <img src={item.src} alt={item.alt} />
//      </div>
//    ));
//  }

export default Mentions
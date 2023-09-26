import React from 'react'
import { color } from '../constant/color';

function Locations() {
     const address = [
       {
         state: "Melbourne",
         street: "100 Flinders Street",
         city: "Melbourne VIC 3000 AU",
       },
       {
         state: "Sydney",
         street: "100 George Street",
         city: "Sydney NSW 2000 AU",
       },
       {
         state: "Byron Bay",
         street: "100 Jonson Street",
         city: "Byron Bay NSW 2481 AU",
       },
     ];
     const address2 = [
       {
         state: "London",
         street: "100 Oxford Street",
         city: "London W1D 1LL UK",
       },
       {
         state: "San Francisco",
         street: "100 Market Street",
         city: "San Francisco, CA 94105 USA",
       },
       {
         state: "Sweden",
         street: "Drottinggatan 100",
         city: "111 60 Stockholm SE",
       },
     ];
  return (
    <div className="container-fluid mt-5">
      <div
        className="row"
        style={{
          background: color.deepPrimary,
          color: color.lightergrey,
        }}
      >
        <div className="col-sm-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4 mt-5">
          <div className="container w-50 location-text text-start">
            <div className="location-text1" style={{ fontSize: "14px" }}>
              Our locations
            </div>
            <div
              className="location-text1 fs-3 mt-3"
              style={{ color: color.lightgrey }}
            >
              Visit our offices
            </div>
            <div
              className="location-text1 mt-3 "
              style={{ color: color.lightergrey }}
            >
              Find us at these locations.
            </div>
          </div>
        </div>
        <div className="col-sm-12 col-md-4 col-lg-4  col-xl-4 col-xxl-4">
          {address.map((item) => (
            <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
              <div className=" mt-5 reminders-main d-flex align-items-center justify-content-center">
                <div className="enquiries-main-text mx-2 ">
                  <div
                    className="enquiries-main-text-1  fw-bold"
                    style={{ color: color.lightgrey }}
                  >
                    {item.state}
                  </div>
                  <div className="enquiries-main-text-2  mt-2">
                    {item.street}
                  </div>
                  <div className="enquiries-main-text-3  mt-2">{item.city}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="col-sm-12 col-md-4 col-lg-4  col-xl-4 col-xxl-4 ">
          {address2.map((item) => (
            <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
              <div className="mt-5 mb-5 reminders-main d-flex align-items-center justify-content-center">
                <div className="enquiries-main-text mx-2 ">
                  <div
                    className="enquiries-main-text-1  fw-bold"
                    style={{ color: color.lightgrey }}
                  >
                    {item.state}
                  </div>
                  <div className="enquiries-main-text-2  mt-2">
                    {item.street}
                  </div>
                  <div className="enquiries-main-text-3  mt-2">{item.city}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Locations
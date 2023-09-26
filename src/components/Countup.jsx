import React from 'react'
import { color } from '../constant/color';
import CountUp from "react-countup";
import { styled } from 'styled-components';

const Countup = () => {
  const startNumber = 0;
  const endNumber = 100000;
   const startNumberTwo = 0;
   const endNumberTwo = 1000;
    const startNumberThree = 0;
    const endNumberThree = 20;
     const startNumberFour = 0;
     const endNumberFour = 100;
  const duration = 3;

  return (
    <div className="container  mt-5 ">
      <div>Our numbers back our worrds</div>
      <div className="row">
        <div className="col-sm-12 col-md-3 col-lg-3 col-xl-3 col-xxl-3">
          <div className=" d-flex align-items-center justify-content-center">
          
            <NumberContainer>
              <div className="">
                <NumberDisplay>
                  <CountUp
                    start={startNumber}
                    end={endNumber}
                    duration={duration}
                  />
                  +
                </NumberDisplay>
              </div>
              <div className="text-center">Happy Clients</div>
            </NumberContainer>
          </div>
        </div>
        <div className="col-sm-12 col-md-3 col-lg-3 col-xl-3 col-xxl-3">
          <div className=" d-flex align-items-center justify-content-center ">
            <NumberContainer>
              <div className="">
                <NumberDisplay>
                  <CountUp
                    start={startNumberTwo}
                    end={endNumberTwo}
                    duration={duration}
                  />
                </NumberDisplay>
              </div>{" "}
              <div className="text-center">Happy Clients</div>
            </NumberContainer>
          </div>
        </div>
        <div className="col-sm-12 col-md-3 col-lg-3 col-xl-3 col-xxl-3">
          <div className=" d-flex align-items-center justify-content-center">
            <NumberContainer>
              <div className="">
                <NumberDisplay>
                  <CountUp
                    start={startNumberThree}
                    end={endNumberThree}
                    duration={duration}
                  />
                  +
                </NumberDisplay>
              </div>{" "}
              <div className="text-center">Happy Clients</div>
            </NumberContainer>
          </div>
        </div>
        <div className="col-sm-12 col-md-3 col-lg-3 col-xl-3 col-xxl-3">
          <div className=" d-flex align-items-center justify-content-center ">
            <NumberContainer>
              <div className="">
                <NumberDisplay>
                  <CountUp
                    start={startNumberFour}
                    end={endNumberFour}
                    duration={duration}
                  />
                </NumberDisplay>
              </div>
              <div className="text-center">Happy Clients</div>
            </NumberContainer>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Countup

const NumberContainer = styled.div`
  // display: flex;
  // align-items: center;
  // justify-content: center;
  // background-color: white;
  // box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  // border-radius: 10px;
  // padding: 20px;
`;

const NumberDisplay = styled.div`
  font-size: 35px;
`;


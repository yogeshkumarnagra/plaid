import React, { useState, useEffect } from "react";
// import uiImage from "../../../images/uiImage.jpg";
import "./Hero.css";
import { data } from "../../../utils";

export function Hero() {
  const [colorstate, setColorstate] = useState("#222");
  const handleHoverEffect = data.handleHoverEffect;

  useEffect(() => {}, []);
  console.log(colorstate);
  return (
    <>
      <div className="middle-section d-flex">
        <img className="ui-image margin-top" src={"/images/uiImage.jpg"} alt="ui_image" />
        <div className="d-flex-column justify-center align-center">
          <div>
            <h3 className="font-size-xx-large">The Safer way for people</h3>
            <h1 className="font-size-extra-large width-70 font-bold">
              to connect financial accounts to an app
            </h1>
            <div className="d-flex">
              <button
                style={{ backgroundColor: colorstate }}
                className="font-weight-700 p-2 ui-btn-hover btn-bg-white m-right-4 h-fit-content"
                onMouseOver={() => setColorstate(handleHoverEffect())}
                onMouseOut={() => setColorstate("#222")}
              >
                Get Api Keys <i className="angle right icon"></i>
              </button>
              <div className="d-flex-column">
                <p className="m-bottom-1">
                  Start building with Plaid's APIs for free.
                </p>
                <div className="d-flex justify-between">
                  <div className="font-weight-700">Questions?</div>
                  <div className="text-decoration font-weight-700">
                    Contact our sales team
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

import React, { useEffect } from "react";
import "./Hero.css";
import { PrimaryButton } from "../../common";

export function Hero() {
  useEffect(() => {}, []);
  return (
    <>
      <div className="middle-section d-flex">
        <img
          className="ui-image margin-top"
          src={"/images/uiImage.jpg"}
          alt="ui_image"
        />
        <div className="d-flex-column justify-center align-center">
          <div>
            <h3 className="font-size-xx-large">The Safer way for people</h3>
            <h1 className="font-size-extra-large width-70 font-bold">
              to connect financial accounts to an app
            </h1>
            <div className="d-flex">
              <PrimaryButton
                buttonProps={{
                  btnType: "primaryButton",
                  value: "Get Api Keys",
                }}
              />

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

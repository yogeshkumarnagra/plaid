import React, { useState, useEffect } from "react";
import "./Header.css";
import { NavDetailSheet } from "./NavDetailSheet";
import { data } from "../../../utils";
import { PrimaryButton } from "./../primaryButton";

export function Header() {
  const [colorstate, setColorstate] = useState("black");
  const [topicHover, setTopicHover] = useState("");
  const [openNavDetail, setOpenNavDetail] = useState(false);
  // let topicHover = "";
  const headerFields = data.NavFields;
  const handleHoverEffect = data.handleHoverEffect;

  const buttonHoverHandler = (field, index) => {
    if (!openNavDetail) {
      // topicHover = field;
      setTopicHover(field);
      setOpenNavDetail(true);
    }
  };
  const buttonLeaveHandler = (field, index) => {
    if (openNavDetail) {
      setOpenNavDetail(false);
    }
  };
  useEffect(() => {}, []);
  return (
    <div className="navbar">
      <div className="d-flex p-1 justify-between">
        <div className="main-logo-wrapper d-flex justify-around align-center w-12">
          <img
            src={"/images/main_logo.svg"}
            className="main-logo-img"
            alt="plaid-logo"
          />
        </div>
        <div className="d-flex  justify-around p-1 width-50">
          {headerFields &&
            headerFields.map((field, i) => {
              return (
                <div key={i} className="nav-options d-flex  font-weight-700">
                  <button
                    className="nav-button w-fit"
                    onMouseOver={() => buttonHoverHandler(field, i)}
                    onMouseLeave={() => buttonLeaveHandler(field, i)}
                  >
                    {field}
                  </button>
                  <i className="angle down icon"></i>
                  {openNavDetail && (
                    <NavDetailSheet
                      topicProps={{ topicHover: topicHover, topic: field }}
                    >
                      {field}
                    </NavDetailSheet>
                  )}
                </div>
              );
            })}
        </div>
        <div className="d-flex justify-around align-center w-28">
          <div className="font-weight-700 p-5">Log in</div>

          <PrimaryButton
            buttonProps={{
              btnWidth: "",
              btnType: "secButton",
              value: "Get Api Keys",
            }}
          />
        </div>
      </div>
    </div>
  );
}

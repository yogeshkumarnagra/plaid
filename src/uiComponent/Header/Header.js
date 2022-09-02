import React, { useState } from "react";
// import logo from "../../image/logo.jpg";
import main_logo from "../../image/main_logo.svg";
import "./Header.css";
// import { FcExpand } from "react-icons/fc";
import { handleHoverEffect } from "../../utils/RandomColor.js";

function Header() {
  const [colorstate, setColorstate] = useState("black");

  const headerField = [
    "Products",
    "Use cases",
    "For developers",
    "About us",
    "For consumers",
  ];
  return (
    <div className="navbar b-bottom">
      <div className="d-flex p-1 justify-between">
        <div className="main-logo-wrapper d-flex justify-around align-center w-12">
          <img src={main_logo} className="main-logo-img" alt="plaid-logo" />
        </div>
        <div className="d-flex  justify-around p-1 width-50">
          {headerField &&
            headerField.map((headerfield, i) => {
              return (
                <div key={i} className="nav-options d-flex font-weight-700">
                  <div className="w-fit">{headerfield}</div>
                  <i className="angle down icon"></i>
                </div>
              );
            })}
        </div>
        <div className="d-flex justify-around align-center w-28">
          <div className="font-weight-700 p-5">Log in</div>
          <button
            className="font-weight-700 p-5  btn-color h-fit-content"
            style={{ borderColor: colorstate, color: colorstate }}
            onMouseOver={() => setColorstate(handleHoverEffect())}
            onMouseOut={() => setColorstate("#222")}
          >
            Get Api Keys <i className="angle right icon"></i>
          </button>
        </div>
      </div>
    </div>
  );
}
export default Header;

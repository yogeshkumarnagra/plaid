import React, { useState } from "react";
import { data } from "../../../utils";

export const PrimaryButton = ({ buttonProps }) => {
  const { btnWidth, value, btnType } = buttonProps;
  const [colorstate, setColorstate] = useState("#222");
  const handleHoverEffect = data.handleHoverEffect;
  return (
    <>
      <button
        style={
          btnType === "primaryButton"
            ? {
                backgroundColor: colorstate,
                width: btnWidth ? btnWidth : "fit-content",
              }
            : { color: colorstate, border: `1px solid ${colorstate}` }
        }
        className={`font-weight-700 p-2 ui-btn-hover m-right-4 h-fit-content ${btnType}`}
        onMouseOver={() => setColorstate(handleHoverEffect())}
        onMouseOut={() => setColorstate("#222")}
      >
        {value} <i className="angle right icon"></i>
      </button>
    </>
  );
};

export default PrimaryButton;

import React, { useState, useEffect } from "react";
import "./NavDetailSheet.css";

export const NavDetailSheet = ({ topicProps, children }) => {
  const [openDetail, setOpenDetail] = useState(false);
  const { topicHover, topic } = topicProps;
  useEffect(() => {
    if (topicHover === topic) {
      setOpenDetail(true);
      console.log("if", topicProps);
    }
  }, [openDetail]);
  return (
    <>
      <div
        className={`nav-detail-sheet  justify-center w-100 absolute ${
          openDetail ? "d-flex" : ""
        }`}
      >
        {children}
      </div>
    </>
  );
};

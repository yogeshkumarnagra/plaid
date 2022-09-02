import React, { useState, useEffect } from "react";
import "./NavDetailSheet.css";

export const NavDetailSheet = ({ topicProps, childern }) => {
  const [openDetail, setOpenDetail] = useState(false);
  const { topicHover, topic } = topicProps;
  useEffect(() => {
    if (topicHover === topic) {
      setOpenDetail(true);
      console.log("if", topicProps);
    }
  }, [openDetail]);
  console.log("NavDetails", topicProps.topic);
  return (
    <>
      <div
        className={`nav-detail-sheet w-100 absolute ${
          openDetail ? "d-block" : ""
        }`}
      >
        {childern}
      </div>
    </>
  );
};

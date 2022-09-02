import React from "react";
import { ProductsNavIcons } from "../../../../utils/staticData/Nav-IconAssets.js";

export function ProductsNav() {
  return (
    <>
      <div className="d-flex">
        {ProductsNavIcons &&
          ProductsNavIcons.map((icon) => {
            return (
              <div className="image-wrapper">
                <img
                  className="max-width-48"
                  src={`https://plaid.com/_next/image?url=/assets/img/navbar/icon-${icon}.png&w=1920&q=75`}
                  alt={icon}
                />
              </div>
            );
          })}
      </div>
    </>
  );
}

import React from 'react';
import {productsNavIcon} from "../../utils/Nav-IconAssets.js"

function ProductsNav() {
  return (
    <>
    <div>
      {
        productsNavIcon && productsNavIcon.map((icon)=>{
          return (
            <div className="image-wrapper">
              <img className="max-width-48" src={`https://plaid.com/_next/image?url=/assets/img/navbar/icon-${icon}.png&w=1920&q=75`} alt={icon}/>
            </div>
          )
          
        })
      }
    </div>
      </>
  )
}

export default ProductsNav
import React from "react";
import { Header } from "../../component/common/Header";
import { ProductsNav } from "../../component/common/Header/ProductsNav";
import { MiddelSection } from "../../component/HomeComponents";
import { Hero } from "../../component/HomeComponents";

export function Home() {
  return (
    <>
      <Header />
      <Hero />
      <MiddelSection />
      <ProductsNav />
    </>
  );
}

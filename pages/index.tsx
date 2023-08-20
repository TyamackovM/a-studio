import React from "react";
import ServiceSlider from "../components/ServiceSlider";
import { jostReg } from "../fonts/fonts";

export default function index() {
  return (
    <div className="bg-site bg-cover bg-no-repeat h-screen py-36 flex items-center flex-col justify-center">
      {/* <div className="border-2 border-accent bg-transparent p-4 rounded flex flex-col items-center mb-4"> */}
        <h1 className="text-stroke  h1 text-main mb-0 text-8xl">
          <span className="text-accent">A</span>STYLE
        </h1>
        <div className="text-center flex xl:w-[50vw] flex-col mb-4 xl:mb-0">
          <h2 className={`h2 text-main mb-0 text-stroke ${jostReg.className}`}>Студия дизайна</h2>
          <h2 className={`h1 text-main mb-0 text-stroke ${jostReg.className}`}>
            Анжелики Старовойтовой<span className="text-accent">.</span>
          </h2>
        {/* </div> */}
      </div>
      <div className="container mx-auto">
        <ServiceSlider />
      </div>
    </div>
  );
}

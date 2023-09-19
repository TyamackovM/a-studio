"use client";
import React from "react";
import ServiceSlider from "../components/ServiceSlider";
import { jostReg } from "../fonts/fonts";
import { Fade } from "react-awesome-reveal";

export default function index() {
  return (
    <div className="bg-cover bg-no-repeat h-screen py-36 flex items-center flex-col justify-center">
      {/* <div className="border-2 border-accent bg-transparent p-4 rounded flex flex-col items-center mb-4"> */}
      <div
        className="w-0 h-0
  border-l-[120px] border-l-transparent
  border-b-[155px] border-b-white
  border-r-[120px] border-r-transparent"
      ></div>

      <h2 className={`h3 text-white mb-0 mt-[5px] ${jostReg.className}`}>
        современный дизай под ваш бюджет
      </h2>
      <Fade direction="left" delay={1200}>
        <h1 className={`h1 mb-0 text-8xl ${jostReg.className}`}>
          <span className="text-accent">A</span>
          STYLE
        </h1>
      </Fade>
      <div className="text-center flex xl:w-[50vw] flex-col mb-4 xl:mb-0">
        <h2
          className={`h2 text-8xl text-main mb-0 tracking-wider text-stroke ${jostReg.className}`}
        >
          СТУДИЯ
        </h2>
        <h2
          className={`h2 text-8xl text-main mb-0 text-stroke ${jostReg.className}`}
        >
          ДИЗАЙНА
        </h2>
        <h2 className={`h1 text-5xl text-white mb-0 ${jostReg.className}`}>
          Анжелики Старовойтовой
        </h2>
        {/* <h2 className={`h3 text-main mb-0 text-stroke ${jostReg.className}`}>
          современный дизай под ваш бюджет
        </h2> */}
        {/* </div> */}
      </div>
      {/* <div className="container mx-auto">
        <ServiceSlider />
      </div> */}
    </div>
  );
}

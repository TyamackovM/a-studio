"use client";
import React from "react";
import ServiceSlider from "../components/ServiceSlider";
import { jostReg } from "../fonts/fonts";
import { Fade } from "react-awesome-reveal";

export default function index() {
  return (
    <div className="bg-cover bg-no-repeat py-16 sm:py-16 md:py-16 lg:py-20 xl:py-36 flex items-center flex-col justify-center">
      <div
        className="w-0 h-0
  border-l-[120px] max-md:border-l-[80px] border-l-transparent
  border-b-[210px] max-md:border-b-[130px] border-b-white
  border-r-[120px] max-md:border-r-[80px] border-r-transparent"
      ></div>

      <h2
        className={`h3 max-md:text-[11px] text-white mb-0 mt-[5px] ${jostReg.className}`}
      >
        современный дизай под ваш бюджет
      </h2>
      <Fade direction="left" delay={1700}>
        <h1 className={`h1 mb-0 text-8xl max-md:text-6xl ${jostReg.className}`}>
          <span className="text-accent">A</span>
          STYLE
        </h1>
      </Fade>
      <div className="text-center flex xl:w-[50vw] flex-col mb-4 xl:mb-0">
        <h2
          className={`h2 text-8xl max-md:text-6xl text-main mb-0 tracking-wider text-stroke ${jostReg.className}`}
        >
          СТУДИЯ
        </h2>
        <h2
          className={`h2 text-8xl max-md:text-6xl text-main mb-0 text-stroke ${jostReg.className}`}
        >
          ДИЗАЙНА
        </h2>
        <Fade direction="up" delay={2500}>
          <h2
            className={`h1 text-5xl max-md:text-3xl text-white mb-0 ${jostReg.className}`}
          >
            Анжелики Старовойтовой
          </h2>
        </Fade>
      </div>
    </div>
  );
}

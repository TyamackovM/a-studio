import React from "react";
import ServiceSlider from "../components/ServiceSlider";

export default function index() {
  return (
    <div className="h-screen py-36 flex items-center flex-col justify-center">
      <div className="">Logo</div>
      <div className="text-center flex xl:w-[50vw] flex-col mb-4 xl:mb-0">
        <h2 className="h2 mb-0">Студия дизайна</h2>
        <h1 className="h1">
          Анжелики Старовойтовой<span className="text-accent">.</span>
        </h1>
      </div>
      <div className="container mx-auto">
        <ServiceSlider />
      </div>
    </div>
  );
}
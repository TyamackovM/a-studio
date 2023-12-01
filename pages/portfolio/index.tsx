"use client";

import { Swiper, SwiperSlide } from "swiper/react";

import { Image } from "antd";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import { EffectCoverflow, Pagination } from "swiper/modules";

export const projectsData = [
  {
    name: "Развлекательный центр 1700㎡",
    images: ["/kos1.jpg", "/kos2.jpg", "/kos3.jpg", "/kos4.jpg"],
  },
  {
    name: "Ресторан 250㎡",
    images: ["/res1.jpg", "/res3.jpg", "/res2.jpg", "/res4.jpg"],
  },
  {
    name: "2-комнатная квартира 60㎡",
    images: ["/kv1.jpg", "/kv6.jpg", "/kv3.jpg", "/kv4.jpg"],
  },
  {
    name: "2-комнатная квартира 64㎡",
    images: ["/k2-1.jpg", "/k2-2.jpg", "/k2-3.jpg", "/k2-4.jpg"],
  },
  {
    name: "2-комнатная квартира 73㎡",
    images: ["/k3-1.jpg", "/k3-2.jpg", "/k3-3.jpg", "/k3-4.jpg"],
  },
];

export default function index() {
  return (
    <div className="flex justify-start items-center max-xl:mt-[30px] xl:h-screen">
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={2}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="max-xl:w-[100%] w-[90%] h-[610px]"
      >
        {projectsData?.map((item, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="text-center max-sm:text-[12px] sm:text-[14px] md:text-[16px] lg:text-[18px] xl:text-[20px] text-[22px] mb-[10px] max-xl:w-[100%] w-[100%]">
                {item.name}
              </div>
              <div className="grid max-lg:grid-cols-1 grid-cols-2 gap-[5px] max-xl:w-[100%] w-[100%]">
                {item.images?.map((image, index) => (
                  <div
                    className="max-lg:w-[100%] lg:w-[100%] max-lg:h-[130px] w-[100%] h-[250px] relative"
                    key={index}
                  >
                    <Image
                      className="w-[100%] h-[100%] object-cover"
                      src={image}
                      alt="image"
                      width={"100%"}
                      height={"100%"}
                      preview={{
                        style: {
                          backgroundColor: "rgba(0, 0, 0, 0.9)",
                        },
                        toolbarRender: () => null,
                      }}
                    />
                  </div>
                ))}
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}

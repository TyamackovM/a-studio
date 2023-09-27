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
    description:
      "В стиле авангард очень развита идея символизма, так как это не просто стиль, а целая жизненная философия новых взглядов. Хотя авангард отрицает общепринятое понимание гармоничной композиции. В его концепции изначально заложена идея противоречивости и несогласия со стереотипным восприятием интерьера.",
  },
  {
    name: "Ресторан 250㎡",
    images: ["/res1.jpg", "/res3.jpg", "/res2.jpg", "/res4.jpg"],
    description:
      "Стиль ампир привносит в интерьер ощущение торжественности и готовности к празднику. В помещении должен быть всегда идеальный порядок. Небрежно расставленные или разбросанные вещи привносят в оформление диссонанс. Дизайнерское направление не понравится тем, кто любит часто двигать мебель. Каждый предмет находится на своем, четко зафиксированном месте.",
  },
  {
    name: "2-комнатная квартира 60㎡",
    images: ["/kv1.jpg", "/kv2.jpg", "/kv3.jpg", "/kv4.jpg"],
    description:
      "Стиль ампир привносит в интерьер ощущение торжественности и готовности к празднику. В помещении должен быть всегда идеальный порядок. Небрежно расставленные или разбросанные вещи привносят в оформление диссонанс. Дизайнерское направление не понравится тем, кто любит часто двигать мебель. Каждый предмет находится на своем, четко зафиксированном месте.",
  },
];

export default function index() {
  return (
    <div className="flex justify-center items-center h-screen">
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
        className="max-md:w-[100%] w-[90%] h-[610px]"
      >
        {projectsData?.map((item, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="text-center max-sm:text-[12px] md:text-[13px] text-[22px] mb-[10px] max-md:w-[100%] w-[800px]">
                {item.name}
              </div>
              <div className="grid max-md:grid-cols-1 grid-cols-2 gap-[5px] max-md:w-[100%] w-[800px]">
                {item.images?.map((image, index) => (
                  <div
                    className="max-md:w-[100%] max-md:h-[130px] w-[397.5px] h-[250px] relative"
                    key={index}
                  >
                    <Image
                      className="w-[100%] h-[100%] object-cover"
                      src={image}
                      alt="image"
                      width={"100%"}
                      height={"100%"}
                      preview={{ toolbarRender: () => null }}
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

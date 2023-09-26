import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import { EffectCoverflow, Pagination } from "swiper/modules";

export const projectsData = [
  {
    name: "Развлекательный центр",
    images: ["/kos1.jpg", "/kos2.jpg", "/kos3.jpg"],
    description:
      "В стиле авангард очень развита идея символизма, так как это не просто стиль, а целая жизненная философия новых взглядов. Хотя авангард отрицает общепринятое понимание гармоничной композиции. В его концепции изначально заложена идея противоречивости и несогласия со стереотипным восприятием интерьера.",
  },
  {
    name: "Ресторан",
    images: ["/res1.jpg", "/res2.jpg", "/res3.jpg"],
    description:
      "Стиль ампир привносит в интерьер ощущение торжественности и готовности к празднику. В помещении должен быть всегда идеальный порядок. Небрежно расставленные или разбросанные вещи привносят в оформление диссонанс. Дизайнерское направление не понравится тем, кто любит часто двигать мебель. Каждый предмет находится на своем, четко зафиксированном месте.",
  },
  {
    name: "Ресторан",
    images: ["/res1.jpg", "/res2.jpg", "/res3.jpg"],
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
        className="w-[90%]"
      >
        {projectsData?.map((item, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="grid grid-cols-2 w-[800px]">
                {item.images?.map((image, index) => (
                  <div className="w-[400px] h-[300px] relative" key={index}>
                    <img
                      className="w-full h-full object-cover"
                      src={image}
                      alt="image"
                    />
                  </div>
                ))}
                <div className="w-[400px] h-[300px] bg-white text-black">
                  <span>{item.name}</span>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}

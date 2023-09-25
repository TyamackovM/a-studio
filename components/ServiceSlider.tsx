// import swiper react components
import { Swiper, SwiperSlide } from "swiper/react";

// import swiper styles
import "swiper/css";
// import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/effect-cube";

// icons
import {
  RxCrop,
  RxDesktop,
  RxPencil2,
  RxReader,
  RxRocket,
  RxArrowTopRight,
} from "react-icons/rx";

import { FaArrowPointer } from "react-icons/fa6";

// import required modules
import { EffectCube, Pagination } from "swiper/modules";

// service data
export const serviceData = [
  {
    name: "Авангард",
    image: `bg-[url("/avg1.jpg")]`,
    description:
      "В стиле авангард очень развита идея символизма, так как это не просто стиль, а целая жизненная философия новых взглядов. Хотя авангард отрицает общепринятое понимание гармоничной композиции. В его концепции изначально заложена идея противоречивости и несогласия со стереотипным восприятием интерьера.",
  },
  {
    name: "Ампир",
    image: `bg-[url("/amp4.jpg")]`,
    description:
      "Стиль ампир привносит в интерьер ощущение торжественности и готовности к празднику. В помещении должен быть всегда идеальный порядок. Небрежно расставленные или разбросанные вещи привносят в оформление диссонанс. Дизайнерское направление не понравится тем, кто любит часто двигать мебель. Каждый предмет находится на своем, четко зафиксированном месте.",
  },
  {
    name: "Английский",
    image: `bg-[url("/eng1.jpg")]`,
    description:
      "Английский интерьер подойдет всем, кому по душе тепло и уют родного дома. Тем, кто хранит на полках фотографии родных, а за стеклянными дверцами шкафа - фамильный сервиз. Интерьер помещения в английском стиле позволит отвлечься от суета и спешки, которая так несвойственна британцам. Подойдет тем, кто любит симметрию и порядок, а также ценителям качества - дорогих материалов и мебели.",
  },
];

const ServiceSlider = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <Swiper
        effect={"cube"}
        grabCursor={true}
        cubeEffect={{
          shadow: true,
          slideShadows: true,
          shadowOffset: 20,
          shadowScale: 0.94,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[EffectCube, Pagination]}
        className="h-[650px] w-[900px]"
      >
        {serviceData.map((item, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="text-center text-[32px] mb-[15px]">
                {item.name}
              </div>
              <div
                className={`bg-cover ${item.image} h-[400px] bg-no-repeat bg-center cursor-pointer transition-all duration-300`}
              ></div>
              <div className="text-white text-[18px] h-[150px] flex justify-center items-center leading-normal text-center">
                {item.description}
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default ServiceSlider;

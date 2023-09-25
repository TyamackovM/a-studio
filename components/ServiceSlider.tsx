// import swiper react components
import { Swiper, SwiperSlide } from "swiper/react";

// import swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

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
import { FreeMode, Pagination } from "swiper/modules";

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
    <Swiper
      breakpoints={{
        320: {
          slidesPerView: 1,
          spaceBetween: 15,
        },

        640: {
          slidesPerView: 2,
          spaceBetween: 15,
        },
      }}
      freeMode={true}
      pagination={{
        clickable: true,
      }}
      modules={[FreeMode, Pagination]}
      className="h-[240px] sm:h-[340px]"
    >
      {serviceData.map((item, index) => {
        return (
          <SwiperSlide key={index}>
            <div className="text-center">{item.name}</div>
            <div
              className={`bg-cover ${item.image} bg-no-repeat bg-center text-main h-max rounded-lg px-6 py-8 flex sm:flex-col gap-x-6 sm:gap-x-0 group cursor-pointer hover:bg-[rgba(253,135,61,0.7)] transition-all duration-300`}
            >
              {/* icon */}
              {/* <div className="text-4xl text-accent mb-4">{item.icon}</div> */}
              {/* title & desc */}
              <div className="mb-8">
                {/* <div className="mb-2 text-lg ">{item.title}</div> */}
                {/* <p className="max-w-[350px] leading-normal text-main ">
                  {item.description}
                </p> */}
              </div>
              {/* arrow */}
              <div className="text-3xl self-end">
                <FaArrowPointer className="group-hover:rotate-90 group-hover:text-accent transition-all duration-500" />
              </div>
            </div>
            <div className="text-white! max-w-[350px] leading-normal">
              {item.description}
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default ServiceSlider;

import { MdArchitecture } from "react-icons/md";
import { BiLogoVisualStudio, BiSolidKey } from "react-icons/bi";
import { SiBlueprint } from "react-icons/si";
import { RiGuideFill, RiSketching } from "react-icons/ri";
import {
  CiHome,
  CiRead,
  CiUnlock,
  CiCrop,
  CiMountain1,
  CiDesktop,
  CiViewTimeline,
} from "react-icons/ci";

export default function index() {
  return (
    <div className="w-full h-full flex flex-col items-center md:justify-center">
      <div className="w-full md:h-1/4 flex flex-col md:flex-row items-center justify-center">
        <div className="bg-[#ff6219] h-max md:rounded-l-lg w-screen md:w-1/5 md:h-full flex flex-col items-center justify-evenly md:p-8">
          <span className="mt-[10px] md:mt-0">Общая площадь, м2:</span>
          <input className="w-[100px] md:w-3/5 text-white xl:text-4xl lg:text-2xl md:text-xl sm:text-l text-center border-b-2 border-white-500 border-t-0 border-l-0 border-r-0 rounded-none bg-transparent outline-none resize-none"></input>
          <div className="relative flex">
            <div className="hidden md:block absolute h-[80px] border-l-[3px] border-dotted border-white left-1/2 top-0 transform -translate-x-1/2 mb-4"></div>
            <span className="hidden md:block absolute top-20 left-1/2 transform -translate-x-1/2 whitespace-nowrap">
              1. Какая общая площадь?
            </span>
          </div>
        </div>
        <div className="bg-[#ff6219] w-screen md:w-2/6 md:h-full flex flex-col items-center justify-evenly md:p-8">
          <span className="mt-[10px] md:mt-0">Объект:</span>
          <select className="w-[140px] md:w-1/2 text-white-500 bg-transparent text-[16px] text-4xl xl:text-3xl lg:text-2xl md:text-xl sm:text-l text-center border-b-2 border-c66900 border-t-0 border-l-0 border-r-0 border-rounded-0 outline-none resize-none whitespace-normal overflow-ellipsisalign-middle whitespace-nowrap select-auto cursor-pointer my-0 border-1 border-solid border-white-500">
            <option value="option1">Выберите...</option>
            <option value="option2">Комната</option>
            <option value="option3">1-к квартира</option>
            <option value="option4">2-к квартира</option>
            <option value="option5">3-к квартира</option>
            <option value="option6">Коттедж</option>
          </select>
          <div className="relative flex">
            <div className="hidden md:block absolute h-[80px] border-l-[3px] border-dotted border-white left-1/2 top-0 transform -translate-x-1/2 mb-4"></div>
            <div className="hidden md:block absolute top-20 left-1/2 transform -translate-x-1/2 whitespace-nowrap">
              2. У вас квартира или дом?
            </div>
          </div>
        </div>
        <div className="bg-[#ff6219] md:rounded-r-lg w-screen md:w-1/5 md:h-full flex flex-col items-center justify-evenly md:p-8">
          <span className="hidden md:inline">Готово</span>
          <button className="mt-[20px] mb-[20px] md:mt-0 md:mb-0 border-2 text-[16px] lg:text-[22px] md:text-[20px] rounded px-[10px] py-[2px] sm:px-[35px] sm:py-[8px]">
            Рассчитать
          </button>
          <div className="relative flex">
            <div className="hidden md:block absolute h-[80px] border-l-[3px] border-dotted border-white left-1/2 top-0 transform -translate-x-1/2 mb-4"></div>
            <span className="hidden md:block absolute top-20 left-1/2 transform -translate-x-1/2 whitespace-nowrap">
              3. Жмите!
            </span>
          </div>
        </div>
      </div>
      <span className="text-[24px] md:text-[32px] mt-[20px] md:mt-[120px]">
        ПРАЙС ЛИСТ
      </span>
      <div className="md:w-4/5 grid grid-cols-2 md:grid-cols-3 grid-rows-2 align-center gap-[30px] mt-[10px] md:mt-[30px]">
        <div className="flex flex-col items-center md:justify-center">
          <div className="text-[60px] md:text-[80px] text-accent mb-4">
            <CiDesktop className="iconSmall" />
          </div>
          <span className="text-center text-[14px] md:text-[16px]">
            Проектирование 1500 ₽/㎡
          </span>
        </div>
        <div className="flex flex-col items-center md:justify-center">
          <div className="text-[60px] md:text-[80px] text-accent mb-4">
            <CiHome className="iconSmall" />
          </div>
          <span className="text-center text-[14px] md:text-[16px]">
            Визуализация дизайн проекта 1500 ₽/㎡
          </span>
        </div>
        <div className="flex flex-col items-center md:justify-center">
          <div className="text-[60px] md:text-[80px] text-accent mb-4">
            <CiViewTimeline className="iconSmall" />
          </div>
          <span className="text-center text-[14px] md:text-[16px]">
            Эскизная часть проекта 1500 ₽/㎡
          </span>
        </div>
        <div className="flex flex-col items-center md:justify-center">
          <div className="text-[60px] md:text-[80px] text-accent mb-4">
            <CiUnlock className="iconSmall" />
          </div>
          <span className="text-center text-[14px] md:text-[16px]">
            Дизай проект под ключ 1500 ₽/㎡
          </span>
        </div>
        <div className="flex flex-col items-center md:justify-center">
          <div className="text-[60px] md:text-[80px] text-accent mb-4">
            <CiCrop className="iconSmall" />
          </div>
          <span className="text-center text-[14px] md:text-[16px]">
            Обмерочный чертеж 100 ₽/㎡
          </span>
        </div>
        <div className="flex flex-col items-center md:justify-center">
          <div className="text-[60px] md:text-[80px] text-accent mb-4">
            <CiMountain1 className="iconSmall" />
          </div>
          <span className="text-center text-[14px] md:text-[16px]">
            Авторский надзор 50000 ₽/мес
          </span>
        </div>
      </div>
    </div>
  );
}

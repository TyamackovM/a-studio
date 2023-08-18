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
    <div className="w-full h-full flex flex-col items-center justify-center">
      <div className="w-full h-1/4 flex flex-row items-center justify-center">
        <div className="bg-[#ff6219] rounded-l-lg w-1/5 h-full flex flex-col items-center justify-evenly p-8">
          <span>Общая площадь, м2:</span>
          <input className=" w-3/5 text-white text-4xl text-center border-b-2 border-white-500 border-t-0 border-l-0 border-r-0 rounded-none bg-transparent outline-none resize-none"></input>
          <div className="relative flex">
            <div className="absolute h-[80px] border-l-[3px] border-dotted border-white left-1/2 top-0 transform -translate-x-1/2 mb-4"></div>
            <span className="absolute top-20 left-1/2 transform -translate-x-1/2 whitespace-nowrap">
              1. Какая общая площадь?
            </span>
          </div>
        </div>
        <div className="bg-[#ff6219] w-2/6 h-full flex flex-col items-center justify-evenly p-8">
          <span>Объект:</span>
          <select className="w-1/2 text-black">
            <option value="option1">Выберите...</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
            <option value="option4">Option 4</option>
            <option value="option5">Option 5</option>
          </select>
          <div className="relative flex">
            <div className="absolute h-[80px] border-l-[3px] border-dotted border-white left-1/2 top-0 transform -translate-x-1/2 mb-4"></div>
            <div className="absolute top-20 left-1/2 transform -translate-x-1/2 whitespace-nowrap">
              2. У вас квартира или дом?
            </div>
          </div>
        </div>
        <div className="bg-[#ff6219] rounded-r-lg w-1/5 h-full flex flex-col items-center justify-evenly p-8">
          <span>Готово</span>
          <button>Рассчитать</button>
          <div className="relative flex">
            <div className="absolute h-[80px] border-l-[3px] border-dotted border-white left-1/2 top-0 transform -translate-x-1/2 mb-4"></div>
            <span className="absolute top-20 left-1/2 transform -translate-x-1/2 whitespace-nowrap">
              3. Жмите!
            </span>
          </div>
        </div>
      </div>
      <span className="text-[32px] mt-[120px]">ПРАЙС ЛИСТ</span>
      <div className="w-4/5 grid grid-cols-3 grid-rows-2 align-center gap-[30px] mt-[30px]">
        <div className="flex flex-col items-center justify-center">
          <div className="text-[80px] text-accent mb-4">
            <CiDesktop />
          </div>
          <span>Проектирование 1500 р/м2</span>
        </div>
        <div className="flex flex-col items-center justify-center">
          <div className="text-[80px] text-accent mb-4">
            <CiHome />
          </div>
          <span>Визуализация дизайн проекта 1500 р/м2</span>
        </div>
        <div className="flex flex-col items-center justify-center">
          <div className="text-[80px] text-accent mb-4">
            <CiViewTimeline />
          </div>
          <span>Эскизная часть проекта 1500 р/м2</span>
        </div>
        <div className="flex flex-col items-center justify-center">
          <div className="text-[80px] text-accent mb-4">
            <CiUnlock />
          </div>
          <span>Дизай проект под ключ 1500 р/м2</span>
        </div>
        <div className="flex flex-col items-center justify-center">
          <div className="text-[80px] text-accent mb-4">
            <CiCrop />
          </div>
          <span>Обмерочный чертеж 100 р/м2</span>
        </div>
        <div className="flex flex-col items-center justify-center">
          <div className="text-[80px] text-accent mb-4">
            <CiMountain1 />
          </div>
          <span>Авторский надзор 50000 р/мес</span>
        </div>
      </div>
    </div>
  );
}

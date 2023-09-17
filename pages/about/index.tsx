import { jostReg } from "../../fonts/fonts";

import { IoIosMail, IoMdResize, IoMdCube, IoMdColorFill } from "react-icons/io";
import { PiCoffeeFill, PiDoorOpenFill } from "react-icons/pi";
import { HiArrowLongRight } from "react-icons/hi2";
import { FaCompassDrafting } from "react-icons/fa6";
import { MdChair, MdDone, MdImagesearchRoller } from "react-icons/md";

export const firstIcons = [
  { title: "Свяжитесь с нами!", icon: <IoIosMail size={60} /> },
  { title: "Первая встреча", icon: <PiCoffeeFill size={60} /> },
  { title: "Обмеры объекта", icon: <IoMdResize size={60} /> },
  { title: "Планировка", icon: <PiDoorOpenFill size={60} /> },
  { title: "3D", icon: <IoMdCube size={60} /> },
];

export const secondIcons = [
  { title: "Чертежи", icon: <FaCompassDrafting size={60} /> },
  { title: "Подбор материалов", icon: <IoMdColorFill size={60} /> },
  { title: "Подбор мебели", icon: <MdChair size={60} /> },
  { title: "Проект готов!", icon: <MdDone size={60} /> },
  { title: "Начало ремонта", icon: <MdImagesearchRoller size={60} /> },
];

export default function index() {
  return (
    <div className="h-screen py-36 flex items-center flex-col justify-center">
      <h1 className={`h1 ${jostReg.className}`}>ХОД ДИЗАЙН-ПРОЕКТА</h1>
      <h2 className={`h2 p-6 ${jostReg.className}`}>Схема разработки</h2>
      <div className="flex justify-between mb-16 icon-row">
        {firstIcons.map((circle, index) => (
          <>
            <div
              key={index}
              className="flex flex-col items-center justify-center icon-container"
            >
              <div className="bg-white rounded-full p-4 text-main mb-2 w-20 h-20 flex items-center justify-center">
                {circle.icon}
              </div>
              <span className="text-center icon-text">{circle.title}</span>
            </div>
            {index !== firstIcons.length - 1 && (
              <HiArrowLongRight className="arrow-icon text-accent" size={40} />
            )}
          </>
        ))}
      </div>
      <div className="flex justify-between icon-row">
        {secondIcons.map((circle, index) => (
          <>
            <div
              key={index}
              className="flex flex-col items-center justify-center icon-container"
            >
              <div className="bg-white rounded-full p-4 text-main mb-2 w-20 h-20 flex items-center justify-center">
                {circle.icon}
              </div>
              <span className="text-center icon-text">{circle.title}</span>
            </div>
            {index !== secondIcons.length - 1 && (
              <HiArrowLongRight className="arrow-icon text-accent" size={40} />
            )}
          </>
        ))}
      </div>
    </div>
  );
}

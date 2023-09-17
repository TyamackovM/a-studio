import { useState } from "react";
import {
  CiHome,
  CiRead,
  CiUnlock,
  CiCrop,
  CiMountain1,
  CiDesktop,
  CiViewTimeline,
  CiWarning,
} from "react-icons/ci";

const calcData = [
  {
    name: "Проектирование 1500 ₽/㎡",
    icon: <CiDesktop className="iconSmall" />,
  },
  {
    name: "Визуализация дизайн проекта 1500 ₽/㎡",
    icon: <CiHome className="iconSmall" />,
  },
  {
    name: "Эскизная часть проекта 1500 ₽/㎡",
    icon: <CiViewTimeline className="iconSmall" />,
  },
  {
    name: "Дизай проект под ключ 1500 ₽/㎡",
    icon: <CiUnlock className="iconSmall" />,
  },
  {
    name: "Обмерочный чертеж 100 ₽/㎡",
    icon: <CiCrop className="iconSmall" />,
  },
  {
    name: "Авторский надзор 50000 ₽/мес",
    icon: <CiMountain1 className="iconSmall" />,
  },
];

export default function index() {
  const [formData, setFormData] = useState<{ space: string; type: string }>({
    space: "",
    type: "",
  });

  const [warning, setWarning] = useState<boolean>(false);
  const [buttonClicked, setButtonClicked] = useState<boolean>(false);
  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData((prevData) => ({
      ...prevData,
      [event.target.name]: event.target.value,
    }));
  };
  const handleClick = () => {
    if (!formData.space || !formData.type || !Number(formData.space)) {
      setWarning(true);
      setTimeout(() => {
        setWarning(false);
      }, 2000);
      setButtonClicked(false);
    } else {
      setButtonClicked(true);
    }
  };
  const handleBack = () => {
    setButtonClicked(false);
  };
  return (
    <>
      {warning ? (
        <div className="opacity-100 flex rounded border-2 border-white-500 flex-row items-center justify-center mt-[10px] p-[10px] bg-[#ff6219] w-auto absolute top-0 left-1/2 transform -translate-x-1/2">
          <CiWarning className="text-[40px]" />
          <span className="text-center">
            {!Number(formData.space)
              ? "Введите общую площадь"
              : !formData.type
              ? "Введите тип объекта"
              : "Введите общую площадь"}
          </span>
        </div>
      ) : (
        ""
      )}
      <div
        className={`w-full ${
          warning ? "opacity-20" : "opacity-100"
        } h-full flex flex-col items-center lg:justify-center`}
      >
        {!buttonClicked ? (
          <div className="w-full md:h-1/4 flex flex-col md:flex-row items-center justify-center">
            <div className="bg-[#ff6219] bg-opacity-80 lg:bg-opacity-100 lg:rounded-l-lg w-screen lg:w-1/5 md:h-full flex flex-col items-center justify-evenly md:p-8">
              <span className="mt-[10px] md:mt-0">Площадь, ㎡ :</span>
              <input
                className="w-[100px] md:w-3/5 text-white xl:text-4xl lg:text-2xl md:text-xl sm:text-l text-center border-b-2 border-white-500 border-t-0 border-l-0 border-r-0 rounded-none bg-transparent outline-none resize-none"
                value={formData.space}
                onChange={handleChange}
                name="space"
              ></input>
              <div className="relative flex">
                <div className="hidden md:block absolute h-[80px] border-l-[3px] border-dotted border-white left-1/2 top-0 transform -translate-x-1/2 mb-4"></div>
                <span className="hidden md:block absolute top-20 left-1/2 transform -translate-x-1/2 whitespace-nowrap">
                  1. Какая общая площадь?
                </span>
              </div>
            </div>
            <div className="bg-[#ff6219] bg-opacity-80 lg:bg-opacity-100 w-screen lg:w-2/6 md:h-full flex flex-col items-center justify-evenly md:p-8">
              <span className="mt-[10px] md:mt-0">Объект:</span>
              <select
                name="type"
                onChange={handleChange}
                value={formData.type}
                className="w-[120px]  justify-center md:w-[140px] lg:w-1/2 text-white-500 bg-transparent text-[16px] text-4xl xl:text-3xl lg:text-2xl md:text-xl sm:text-l text-center border-b-2 border-c66900 border-t-0 border-l-0 border-r-0 border-rounded-0 outline-none resize-none whitespace-normal overflow-ellipsisalign-middle whitespace-nowrap select-auto cursor-pointer my-0 border-1 border-solid border-white-500"
              >
                <option className="text-center" value="">
                  Выберите...
                </option>
                <option value="Комнаты">Комната</option>
                <option value="Однокомнатной квартиры">1-к квартира</option>
                <option value="Двухкомнатной квартиры">2-к квартира</option>
                <option value="Трехкомнатной квартиры">3-к квартира</option>
                <option value="Четырехкомнатной квартира">4-к квартира</option>
                <option value="Коттеджа">Коттедж</option>
              </select>
              <div className="relative flex">
                <div className="hidden md:block absolute h-[80px] border-l-[3px] border-dotted border-white left-1/2 top-0 transform -translate-x-1/2 mb-4"></div>
                <div className="hidden md:block absolute top-20 left-1/2 transform -translate-x-1/2 whitespace-nowrap">
                  2. У вас квартира или дом?
                </div>
              </div>
            </div>
            <div className="bg-[#ff6219] bg-opacity-80 lg:bg-opacity-100 lg:rounded-r-lg w-screen lg:w-1/5 md:h-full flex flex-col items-center justify-evenly md:p-8">
              <span className="hidden md:inline">Готово</span>
              <button
                onClick={handleClick}
                className="mt-[20px] mb-[20px] md:mt-0 md:mb-0 border-2 text-[16px] lg:text-[22px] md:text-[20px] rounded px-[10px] py-[2px] sm:px-[35px] sm:py-[8px]"
              >
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
        ) : formData.space && formData.type && buttonClicked ? (
          <div className="w-full md:h-1/4  flex flex-col mt-[10px] items-center justify-evenly space-y-2 max-sm:space-y-0 md:space-y-0 md:space-x-4">
            <div className="text-center text-[42px] max-sm:text-[32px]">
              Дизайн-проект
            </div>
            <div className="text-[34px] max-sm:text-[24px]">
              {formData.type}
            </div>
            <div className="text-[34px] max-sm:text-[24px]">
              {formData.space} м2
            </div>
            <div className="text-[54px] max-sm:text-[42px]">
              {+formData.space * 1500} ₽
            </div>
            <div>
              <button
                onClick={handleBack}
                className="text-white mr-[10px] font-semibold py-2 px-4 rounded-full hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
              >
                Назад
              </button>
              <button className="bg-[#ff6219] text-white font-semibold py-2 px-4 rounded-full hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
                Быстрый заказ
              </button>
            </div>
          </div>
        ) : (
          <div className="w-full md:h-1/4 flex flex-col md:flex-row items-center justify-center">
            <div className="bg-[#ff6219] bg-opacity-80 lg:bg-opacity-100 lg:rounded-l-lg w-screen lg:w-1/5 md:h-full flex flex-col items-center justify-evenly md:p-8">
              <span className="mt-[10px] md:mt-0">Площадь, ㎡ :</span>
              <input
                className="w-[100px] md:w-3/5 text-white xl:text-4xl lg:text-2xl md:text-xl sm:text-l text-center border-b-2 border-white-500 border-t-0 border-l-0 border-r-0 rounded-none bg-transparent outline-none resize-none"
                value={formData.space}
                onChange={handleChange}
                name="space"
              ></input>
              <div className="relative flex">
                <div className="hidden md:block absolute h-[80px] border-l-[3px] border-dotted border-white left-1/2 top-0 transform -translate-x-1/2 mb-4"></div>
                <span className="hidden md:block absolute top-20 left-1/2 transform -translate-x-1/2 whitespace-nowrap">
                  1. Какая общая площадь?
                </span>
              </div>
            </div>
            <div className="bg-[#ff6219] bg-opacity-80 lg:bg-opacity-100 w-screen lg:w-2/6 md:h-full flex flex-col items-center justify-evenly md:p-8">
              <span className="mt-[10px] md:mt-0">Объект:</span>
              <select
                name="type"
                onChange={handleChange}
                value={formData.type}
                className="w-[120px]  justify-center md:w-[140px] lg:w-1/2 text-white-500 bg-transparent text-[16px] text-4xl xl:text-3xl lg:text-2xl md:text-xl sm:text-l text-center border-b-2 border-c66900 border-t-0 border-l-0 border-r-0 border-rounded-0 outline-none resize-none whitespace-normal overflow-ellipsisalign-middle whitespace-nowrap select-auto cursor-pointer my-0 border-1 border-solid border-white-500"
              >
                <option value="">Выберите...</option>
                <option value="Комната">Комната</option>
                <option value="1-к квартира">1-к квартира</option>
                <option value="2-к квартира">2-к квартира</option>
                <option value="3-к квартира">3-к квартира</option>
                <option value="Коттедж">Коттедж</option>
              </select>
              <div className="relative flex">
                <div className="hidden md:block absolute h-[80px] border-l-[3px] border-dotted border-white left-1/2 top-0 transform -translate-x-1/2 mb-4"></div>
                <div className="hidden md:block absolute top-20 left-1/2 transform -translate-x-1/2 whitespace-nowrap">
                  2. У вас квартира или дом?
                </div>
              </div>
            </div>
            <div className="bg-[#ff6219] bg-opacity-80 lg:bg-opacity-100 lg:rounded-r-lg w-screen lg:w-1/5 md:h-full flex flex-col items-center justify-evenly md:p-8">
              <span className="hidden md:inline">Готово</span>
              <button
                onClick={handleClick}
                className="mt-[20px] mb-[20px] md:mt-0 md:mb-0 border-2 text-[16px] lg:text-[22px] md:text-[20px] rounded px-[10px] py-[2px] sm:px-[35px] sm:py-[8px]"
              >
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
        )}

        <span className="h2 mb-0 text-[24px] md:text-[32px] mt-[20px] md:mt-[140px] lg:mt-[80px] xl:mt-[120px] ">
          ПРАЙС ЛИСТ
        </span>
        <div className="px-2 md:w-4/5 grid grid-cols-2 md:grid-cols-3 grid-rows-2 align-center gap-[30px] mt-[10px] md:mt-[30px]">
          {calcData.map((data, index) => (
            <div
              key={index}
              className="flex flex-col items-center md:justify-center"
            >
              <div className="text-[60px] xl:text-[80px] text-accent mb-4">
                {data.icon}
              </div>
              <span className="text-center text-[14px] md:text-[16px]">
                {data.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

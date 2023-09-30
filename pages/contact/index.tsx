import { BsWhatsapp, BsTelegram, BsInstagram } from "react-icons/bs";
import { BiSolidPhoneCall } from "react-icons/bi";

export default function ContactPage() {
  return (
    <div className="bg-black min-h-screen flex flex-col justify-center max-sm:justify-start max-sm:mt-[10px] items-center text-white">
      <div className="shadow-md md:border border-white rounded px-4 py-6 max-w-md w-full text-black max-md:w-[380px] md:w-2/3 sm:py-8 sm:px-6">
        <h2 className="text-2xl max-md:text-center text-white font-semibold mb-4">
          Напишите нам:
        </h2>
        <div className="mb-2 sm:mb-4">
          <label
            className="block text-white text-sm font-bold mb-2"
            htmlFor="name"
          >
            Имя
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="name"
            type="text"
            placeholder="Ваше имя"
          />
        </div>
        <div className="mb-2 sm:mb-4">
          <label
            className="block text-white text-sm font-bold mb-2"
            htmlFor="email"
          >
            Email
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="email"
            placeholder="Ваш email"
          />
        </div>
        <div className="mb-2 sm:mb-4">
          <label
            className="block text-white text-sm font-bold mb-2"
            htmlFor="number"
          >
            Номер телефона
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="number"
            type="text"
            placeholder="Ваш номер"
          />
        </div>
        <div className="mb-2 sm:mb-4">
          <label
            className="block text-white text-sm font-bold mb-2"
            htmlFor="message"
          >
            Сообщение
          </label>
          <textarea
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="message"
            rows="4"
            placeholder="Ваше сообщение"
          ></textarea>
        </div>
        <div className="flex items-center max-md:justify-center justify-between">
          <button
            className="bg-black hover:bg-[#ff6219] text-white border border-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Отправить
          </button>
        </div>
      </div>
      <p className="mt-4 text-2xl text-white">другие способы связи:</p>
      <div className="mt-4 flex flex-wrap space-x-4 items-center justify-center sm:justify-between">
        <a
          href="https://wa.me/your-whatsapp-number"
          target="_blank"
          rel="noopener noreferrer"
        >
          <BsWhatsapp className="text-5xl text-[#D35400]  hover:text-green-700 cursor-pointer" />
        </a>
        <a
          href="https://t.me/your-telegram-username"
          target="_blank"
          rel="noopener noreferrer"
        >
          <BsTelegram className="text-5xl text-[#D35400]  hover:text-blue-700 cursor-pointer" />
        </a>
        <BsInstagram className="text-5xl text-[#D35400] hover:text-red-700 cursor-pointer" />
        <BiSolidPhoneCall className="text-5xl text-[#D35400]  hover:text-purple-700 cursor-pointer" />
      </div>
    </div>
  );
}

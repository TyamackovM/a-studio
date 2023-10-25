import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { BsWhatsapp, BsTelegram } from "react-icons/bs";
import { BiSolidPhoneCall } from "react-icons/bi";
import { message } from "antd";

export default function ContactPage() {
  const formRef = useRef();
  const [form, setFrom] = useState<{
    name: string;
    email: string;
    phone: string;
    message: string;
  }>({ name: "", email: "", phone: "", message: "" });
  const [loading, setLoading] = useState<boolean>(false);
  const [messageApi, contextHolder] = message.useMessage();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFrom({ ...form, [name]: value });
  };
  const handleSubmit = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message || !form.phone) {
      messageApi.open({
        type: "warning",
        content: "Заполните все поля",
      });
    } else {
      setLoading(true);
      emailjs
        .send(
          "service_2o49xls",
          "template_evphdnn",
          {
            from_name: form.name,
            to_name: "Анжелика",
            from_email: form.email,
            to_email: "admin@astyle-ds.com",
            message: [form.message, `tel:${form.phone}`],
          },
          "yRAtmDVat0kOptz6p"
        )
        .then(
          () => {
            setLoading(false);
            messageApi.open({
              type: "success",
              content: "Спасибо! Мы скоро с вами свяжемся.",
            });
            setFrom({ name: "", email: "", phone: "", message: "" });
          },
          (error) => {
            setLoading(false);
            messageApi.open({
              type: "error",
              content: "Что-то пошло не так.",
            });
          }
        );
    }
  };
  return (
    <div className="bg-black min-h-screen flex flex-col justify-center max-md:justify-start lg:justify-start xl:justify-center lg:mt-[10px] max-md:mt-[10px] items-center text-white">
      {contextHolder}
      <form
        ref={formRef}
        onSubmit={handleSubmit}
        className="shadow-md md:border border-white rounded px-4 py-6 max-w-md w-full text-black max-md:w-[380px] md:w-2/3 sm:py-8 sm:px-6"
      >
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
            name="name"
            value={form.name}
            onChange={handleChange}
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
            type="text"
            name="email"
            value={form.email}
            onChange={handleChange}
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
            name="phone"
            value={form.phone}
            onChange={handleChange}
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
            rows="4"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="message"
            placeholder="Ваше сообщение"
            name="message"
            value={form.message}
            onChange={handleChange}
          ></textarea>
        </div>
        <div className="flex items-center max-md:justify-center justify-between">
          <button
            className="bg-black hover:bg-[#ff6219] text-white border border-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            {loading ? "Отправка..." : "Отправить"}
          </button>
        </div>
      </form>
      <p className="max-xl:mt-[2px] mt-4 text-2xl text-white">
        другие способы связи:
      </p>
      <div className="max-xl:mt-[5px] mt-4 flex flex-wrap space-x-4 items-center justify-center sm:justify-between">
        <a
          href="https://wa.me/+79255024212"
          target="_blank"
          rel="noopener noreferrer"
        >
          <BsWhatsapp className="text-5xl text-[#D35400]  hover:text-green-700 cursor-pointer" />
        </a>
        <a
          href="https://t.me/+79255024212"
          target="_blank"
          rel="noopener noreferrer"
        >
          <BsTelegram className="text-5xl text-[#D35400]  hover:text-blue-700 cursor-pointer" />
        </a>
        <a href="tel:+79255024212">
          <BiSolidPhoneCall className="text-5xl text-[#D35400]  hover:text-purple-700 cursor-pointer" />
        </a>
      </div>
    </div>
  );
}

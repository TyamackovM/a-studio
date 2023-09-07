//* icons
import {
  HiHome,
  HiUser,
  HiViewColumns,
  HiRectangleGroup,
  HiChatBubbleBottomCenterText,
  HiEnvelope,
} from "react-icons/hi2";

import { MdCalculate } from "react-icons/md";
import { FaProjectDiagram } from "react-icons/fa";

//? next link
import Link from "next/link";

//? next router
import { useRouter } from "next/router";
import React from "react";

export const navData = [
  { name: "Главная", path: "/", icon: <HiHome /> },
  { name: "Компания", path: "/about", icon: <HiUser /> },
  { name: "Портфолио", path: "/portfolio", icon: <HiRectangleGroup /> },
  { name: "Расчет", path: "/calculate", icon: <MdCalculate /> },
  { name: "Дизайны", path: "/design", icon: <FaProjectDiagram /> },
  { name: "Контакты", path: "/contact", icon: <HiEnvelope /> },
];

const Header = () => {
  const router = useRouter();
  const pathname = router.pathname;
  return (
    <nav
      className="flex flex-col items-center xl:justify-center gap-y-4 fixed h-max
     bottom-0 mt-auto xl:left-[2%] z-50 top-0 w-full xl:w-16 xl:max-w-md xl:h-screen"
    >
      {/*inner */}
      <div
        className="flex w-full xl:flex-col items-center justify-between 
      xl:justify-center gap-y-10 px-4 md:px-40 xl:px-0 h-[65px] xl:h-max py-6 bg-white/10
      backdrop-blur-sm text-3xl xl:text-xl xl:rounded-xl"
      >
        {navData.map((link, index) => {
          const isActive = link.path === pathname;
          const iconClass = isActive ? "text-accent" : "text-white";
          return (
            <Link
              className={`relative flex 
            group hover:text-accent transition-all duration-300`}
              href={link.path}
              key={index}
            >
              {/* tooltip */}
              <div className="absolute pr-14 left-7 hidden xl:group-hover:flex">
                <div
                  className="bg-white relative flex text-primary items-center p-[6px]
               rounded-[3px]"
                >
                  <div className="text-[18px] leading-none font-semibold capitalize">
                    {link.name}
                  </div>
                  {/* triangle */}
                  <div
                    className="border border-white border-r-8 border-y-transparent 
                 border-y-[6px] border-l-0 absolute -left-2"
                  ></div>
                </div>
              </div>
              {/* icon */}
              <div className="">
                {React.cloneElement(link.icon, {
                  className: `${iconClass} hover:text-accent`,
                })}
              </div>
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

export default Header;

//* icons
import {
  HiHome,
  HiUser,
  HiViewColumns,
  HiRectangleGroup,
  HiChatBubbleBottomCenterText,
  HiEnvelope,
} from "react-icons/hi2";

//? next link
import Link from "next/link";

//? next router
import { useRouter } from "next/router";

export const navData = [
  { name: "home", path: "/", icon: <HiHome /> },
  { name: "about", path: "/about", icon: <HiUser /> },
  { name: "portfolio", path: "/portfolio", icon: <HiRectangleGroup /> },
  { name: "calculate", path: "/calculate", icon: <HiViewColumns /> },
  { name: "design", path: "/design", icon: <HiEnvelope /> },
  { name: "contact", path: "/contact", icon: <HiChatBubbleBottomCenterText /> },
];

const Header = () => {
  const router = useRouter();
  const pathname = router.pathname;
  return (
    <nav className='flex flex-col items-center xl:justify-center gap-y-4 fixed h-max
     bottom-0 mt-auto xl:left-[2%] z-50 top-0 w-full xl:w-16 xl:max-w-md xl:h-screen'>
      {/*inner */}
      <div className='flex w-full xl:flex-col items-center justify-between 
      xl:justify-center gap-y-10 px-4 md:px-40 xl:px-0 h-[80px] xl:h-max py-8 bg-white/10
      backdrop-blur-sm text-3xl xl:text-xl xl:rounded-full '>
        {navData.map((link, index) => {
          return (
           <Link 
            className={`${link.path === pathname && 'text-accent '} relative flex 
            group hover:text-accent transition-all duration-300`} 
            href={link.path} 
            key={index}
           >
            {/* tooltip */}
            <div className='absolute pr-14 left-7 hidden xl:group-hover:flex'>
              <div className='bg-white relative flex text-primary items-center p-[6px]
               rounded-[3px]'>
                <div className='text-[12px] leading-none font-semibold capitalize'>
                  {link.name}
                </div>
                {/* triangle */}
                <div className='border-solid border-l-white border-r-8 border-y-transparent 
                 border-y-[6px] border-l-0 absolute -left-2'></div>
              </div>
            </div>
            {/* icon */}
            <div>{link.icon}</div>
          </Link>
          );
        })}
      </div>
    </nav>
  );
};

export default Header;

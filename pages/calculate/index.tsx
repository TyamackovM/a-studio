import 
  {MdArchitecture}
from 'react-icons/md';
import 
  {BiLogoVisualStudio,BiSolidKey}
from 'react-icons/bi';
import 
  {SiBlueprint}
from 'react-icons/si';
import 
  {RiGuideFill, RiSketching}
from 'react-icons/ri';


export default function index() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-start mt-[100px]">
      <div className="w-full h-1/4 flex flex-row items-center justify-center">
        <div className="bg-[#ff6219] rounded-l-lg w-1/5 h-full flex flex-col items-center justify-evenly p-8">
          <span>Общая площадь, м2:</span>
          <input className="text-black"></input>
          <div  className="relative flex">
          <div className="absolute h-[80px] border-l-[3px] border-dotted border-white left-1/2 top-0 transform -translate-x-1/2 mb-4"></div>
            <span className="absolute top-20 left-1/2 transform -translate-x-1/2 whitespace-nowrap">1. Какая общая площадь?</span>
          </div>
        </div>
        <div className="bg-[#ff6219] w-2/6 h-full flex flex-col items-center justify-evenly p-8">
          <span>Объект:</span>
          <select className="text-black">
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
            <option value="option4">Option 4</option>
            <option value="option5">Option 5</option>
          </select>
          <div className="relative flex">
          <div className="absolute h-[80px] border-l-[3px] border-dotted border-white left-1/2 top-0 transform -translate-x-1/2 mb-4"></div>
            <div className="absolute top-20 left-1/2 transform -translate-x-1/2 whitespace-nowrap">2. У вас квартира или дом?</div>
          </div>
        </div>
        <div className="bg-[#ff6219] rounded-r-lg w-1/5 h-full flex flex-col items-center justify-evenly p-8">
          <span>Готово</span>
          <button>Рассчитать</button>
          <div className="relative flex">
          <div className="absolute h-[80px] border-l-[3px] border-dotted border-white left-1/2 top-0 transform -translate-x-1/2 mb-4"></div>
            <span className="absolute top-20 left-1/2 transform -translate-x-1/2 whitespace-nowrap" >3. Жмите!</span>
          </div>
        </div>
      </div>
      <span className="text-[48px] mt-[120px]">ПРАЙС ЛИСТ</span>
      <div className="grid grid-cols-3 grid-rows-2">
        <div className='text-[100px] text-accent mb-4'><MdArchitecture/></div>
        <div className='text-[100px] text-accent mb-4'><BiLogoVisualStudio/></div>
        <div className='text-[100px] text-accent mb-4'><RiSketching/></div>
        <div className='text-[100px] text-accent mb-4'><BiSolidKey/></div>
        <div className='text-[100px] text-accent mb-4'><RiGuideFill/></div>
        <div className='text-[100px] text-accent mb-4'><SiBlueprint/></div>
     
      </div>
    </div>
  );
}

export default function index() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center">
      <div className="w-full h-1/4 flex flex-row items-center justify-center">
        <div className="bg-orange-400 rounded-l-lg w-1/5 h-full flex flex-col items-center justify-between p-8">
          <span>Общая площадь, м2:</span>
          <input className="text-black"></input>
          <div>
            <img></img>
            <span>1. Какая общая площадь?</span>
          </div>
        </div>
        <div className="bg-orange-400 w-2/6 h-full flex flex-col items-center justify-between p-8">
          <span>Объект:</span>
          <select className="text-black">
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
            <option value="option4">Option 4</option>
            <option value="option5">Option 5</option>
          </select>
          <div>
            <img></img>
            <span>2. У вас квартира или дом?</span>
          </div>
        </div>
        <div className="bg-orange-400 rounded-r-lg w-1/5 h-full flex flex-col items-center justify-between p-8">
          <span>Готово</span>
          <button>Рассчитать</button>
          <div>
            <img></img>
            <span>3. Жмите!</span>
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
}

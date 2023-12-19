// import swiper react components
import { Swiper, SwiperSlide } from "swiper/react";

// import swiper styles
import "swiper/css";
// import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-cube";
import "swiper/css/effect-fade";

import { Keyboard, Navigation, Pagination } from "swiper/modules";

// service data
export const serviceData = [
  {
    name: "Авангард",
    image: `bg-[url("/avg1.jpg")]`,
    description:
      "В стиле авангард очень развита идея символизма, так как это не просто стиль, а целая жизненная философия новых взглядов. Хотя авангард отрицает общепринятое понимание гармоничной композиции. В его концепции изначально заложена идея противоречивости и несогласия со стереотипным восприятием интерьера.",
  },
  {
    name: "Ампир",
    image: `bg-[url("/amp4.jpg")]`,
    description:
      "Стиль ампир привносит в интерьер ощущение торжественности и готовности к празднику. В помещении должен быть всегда идеальный порядок. Небрежно расставленные или разбросанные вещи привносят в оформление диссонанс. Дизайнерское направление не понравится тем, кто любит часто двигать мебель. Каждый предмет находится на своем, четко зафиксированном месте.",
  },
  {
    name: "Английский",
    image: `bg-[url("/eng1.jpg")]`,
    description:
      "Английский интерьер подойдет всем, кому по душе тепло и уют родного дома. Тем, кто хранит на полках фотографии родных, а за стеклянными дверцами шкафа - фамильный сервиз. Интерьер помещения в английском стиле позволит отвлечься от суета и спешки, которая так несвойственна британцам. Подойдет тем, кто любит симметрию и порядок, а также ценителям качества - дорогих материалов и мебели.",
  },
  {
    name: "Барокко",
    image: `bg-[url("/bar1.jpg")]`,
    description:
      "Во внутреннем убранстве это всё та же помпезность и театральность, которую нельзя спутать ни с каким другим стилем. И сочетать с каким-либо другим интерьерным стилем тоже невозможно. Он дорог не только по оформлению, но и по исполнению из-за своей сложности.",
  },
  {
    name: "Ар-нуво",
    image: `bg-[url("/artn1.jpg")]`,
    description:
      "При дизайне помещения в стиле ар-нуво используют сочетания натуральных оттенков: песочного, белого, бежевого, кремового, древесного, земляного или травяного. Для акцентов присутствуют яркие синие или золотые. Природность в палитре позволяет человеку максимально расслабиться после насыщенного дня.",
  },
  {
    name: "Ар-деко",
    image: `bg-[url("/ard1.jpg")]`,
    description:
      "Ломкость и четкость линий сопровождают ар-деко в любом его проявлении. В оформлении интерьера, как и в прочих сферах, стиль ар-деко приветствует разноплановость. Наложение фигур друг на друга, переплетение геометрии - вот что для него естественно. Это касается и мебели. Комод с геометрическим орнаментом или несколькими разноуровневыми дверцами отлично впишется в интерьер.",
  },
  {
    name: "Баухаус",
    image: `bg-[url("/bay.jpg")]`,
    description:
      "Стиль подчеркивает современность и функциональность сегодняшней реальности. Его идея заключена в машинном производстве удобной и лаконичной мебели. Минимализм, встроенные шкафы и техника, свободное пространство и простота форм - основные черты, отличающие баухауз от других стилей.",
  },
  {
    name: "Бoxo",
    image: `bg-[url("/box.jpg")]`,
    description:
      "Бохо - это динамика и уют, яркие краски и хорошее настроение. Стиль невероятным образом сочетает радость и веселье с эклектикой. Интерьер в стиле бохо оформляют не по намеченному плану, а каким-то внутренним художественным чутьем. Он всегда индивидуален, изящен и не имеет рамок.",
  },
  {
    name: "Брутализм",
    image: `bg-[url("/brut.jpg")]`,
    description:
      "Стиль брутализм стал основой для индустриального лофта. В переводе с латинского «brutus» название стиля переводится как «тяжелый, грубый», а буквально означает «необработанный бетон». И это лучшая характеристика. Кирпичная кладка без отделки, неприкрытая проводка или части каркаса здания, четкие линии и острые углы. Вот его главные характеристики.",
  },
  {
    name: "Бидермейер",
    image: `bg-[url("/bider.jpg")]`,
    description:
      "Прекрасно передает атмосферу и внутреннее состояние буржуазии. Здесь раскрывается желание жить в спокойствии и комфорте. Это выражено в домашней и уютной обстановке интерьера. Профессиональные дизайнеры находят в нем такие стили, как ампир и романтизм. Это сочетание действительно присутствует и превращается в удивительный интерьер бидермейер.",
  },
  {
    name: "Bинтаж",
    image: `bg-[url("/vint.jpg")]`,
    description:
      "Главная мысль винтажа: внешне предметы должны напоминать об ушедшей эпохе, навевая ощущение легкой грусти. Идеального результата получится добиться заранее изучив эпоху, вносимую в интерьер. Посмотреть старинные фильмы, фотографии, прочитав мемуары. Такие знания помогут легко преобразить обстановку и не перегрузить комнату лишними вещами.",
  },
  {
    name: "Итальянский",
    image: `bg-[url("/it.jpg")]`,
    description:
      "Чарующий итальянский стиль выглядит как смешение нескольких направлений в дизайне интерьера. Это изящный барокко с вниманием к деталям, деревенский и простой кантри, а также нотка средиземноморья. Все эти составляющие делают итальянский интерьер уютным и гостеприимным, страстным и спокойным одновременно.",
  },
  {
    name: "Kантри",
    image: `bg-[url("/kant.jpg")]`,
    description:
      "Стиль кантри в интерьере - это сельская самобытность и уют. Он наиболее комфортен для человека из-за близости с природой. Но стоит учитывать, что выбрав кантри для одной комнаты загородного дома следует выдержать в нем и все остальные. Стиль не терпит соседства с другими вариантами оформления интерьеров.",
  },
  {
    name: "Kитайский",
    image: `bg-[url("/kit.jpg")]`,
    description:
      "Сегодня китайский стиль в интерьере все больше притягивает внимание людей. Зачастую это связано с интересом к практике Фен-шуй. Необычный стиль, впитавший культуру не одного тысячелетия, самобытен.",
  },
  {
    name: "Китч",
    image: `bg-[url("/kitch.jpg")]`,
    description:
      "Китч - своеобразный шарж в мире интерьерного дизайна. Пародия на классику, сложность и художественность. Стиль отрицает всю знакомую рациональность и обыденность прочих стилей. Однако при этом китч притягивает внимание и набирает все большую популярность за свет своей индивидуальности.",
  },
  {
    name: "Классический",
    image: `bg-[url("/classich.jpg")]`,
    description:
      "Отличает классический стиль в интерьере тяга к геометрии. Мебель правильной формы, Арки в оформлении зеркал или дверных проемов. Централизованная композиция тоже отличительная черта стиля. Все в помещении строится из центра, а не наоборот.",
  },
  {
    name: "Классицизм",
    image: `bg-[url("/classiciz.jpg")]`,
    description:
      "Поскольку современный интерьер – это, в первую очередь, практичность, простота и комфорт, то даже классицизм становится более лаконичным и сдержанным. Если вы любите роскошные интерьеры, при этом предпочитаете современные стили, то для вас отлично подойдет неоклассика.",
  },
  {
    name: "Консерватизм",
    image: `bg-[url("/konserv.jpg")]`,
    description:
      "Основной чертой консерватизма является его простота. Это значит, что в нем не используют шик и блеск на показ. Нет помпезности и искусственного лоска, только подлинное благородство. Для оформления выбирают теплую палитру оттенков, которые светятся изнутри, но при этом не привлекают к себе лишнего внимания.",
  },
  {
    name: "Конструктивизм",
    image: `bg-[url("/konstruct.jpg")]`,
    description:
      "Лаконичный, сдержанный, открытый – такие определения можно дать стилю конструктивизм, впервые взглянув на него. Приемы зонирования, декорирования при оформлении интерьера в такой стилистике не применяются. Конструктивизм любит свободные пространства, не «запачканные» узорами и орнаментами предметы мебели.",
  },
  {
    name: "Контемпорари",
    image: `bg-[url("/kontemp.jpg")]`,
    description:
      "Стиль контемпорари прекрасно будет выглядеть в любом помещении, он не отличается изысканностью, но создаёт максимально функциональную и комфортную обстановку, независимо от площади комнаты. ",
  },
  {
    name: "Лофт",
    image: `bg-[url("/loft.jpg")]`,
    description:
      "Пожалуй один из самых легко узнаваемых, строгих, но неординарных стилей современности. Кирпичные стены без отделки, не задрапированные провода, бетонные балки над головой и большая площадь без перегородок? Так и было задумано!",
  },
  {
    name: "Лаунж",
    image: `bg-[url("/lounzh.jpg")]`,
    description:
      "Сегодня в нашем мире много стрессов и волнений. Времени мало, дел много. Всегда нужно быть в состоянии полной готовности. . Интерьер в стиле лаунж специально предназначен для полноценного отдыха, его обстановка располагает к спокойствию и умиротворению.",
  },
  {
    name: "Манга",
    image: `bg-[url("/manga.jpg")]`,
    description:
      "Интерьер дома или комнаты в стиле манга переносит хозяев и гостей в волшебную атмосферу где возможно все. Великие битвы, летающие феи, добрые драконы и, конечно, любовь. Манга стиль в интерьере существует сравнительно недавно, но уже завоевал определенную популярность у любителей мультфильмов и комиксов родом из Японии.",
  },
  {
    name: "Минимализм",
    image: `bg-[url("/minimal.jpg")]`,
    description:
      "Много простора и света, геометрические чёткие линии, гладкие поверхности. Неумолимая логика и порядок во всём. Перед вами – стиль минимализм. Сразу оговоримся: минимализм – это не про нужду и бедность. Скупая отделка может быть очень дорогой. Это скорее про образ жизни и разумную организацию пространства для людей, которые ценят своё время.",
  },
  {
    name: "Отно Арт",
    image: `bg-[url("/otno-art.jpg")]`,
    description:
      "Данное направление подразумевает создание уникальных арт-объектов, музыкальных произведений, архитектурных решений художественного искусства, музыкальной индустрии, архитектурного направления, новинок модной индустрии и дизайна интерьера.",
  },
];

const ServiceSlider = () => {
  return (
    <div className="flex justify-center items-center max-xl:mt-[40px] xl:h-screen">
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        grabCursor={true}
        keyboard={{
          enabled: true,
        }}
        pagination={{
          clickable: true,
        }}
        // navigation={true}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        modules={[Keyboard, Pagination, Navigation]}
        className="text-white max-sm:h-[550px] max-sm:w-[350px] sm:w-[350px] sm:h-[550px] md:w-[650px] md:h-[550px] xl:h-[650px] xl:w-[900px]"
      >
        <div className="swiper-button-next color-white z-[1000]"></div>
        <div className="swiper-button-prev text-white"></div>
        {serviceData?.map((item, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="slide-container z-[190]">
                <div className="text-center text-[32px] mb-[15px]">
                  {item.name}
                </div>
                <div
                  className={`bg-cover ${item?.image} max-sm:h-[300px] sm:h-[300px] xl:h-[400px] bg-no-repeat bg-center cursor-pointer transition-all duration-300`}
                ></div>
                <div className="text-white max-sm:text-[12px] sm:text-[14px] md:text-[15px] h-[140px] max-sm:h-[140px] flex justify-center items-center leading-normal text-center">
                  {item.description}
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default ServiceSlider;

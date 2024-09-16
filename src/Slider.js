import React, { useEffect, useRef,useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { useNavigate } from 'react-router-dom';
import './Slider.css'

const slides = [
  {
    image: "https://wallpapercave.com/wp/wp8182023.jpg",
    name: "Tulsi",
    description: "Tulsi, or the Holy Basil, is one of the most commonly found 10 medicinal herbs in India in every household. Since ancient times, Tulsi has been used as a winder herb or medicinal plant to cure diseases like high cholesterol, high blood pressure, cough, headache, asthma, indigestion, sinusitis, ulcers, cramps, gastric disorders, etc. Tulsi is also a helpful healing agent to treat diabetes and arthritis.",
    link2D: "/tulsi-2d-view",
    link3D: "/tul3d"
  },
  {
    image: "https://r4.wallpaperflare.com/wallpaper/199/859/644/flowers-flower-mustard-plant-wallpaper-16a88eb7793e1532fdf298d31467934e.jpg",
    name: "Mustard",
    description: "The mustard seed is filled with poly nutrients, minerals, and vitamins and helps cure digestion problems, enhancing the metabolism rate of your body. The component called selenium in mustard seeds is responsible for its inflammatory properties. Also, being a good source of magnesium, mustard seeds decrease the risk of low blood pressure, severe asthma attacks, and symptoms of rheumatoid arthritis.",
    link2D: "/mustard-2d-view", 
    link3D: "/mus3d"
  },
  {
    image: "https://c1.wallpaperflare.com/preview/685/686/503/lavender-blossom-lilac-blue-lavender-field-flowers.jpg",
    name: "Lavender",
    description: "Native to the Mediterranean mountains and North Africa. Lavender requires well-drained soil and bright sun for optimum growth. The essential oil from some lavender flower species contains other medicinal and cosmetic benefits. The antiseptic and anti-inflammatory properties of lavender make it suitable for treating bug bites and burns. The fragrance and soothing quality of lavender make it an ideal agent for curing sleeping disorders, stress, anxiety, depression, etc. People with digestive problems can also try lavender tea to achieve better digestion.",
    link2D: "/lavender-2d-view",
    link3D: "/lav3d"
  },
  {
    image: "https://c0.wallpaperflare.com/path/1017/836/928/echinacea-purperea-sun-hat-flowers-summer-4a2f5b5e2af89c4481f4eecdadcc6151.jpg",
    name: "Echinacea",
    description: "One of the world’s most important medicinal herbs, the echinacea has the capacity to raise the body’s resistance to bacterial and viral infections by stimulating the immune system. It also has antibiotic properties that helps relieve allergies. Basically, the roots are beneficial in the treatment of sores, wounds and burns.It was once used by the Native Americans as an application for insect bites, stings and snakebites. The echinacea grows on any well drained soil, as long as it gets sunlight.",
    link2D: "/echinacea-2d-view",
    link3D: "/conf3d"
  },
];

const Slider = () => {
  const swiperRef = useRef(null);
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      if (swiperRef.current && swiperRef.current.swiper) {
        swiperRef.current.swiper.slideNext();
      }
    }, 5000);

    return () => clearInterval(interval);
  }, []);
  const handleSlideChange = (swiper) => {
    const newIndex = swiper.activeIndex;
    setActiveSlideIndex(newIndex);
    resetAndAnimate(newIndex);
  };

  const resetAndAnimate = (index) => {
    const elements = document.querySelectorAll('.swiper-slide-active .animate');
    elements.forEach((el) => {
      el.classList.remove('animate-delay-1', 'animate-delay-2', 'animate-delay-3');
      el.classList.add('animate'); 
      setTimeout(() => {
        el.classList.add(`animate-delay-${el.dataset.delay}`);
      }, 10); 
    });
  };
    const handle2DViewClick = (link) => {
    navigate(link);
  };

  return (
    <div className="slider-container">

      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ dynamicBullets: true}}
        autoplay={{ delay: 10000, disableOnInteraction: false }}
        loop={true}
        spaceBetween={30}
        slidesPerView={1}
        onSlideChange={handleSlideChange}
        onSwiper={(swiper) => 
          {
            swiperRef.current = swiper;
            console.log(swiperRef.current);
          }}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="slide-content">
              <img src={slide.image} alt={slide.name} />
              <div className="content">
                 <div className={`name animate ${activeSlideIndex === index ? 'animate-delay-1' : ''}`}>{slide.name}</div>
                <div className={`des animate ${activeSlideIndex === index ? 'animate-delay-2' : ''}`}>{slide.description}</div>
                <button className={`button animate ${activeSlideIndex === index ? 'animate-delay-3' : ''}`}
                 onClick={() => handle2DViewClick(slide.link2D)}>
                  2D View
                  </button>
                <button className={`button animate ${activeSlideIndex === index ? 'animate-delay-3' : ''}`}
                onClick={() => handle2DViewClick(slide.link3D)}
                  >
                  3D View</button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;



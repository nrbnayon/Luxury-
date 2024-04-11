import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import AOS from "aos";
import "aos/dist/aos.css";
// AOS.init();
import Slider1 from "../../assets/Images/banner.png";
import Slider2 from "../../assets/Images/banner2.png";
import Slider3 from "../../assets/Images/banner3.png";
import Slider4 from "../../assets/Images/banner4.png";
import { useEffect, useRef } from "react";

export default function BannerSlider() {
  const swiper = useRef(null);

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  const handleChange = () => {
    console.log("Slide changed!");
    swiper.current.update();
  };
  return (
    <div>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        onChange={handleChange}
        ref={swiper}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div
            className="relative h-1/2"
            data-aos="fade-right"
            data-aos-delay="100"
          >
            <img
              src={Slider1}
              alt="Slider 1"
              className="object-cover w-full h-full rounded-br-3xl"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <h3
                className="text-white text-center text-xl md:text-4xl lg:text-6xl font-bold uppercase"
                data-aos="fade-up"
                data-aos-delay="1000"
              >
                Be our Guest
              </h3>
              <p
                className="p-4 rounded-md bg-[#FFFFFFF0] text-[#C9BDAB] text-sm font-semibold text-center md:text-2xl uppercase"
                data-aos="fade-down"
                data-aos-delay="200"
              >
                LIVE like a king in our best houses
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="relative h-1/2"
            data-aos="fade-left"
            data-aos-delay="600"
            data-aos-anchor="#anchor2"
          >
            <img
              src={Slider2}
              alt="Slider 2"
              className="object-cover w-full h-full rounded-br-3xl"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <h3
                className="text-white text-center text-xl md:text-4xl lg:text-6xl font-bold uppercase"
                data-aos="flip-up"
                data-aos-delay="500"
              >
                Most Luxury
              </h3>
              <p
                className="p-4 rounded-md bg-[#FFFFFFF0] text-[#C9BDAB] text-sm font-semibold text-center md:text-2xl uppercase"
                data-aos="flip-down"
                data-aos-delay="500"
              >
                Discover our exquisite collection of most luxury properties.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="relative h-1/2"
            data-aos="fade-up"
            data-aos-delay="500"
            data-aos-anchor="#anchor3"
          >
            <img
              src={Slider3}
              alt="Slider 3"
              className="object-cover w-full h-full rounded-br-3xl"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <h3
                className="text-white text-center text-xl md:text-4xl lg:text-6xl font-bold uppercase"
                data-aos="zoom-in"
                data-aos-delay="100"
              >
                Premier Listings
              </h3>
              <p
                className="p-4 rounded-md bg-[#FFFFFFF0] text-[#C9BDAB] text-sm font-semibold text-center md:text-2xl uppercase"
                data-aos="zoom-out"
                data-aos-delay="10000"
              >
                Explore our premier listings for the ultimate luxury experience.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="relative h-1/2"
            data-aos="fade-down"
            data-aos-delay="500"
            data-aos-anchor="#anchor3"
          >
            <img
              src={Slider4}
              alt="Slider 4"
              className="object-cover w-full h-full rounded-br-3xl"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <h3
                className="text-white text-center text-xl md:text-4xl lg:text-6xl font-bold uppercase"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                Dream Homes
              </h3>
              <p
                className="p-4 rounded-md bg-[#FFFFFFF0] text-[#C9BDAB] text-sm font-semibold text-center md:text-2xl uppercase"
                data-aos="fade-down"
                data-aos-delay="1000"
              >
                Find your dream home among our exclusive selection.
              </p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

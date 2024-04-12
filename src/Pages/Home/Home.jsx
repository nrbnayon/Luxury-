import { useLoaderData } from "react-router-dom";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import BannerSlider from "../../Components/BannerSlider/BannerSlider";
import Description from "../../Components/Home/Description";
import SwiperCard from "../../Components/Cards/SwiperCard";
import OurRegion from "../../Components/Home/OurRegion";
import OurService from "../../Components/Home/OurService";

const Home = () => {
  useEffect(() => {
    AOS.init({
      disable: false,
      startEvent: "DOMContentLoaded",
      initClassName: "aos-init",
      animatedClassName: "aos-animate",
      useClassNames: false,
      disableMutationObserver: false,
      debounceDelay: 50,
      throttleDelay: 99,

      offset: 120,
      delay: 0,
      duration: 400,
      easing: "ease",
      once: false,
      mirror: false,
      anchorPlacement: "top-bottom",
    });
  }, []);

  const houses = useLoaderData();
  return (
    <div className="overflow-y-hidden">
      <div data-aos="fade-up" data-aos-delay="100" data-aos-duration="1000">
        <BannerSlider />
      </div>
      <div data-aos="fade-down" data-aos-delay="200" data-aos-duration="1000">
        <Description />
      </div>
      <div data-aos="fade-left" data-aos-delay="300" data-aos-duration="1000">
        <SwiperCard houses={houses} />
      </div>
      <div data-aos="fade-right" data-aos-delay="400" data-aos-duration="1000">
        <OurRegion />
      </div>
      <div data-aos="fade-up" data-aos-delay="500" data-aos-duration="1000">
        <OurService />
      </div>
    </div>
  );
};

export default Home;

// import { useLoaderData } from "react-router-dom";
// import BannerSlider from "../../Components/BannerSlider/BannerSlider";
// import Description from "../../Components/Home/Description";
// import SwiperCard from "../../Components/Cards/SwiperCard";
// import OurRegion from "../../Components/Home/OurRegion";
// import OurService from "../../Components/Home/OurService";
// import AOS from "aos";
// import "aos/dist/aos.css";
// AOS.init();
// const Home = () => {
//   const houses = useLoaderData();
//   return (
//     <div>
//       <div data-aos="fade-up" data-aos-delay="100" data-aos-duration="1000">
//         <BannerSlider />
//       </div>
//       <div data-aos="fade-down" data-aos-delay="200" data-aos-duration="1000">
//         <Description />
//       </div>
//       <div data-aos="fade-left" data-aos-delay="300" data-aos-duration="1000">
//         <SwiperCard houses={houses} />
//       </div>
//       <div data-aos="fade-right" data-aos-delay="400" data-aos-duration="1000">
//         <OurRegion />
//       </div>
//       <div data-aos="fade-up" data-aos-delay="100" data-aos-duration="1000">
//         <OurService />
//       </div>
//     </div>
//   );
// };

// export default Home;

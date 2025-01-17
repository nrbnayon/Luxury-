import { useLoaderData } from "react-router-dom";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import BannerSlider from "../../Components/BannerSlider/BannerSlider";
import Description from "../../Components/Home/Description";
import EstatesCard from "../../Components/Cards/EstatesCard";
import OurRegion from "../../Components/Home/OurRegion";
import OurService from "../../Components/Home/OurService";
import AboutUs from "../AboutUs/AboutUs";
import ContactForm from "../ContactForm/ContactForm";

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

  const villas = useLoaderData();
  return (
    <div className="overflow-x-hidden overflow-y-hidden">
      <div data-aos="fade-down" data-aos-delay="100" data-aos-duration="1000">
        <BannerSlider />
      </div>
      <div data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">
        <Description />
      </div>
      <div data-aos="zoom-in" data-aos-delay="700" data-aos-duration="1000">
        <EstatesCard villas={villas} />
      </div>
      <div data-aos="fade-left" data-aos-delay="400" data-aos-duration="1000">
        <OurRegion />
      </div>
      <div data-aos="fade-up" data-aos-delay="500" data-aos-duration="1000">
        <OurService />
      </div>
      <div data-aos="fade-down" data-aos-delay="600" data-aos-duration="1000">
        <AboutUs />
      </div>
      <div data-aos="zoom-out" data-aos-delay="500" data-aos-duration="1000">
        <ContactForm />
      </div>
    </div>
  );
};

export default Home;

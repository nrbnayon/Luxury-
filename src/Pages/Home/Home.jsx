import { useLoaderData } from "react-router-dom";
import BannerSlider from "../../Components/BannerSlider/BannerSlider";
import Description from "../../Components/Home/Description";
import SwiperCard from "../../Components/Cards/SwiperCard";
import OurRegion from "../../Components/Home/OurRegion";
import OurService from "../../Components/Home/OurService";

const Home = () => {
  const houses = useLoaderData();
  return (
    <div>
      <div className="w-full">
        <BannerSlider />
      </div>
      <Description />
      <SwiperCard houses={houses} />
      <OurRegion />
      <OurService />
    </div>
  );
};

export default Home;

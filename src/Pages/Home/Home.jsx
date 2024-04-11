import { useLoaderData } from "react-router-dom";
import BannerSlider from "../../Components/BannerSlider/BannerSlider";
import Description from "../../Components/Common/Description";
import SwiperCard from "../../Components/Cards/SwiperCard";

const Home = () => {
  const houses = useLoaderData();
  return (
    <div>
      <div className="w-full">
        <BannerSlider />
      </div>
      <Description />
      <SwiperCard houses={houses} />
    </div>
  );
};

export default Home;

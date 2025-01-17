import { LuWaves } from "react-icons/lu";
import { BsArrowRight } from "react-icons/bs";
import { MdOutlinePets, MdElectricCar } from "react-icons/md";
import { CgGym } from "react-icons/cg";
import { GiBoatHorizon } from "react-icons/gi";
import BGIMG from "../../assets/Images/6.png";
import { Divider } from "@mui/material";

const OurService = () => {
  return (
    <div className="my-6 lg:py-10">
      <div>
        <h3 className="text-2xl lg:text-4xl text-center font-bold  uppercase">
          Our properties specialities
        </h3>
        <div className="flex lg:w-2/3 mx-auto px-2 flex-wrap gap-2 lg:flex-row justify-between items-center my-4 lg:my-8">
          <div className="space-y-2">
            <LuWaves />
            <h3 className="text-xl font-bold">Seafront</h3>
            <p className="flex items-center gap-1 hover:underline text-xs">
              have a look <BsArrowRight />
            </p>
          </div>
          <Divider orientation="vertical" variant="middle" flexItem />
          <div className="space-y-2">
            <MdOutlinePets />
            <h3 className="text-xl font-bold">Pet Friendly</h3>
            <p className="flex items-center gap-1 hover:underline text-xs">
              pet allowed <BsArrowRight />
            </p>
          </div>
          <Divider orientation="vertical" variant="middle" flexItem />
          <div className="space-y-2">
            <MdElectricCar />
            <h3 className="text-xl font-bold">Electric car</h3>
            <p className="flex items-center gap-1 hover:underline text-xs">
              charge your car <BsArrowRight />
            </p>
          </div>
          <Divider orientation="vertical" variant="middle" flexItem />
          <div className="space-y-2">
            <CgGym />
            <h3 className="text-xl font-bold">Fitness/Gym</h3>
            <p className="flex items-center gap-1 hover:underline text-xs">
              work out <BsArrowRight />
            </p>
          </div>
          <Divider orientation="vertical" variant="middle" flexItem />
          <div className="space-y-2">
            <GiBoatHorizon />
            <h3 className="text-xl font-bold">Boat mooring</h3>
            <p className="flex items-center gap-1 hover:underline text-xs">
              take a trip <BsArrowRight />
            </p>
          </div>
        </div>
      </div>
      <div className="my-4 py-4">
        <div className="relative w-full h-[500px]">
          <img
            src={BGIMG}
            className="w-full h-full rounded-md rounded-br-[95px]"
            alt="bgimg"
          />
          <div className="absolute w-2/3 md:w-1/3 mx-auto h-2/3 md:h-1/2 my-auto  inset-0 flex flex-col justify-center space-y-2 text-center bg-[#FFFFFFE0] items-center p-4 rounded-md rounded-br-[50px] rounded-tl-[50px]">
            <h3 className="text-2xl font-bold text-primary">Become a host </h3>
            <p className="text-base font-medium text-secondary">
              Join the elite league of hosts specializing in luxury villas and
              unlock a world of exclusive opportunities.
            </p>
            <button className="w-[80%] mx-auto py-3 px-6 bg-gradient-to-r from-purple-500 to-indigo-600 hover:from-indigo-500 hover:to-purple-600 text-white font-bold rounded-lg shadow-lg transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl border-2 border-transparent hover:border-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50">
              JOIN TODAY
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurService;

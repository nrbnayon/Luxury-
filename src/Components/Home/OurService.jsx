import { LuWaves } from "react-icons/lu";
import { BsArrowRight } from "react-icons/bs";
import { Divider } from "@mui/material";

const OurService = () => {
  return (
    <div className="my-6">
      <div>
        <h3 className="text-2xl lg:text-4xl text-center  uppercase">
          Our properties specialities
        </h3>
        <div className="flex md:w-2/3 mx-auto justify-between items-center my-4 md:my-8">
          <div>
            <LuWaves />
            <h3 className="text-xl font-bold">Seafront</h3>
            <p className="flex items-center hover:underline text-xs">
              have a look <BsArrowRight />
            </p>
          </div>
          <Divider orientation="vertical" variant="middle" flexItem />

          <div>
            <LuWaves />
            <h3 className="text-xl font-bold">Seafront</h3>
            <p className="flex items-center hover:underline text-xs">
              have a look <BsArrowRight />
            </p>
          </div>
          <Divider orientation="vertical" variant="middle" flexItem />
          <div>
            <LuWaves />
            <h3 className="text-xl font-bold">Seafront</h3>
            <p className="flex items-center hover:underline text-xs">
              have a look <BsArrowRight />
            </p>
          </div>
          <Divider orientation="vertical" variant="middle" flexItem />
          <div>
            <LuWaves />
            <h3 className="text-xl font-bold">Seafront</h3>
            <p className="flex items-center hover:underline text-xs">
              have a look <BsArrowRight />
            </p>
          </div>
          <Divider orientation="vertical" variant="middle" flexItem />
          <div>
            <LuWaves />
            <h3 className="text-xl font-bold">Seafront</h3>
            <p className="flex items-center hover:underline text-xs">
              have a look <BsArrowRight />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurService;

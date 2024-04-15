import { Link, useLoaderData, useNavigation } from "react-router-dom";
import Villa from "./EstateVilla";
import { GrMapLocation } from "react-icons/gr";
import { Tooltip } from "@material-tailwind/react";
import { FaShieldHeart } from "react-icons/fa6";
import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import LoaderSpinner from "../../Components/LoaderSpinner/LoaderSpinner";
import ContactForm from "../ContactForm/ContactForm";

const Villas = () => {
  const navigation = useNavigation();
  const villas = useLoaderData();
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredVillas, setFilteredVillas] = useState([]);
  useEffect(() => {
    AOS.init();
  }, []);

  useEffect(() => {
    const filtered = villas.filter((villa) =>
      villa.estate_title.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredVillas(filtered);
  }, [searchQuery, villas]);

  const handleSearchInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSearchButtonClick = () => {
    const filtered = villas.filter((villa) =>
      villa.estate_title.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredVillas(filtered);
  };
  if (navigation.state === "loading" || !villas || !filteredVillas) {
    return <LoaderSpinner />;
  }
  return (
    <div className="overflow-x-hidden overflow-y-hidden">
      <div className="text-center">
        <h3 className="text-2xl font-semibold my-4">All Villas</h3>
      </div>
      <div className="flex items-center justify-center md:w-1/3  rounded-[30px] mx-auto space-x-2 border bg-gray-200">
        <input
          type="text"
          placeholder="Search Villas..."
          value={searchQuery}
          onChange={handleSearchInputChange}
          className="border-none rounded-md w-2/3 h-8 focus:outline-none bg-gray-200"
        />
        <button onClick={handleSearchButtonClick} className="btn ">
          Search
        </button>
      </div>
      <section className="dark:bg-gray-100 dark:text-gray-800">
        <div className="p-6 mx-auto space-y-6 sm:space-y-12">
          <div className="block max-w-sm gap-3 mx-auto sm:max-w-full group hover:no-underline focus:no-underline lg:grid lg:grid-cols-12 dark:bg-gray-50">
            <div
              data-aos="fade-up"
              className="relative w-full h-64 rounded sm:h-96 lg:col-span-7"
            >
              <img
                role="presentation"
                className="object-cover w-full rounded h-full dark:bg-gray-500"
                src={villas[0].image}
                alt="villa img"
              />
              <p className="absolute top-1 left-2 bg-white text-black px-2 py-1 rounded-md">
                From: {villas[0].price}
              </p>
              <div className="absolute top-3 right-3 text-2xl text-red-500">
                <FaShieldHeart />
              </div>
            </div>
            <div data-aos="fade-left" className="p-6 space-y-2 lg:col-span-5">
              <div className="mb-3 flex items-center justify-between">
                <h3 className=" font-bold text-2xl group-hover:underline group-focus:underline">
                  {villas[0].estate_title}
                </h3>
                <div
                  color="blue-gray"
                  className="flex items-center gap-1.5 font-normal"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="-mt-0.5 h-5 w-5 text-yellow-700"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                      clipRule="evenodd"
                    />
                  </svg>
                  5.0
                </div>
              </div>
              <div className="flex justify-between items-center font-bold text-xs dark:text-gray-600">
                <p
                  className="flex items-center gap-1 "
                  data-aos="zoom-out"
                  data-aos-delay="300"
                  data-aos-duration="1000"
                >
                  <GrMapLocation />
                  {villas[0].location}
                </p>
                <p data-aos="zoom-in" data-aos-delay="200">
                  Area: {villas[0].area}
                </p>
              </div>
              <p className="text-lg text-gray-700">{villas[0].description}</p>
              <div className="group flex flex-wrap items-center justify-between  py-4">
                <Tooltip content={villas[0].price}>
                  <span className="cursor-pointer rounded-full border border-gray-900/5 bg-gray-900/5 p-3 text-gray-900 transition-colors hover:border-gray-900/10 hover:bg-gray-900/10 hover:!opacity-100 group-hover:opacity-70">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="h-5 w-5"
                    >
                      <path d="M12 7.5a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5z" />
                      <path
                        fillRule="evenodd"
                        d="M1.5 4.875C1.5 3.839 2.34 3 3.375 3h17.25c1.035 0 1.875.84 1.875 1.875v9.75c0 1.036-.84 1.875-1.875 1.875H3.375A1.875 1.875 0 011.5 14.625v-9.75zM8.25 9.75a3.75 3.75 0 117.5 0 3.75 3.75 0 01-7.5 0zM18.75 9a.75.75 0 00-.75.75v.008c0 .414.336.75.75.75h.008a.75.75 0 00.75-.75V9.75a.75.75 0 00-.75-.75h-.008zM4.5 9.75A.75.75 0 015.25 9h.008a.75.75 0 01.75.75v.008a.75.75 0 01-.75.75H5.25a.75.75 0 01-.75-.75V9.75z"
                        clipRule="evenodd"
                      />
                      <path d="M2.25 18a.75.75 0 000 1.5c5.4 0 10.63.722 15.6 2.075 1.19.324 2.4-.558 2.4-1.82V18.75a.75.75 0 00-.75-.75H2.25z" />
                    </svg>
                  </span>
                </Tooltip>
                <Tooltip content="Free wifi">
                  <span className="cursor-pointer rounded-full border border-gray-900/5 bg-gray-900/5 p-3 text-gray-900 transition-colors hover:border-gray-900/10 hover:bg-gray-900/10 hover:!opacity-100 group-hover:opacity-70">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="h-5 w-5"
                    >
                      <path
                        fillRule="evenodd"
                        d="M1.371 8.143c5.858-5.857 15.356-5.857 21.213 0a.75.75 0 010 1.061l-.53.53a.75.75 0 01-1.06 0c-4.98-4.979-13.053-4.979-18.032 0a.75.75 0 01-1.06 0l-.53-.53a.75.75 0 010-1.06zm3.182 3.182c4.1-4.1 10.749-4.1 14.85 0a.75.75 0 010 1.061l-.53.53a.75.75 0 01-1.062 0 8.25 8.25 0 00-11.667 0 .75.75 0 01-1.06 0l-.53-.53a.75.75 0 010-1.06zm3.204 3.182a6 6 0 018.486 0 .75.75 0 010 1.061l-.53.53a.75.75 0 01-1.061 0 3.75 3.75 0 00-5.304 0 .75.75 0 01-1.06 0l-.53-.53a.75.75 0 010-1.06zm3.182 3.182a1.5 1.5 0 012.122 0 .75.75 0 010 1.061l-.53.53a.75.75 0 01-1.061 0l-.53-.53a.75.75 0 010-1.06z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                </Tooltip>
                <Tooltip content="3 bedrooms">
                  <span className="cursor-pointer rounded-full border border-gray-900/5 bg-gray-900/5 p-3 text-gray-900 transition-colors hover:border-gray-900/10 hover:bg-gray-900/10 hover:!opacity-100 group-hover:opacity-70">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="h-5 w-5"
                    >
                      <path d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z" />
                      <path d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z" />
                    </svg>
                  </span>
                </Tooltip>
                <Tooltip content={`65" HDTV`}>
                  <span className="hidden md:flex cursor-pointer rounded-full border border-gray-900/5 bg-gray-900/5 p-3 text-gray-900 transition-colors hover:border-gray-900/10 hover:bg-gray-900/10 hover:!opacity-100 group-hover:opacity-70">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="h-5 w-5"
                    >
                      <path d="M19.5 6h-15v9h15V6z" />
                      <path
                        fillRule="evenodd"
                        d="M3.375 3C2.339 3 1.5 3.84 1.5 4.875v11.25C1.5 17.16 2.34 18 3.375 18H9.75v1.5H6A.75.75 0 006 21h12a.75.75 0 000-1.5h-3.75V18h6.375c1.035 0 1.875-.84 1.875-1.875V4.875C22.5 3.839 21.66 3 20.625 3H3.375zm0 13.5h17.25a.375.375 0 00.375-.375V4.875a.375.375 0 00-.375-.375H3.375A.375.375 0 003 4.875v11.25c0 .207.168.375.375.375z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                </Tooltip>
                <Tooltip content="Fire alert">
                  <span className="hidden md:flex cursor-pointer rounded-full border border-gray-900/5 bg-gray-900/5 p-3 text-gray-900 transition-colors hover:border-gray-900/10 hover:bg-gray-900/10 hover:!opacity-100 group-hover:opacity-70">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="h-5 w-5"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12.963 2.286a.75.75 0 00-1.071-.136 9.742 9.742 0 00-3.539 6.177A7.547 7.547 0 016.648 6.61a.75.75 0 00-1.152-.082A9 9 0 1015.68 4.534a7.46 7.46 0 01-2.717-2.248zM15.75 14.25a3.75 3.75 0 11-7.313-1.172c.628.465 1.35.81 2.133 1a5.99 5.99 0 011.925-3.545 3.75 3.75 0 013.255 3.717z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                </Tooltip>
                <Tooltip content="And +20 more">
                  <span className="cursor-pointer rounded-full border border-gray-900/5 bg-gray-900/5 p-3 text-gray-900 transition-colors hover:border-gray-900/10 hover:bg-gray-900/10 hover:!opacity-100 group-hover:opacity-70">
                    +20
                  </span>
                </Tooltip>
              </div>
              <Link
                to={`/estatedetails/${parseInt(villas[0].id)}`}
                className="w-full"
              >
                <button className="btn btn-outline w-full border-secondary uppercase">
                  View Property
                </button>
              </Link>
            </div>
          </div>
          <div className="grid justify-center mx-auto grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filteredVillas.slice(1, 10).map((villa) => (
              <Villa deletable={false} key={villa.id} villa={villa} />
            ))}
          </div>
        </div>
        <ContactForm />
      </section>
    </div>
  );
};

export default Villas;
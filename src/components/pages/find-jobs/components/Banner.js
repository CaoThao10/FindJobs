import { SearchOutlined } from "@ant-design/icons";
import React from "react";

const Banner = () => {
  return (
    <div className="flex flex-col justify-center items-center w-full">
      <div className="w-[350px] h-[350px] lg:w-[1140px] g:h-[260px] bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-[#892ae7] via-[#b85982] to-[#f86f0e] rounded-3xl">
        <div className="w-full h-full items-center justify-center flex flex-col text-center">
          <h1 className="g:text-6xl text-4xl text-white font-bold">
            Finding a job
          </h1>
          <h3 className="text-white mt-5">
            When you’re searching for a job, there are a few things you can do{" "}
            <br />
            to get the most out of your search
          </h3>
        </div>
      </div>
      <div className="relative lg:bottom-[30px] bottom-[17px]  border-gray-300 gap-5 bg-white border flex items-center justify-between lg:h-[65px] lg:w-[890px] w-[300px] h-[35px] rounded-full lg:px-3 px-1 ">
        <div className="flex gap-5 items-center w-full ml-5">
          <SearchOutlined />
          <input
            className="w-full outline-none"
            type="text"
            placeholder="Job title or keyword"
          />
        </div>
        <div className="bg-black lg:px-5 lg:py-3 p-1 rounded-full">
          <button className="text-white">Search</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;

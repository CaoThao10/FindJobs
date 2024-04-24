import React from "react";
import { SearchOutlined } from "@ant-design/icons";
import Card from "../../../layout/Card";

const TrendingJobs = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center my-10">
      <div className="lg:w-[1140px] w-[350px]">
        <div className="flex justify-between">
          <h3 className="lg:text-2xl text-lg font-extrabold">Trending jobs</h3>
          <button className="font-bold text-sm lg:text-lg bg-blue-100 px-3 py-2 rounded-full hover:opacity-80">
            See all jobs
          </button>
        </div>
        <div className="lg:grid lg:grid-cols-3 flex flex-col gap-8 mt-10">
          <Card
            jobTitle="Sales Consultant"
            location="San Francisco, CA / Full-time"
            salary="$187,300"
            imageUrl="https://framerusercontent.com/images/BxoMNq5iSIdYCfbg2xMtqqn4wk.jpg?scale-down-to=4096"
            author="Avg. salary"
          ></Card>
          <Card
            jobTitle="Private Jet Sales Consultant"
            location="Greenwich, NY / Hybrid Remote"
            salary="$150,000"
            imageUrl="https://framerusercontent.com/images/4OOS8gnrx73SvkFOXJKIVQhKwk0.jpg?scale-down-to=4096"
            author="Avg. salary"
          ></Card>
          <Card
            jobTitle="Rate Sales Analyst"
            location="New York, NY / Full-time"
            salary=" $195,700"
            imageUrl="https://framerusercontent.com/images/y8QwIHRPBB5yQ9yPfaarfC2MDc.jpg?scale-down-to=4096"
            author="Avg. salary"
          ></Card>
        </div>
        <div className="lg:grid lg:grid-cols-2 rounded-3xl flex flex-col gap-10 lg:h-[465px] mt-20 lg:overflow-hidden">
          <div className="lg:relative lg:h-[465px] border p-5 lg:p-0 lg:border-none lg:overflow-hidden rounded-3xl  bg-[#fcfcfd]">
            <div className="lg:absolute bottom-0">
              <img
                className="opacity-60 lg:w-full lg:h-full object-cover hidden lg:flex"
                src="/9.jpg"
                alt=""
              />
            </div>
            <div className="lg:absolute lg:top-10 lg:left-10 flex flex-col gap-5">
              <h3 className="text-[#982aff] font-medium">Recommended jobs</h3>
              <h1 className="text-3xl font-extrabold">
                Explore suggested <br /> job searches
              </h1>
              <h3 className="text-[#2f2f2f]">
                Along conventional advertising and below the line activities,
                organizations and corporate have come to realize that they need
                to invest.
              </h3>
            </div>
          </div>
          <div className=" flex flex-col p-3 lg:p-0 gap-3 justify-center items-center rounded-3xl bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))]  from-[#f16c1b] via-[#b55688] to-[#8a2be5]">
            <div className="flex gap-2 lg:gap-4">
              <div className="bg-white p-1 lg:px-3 lg:py-2 text-sm lg:text-lg rounded-full font-semibold flex justify-center items-center gap-2">
                Co-founder <SearchOutlined />
              </div>
              <div className="bg-white p-1 lg:px-3 lg:py-2 text-sm lg:text-lg rounded-full font-semibold flex justify-center items-center gap-2">
                Sales <SearchOutlined />
              </div>
              <div className="bg-white p-1 lg:px-3 lg:py-2 text-sm lg:text-lg rounded-full font-semibold flex justify-center items-center gap-2">
                Developer <SearchOutlined />
              </div>
            </div>
            <div className="flex gap-2 lg:gap-4">
              <div className="bg-white p-1 lg:px-3 lg:py-2 text-sm lg:text-lg rounded-full font-semibold flex justify-center items-center gap-2">
                Project Manager <SearchOutlined />
              </div>
              <div className="bg-white p-1 lg:px-3 lg:py-2 text-sm lg:text-lg rounded-full font-semibold flex justify-center items-center gap-2">
                Developer <SearchOutlined />
              </div>
            </div>
            <div className="flex gap-2 lg:gap-4">
              <div className="bg-white p-1 lg:px-3 lg:py-2 text-sm lg:text-lg rounded-full font-semibold flex justify-center items-center gap-2">
                Personal Assistant <SearchOutlined />
              </div>
              <div className="bg-white p-1 lg:px-3 lg:py-2 text-sm lg:text-lg rounded-full font-semibold flex justify-center items-center gap-2">
                Board Member <SearchOutlined />
              </div>
            </div>
            <div className="flex gap-2 lg:gap-4">
              <div className="bg-white p-1 lg:px-3 lg:py-2 text-sm lg:text-lg rounded-full font-semibold flex justify-center items-center gap-2">
                HR Assistant <SearchOutlined />
              </div>
              <div className="bg-white p-1 lg:px-3 lg:py-2 text-sm lg:text-lg rounded-full font-semibold flex justify-center items-center gap-2">
                Entrepreneur in Residence <SearchOutlined />
              </div>
            </div>
            <div className="flex gap-2 lg:gap-4">
              <div className="bg-white p-1 lg:px-3 lg:py-2 text-sm lg:text-lg rounded-full font-semibold flex justify-center items-center gap-2">
                Designer <SearchOutlined />
              </div>
              <div className="bg-white p-1 lg:px-3 lg:py-2 text-sm lg:text-lg rounded-full font-semibold flex justify-center items-center gap-2">
                Founding Partner <SearchOutlined />
              </div>
              {/* <div className="bg-white p-1 lg:px-3 lg:py-2 text-sm lg:text-lg rounded-full font-semibold flex justify-center items-center gap-2">
                Managing Director
                <SearchOutlined />
              </div> */}
            </div>
            <div className="flex gap-2 lg:gap-4">
              <div className="bg-white p-1 lg:px-3 lg:py-2 text-sm lg:text-lg rounded-full font-semibold flex justify-center items-center gap-2">
                Financial Advisor <SearchOutlined />
              </div>
              <div className="bg-white p-1 lg:px-3 lg:py-2 text-sm lg:text-lg rounded-full font-semibold flex justify-center items-center gap-2">
                Customers Operator <SearchOutlined />
              </div>
            </div>
            <div className="flex gap-2 lg:gap-4">
              <div className="bg-white p-1 lg:px-3 lg:py-2 text-sm lg:text-lg rounded-full font-semibold flex justify-center items-center gap-2">
                Data Analyst <SearchOutlined />
              </div>
              <div className="bg-white p-1 lg:px-3 lg:py-2 text-sm lg:text-lg rounded-full font-semibold flex justify-center items-center gap-2">
                Dispatcher <SearchOutlined />
              </div>
              <div className="bg-white p-1 lg:px-3 lg:py-2 text-sm lg:text-lg rounded-full font-semibold flex justify-center items-center gap-2">
                Coach <SearchOutlined />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrendingJobs;

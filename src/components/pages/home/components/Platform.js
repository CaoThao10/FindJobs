import React from "react";

const Platform = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center lg:my-[100px] my-[50px]">
      <div className="lg:w-[1000px] lg:flex lg:flex-row flex-col  justify-center items-center">
        <div className="lg:w-[60%] flex flex-col gap-5 lg:items-start lg:justify-start items-center text-center lg:text-start justify-center p-5 lg:p-0">
          <div>
            <svg
              width="30"
              height="30"
              viewBox="0 0 16 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11 10L10 12L12 12C14.21 12 16 9.21 16 7L16 0L9 -6.11959e-07L9 7L13 7C13 10 11 10 11 10ZM4 7C4 10 2 10 2 10L1 12L3 12C5.21 12 7 9.21 7 7L7 -7.86805e-07L1.04907e-06 -1.39876e-06L4.37114e-07 7L4 7Z"
                fill="#ac40a7"
              />
            </svg>
          </div>
          <div>
            <h1 className="lg:text-3xl text-2xl font-extrabold">
              Our platform is so easy to use. We’ve hired 40-50 different people
              worldwide in the past two years.
            </h1>
          </div>
          <div className="">
            <h3 className="font-bold">Lubosek Hnilo</h3>
            <h3>Founder at Workze Inc.</h3>
          </div>
        </div>
        <div className="lg:w-[40%] lg:h-[250px] h-[50px]  flex items-center justify-center">
          <img
            className="lg:w-[250px] w-[50px] h-[50px] lg:h-full object-cover rounded-full"
            src="https://framerusercontent.com/images/tUBZn1yb8AwSXJl6FTNBkaLaw0.jpg?scale-down-to=4096"
            alt=""
          />
        </div>
      </div>
      <div className="lg:mt-[100px] my-[50px]">
        <div className="lg:w-[1140px] gap-3 w-[350px] flex lg:flex-row flex-col  justify-between lg:p-12 p-5 rounded-3xl items-center bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-[#892ae7] via-[#b85982] to-[#f86f0e]">
          <div className="flex flex-col gap-3">
            <h2 className="text-3xl font-extrabold text-white">
              Ready for your next hire?
            </h2>
            <h3 className="text-white">
              Along with conventional advertising and below the line activities,
              organizations and <br /> corporate bodies have come to realize
              that they need to invest.
            </h3>
          </div>
          <div className="text-white text-sm lg:text-xl bg-black font-bold lg:px-4 lg:py-2 p-2 rounded-xl lg:rounded-full">
            <button>Apply and Start Today</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Platform;

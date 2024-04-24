import React from "react";

const NoteBanner = ({ title, subtitle, imageUrl, content }) => {
  return (
    <>
      <div className="lg:w-[940px] w-[350px] flex justify-center items-center">
        <div className="flex flex-col text-center justify-center items-center gap-3">
          <h3 className="lg:text-6xl text-5xl font-extrabold">{title}</h3>
          <h3 className="text-[#4d4d4d]">{subtitle}</h3>
        </div>
      </div>
      <div className="lg:w-[1140px] lg:h-[420px] rounded-2xl overflow-hidden lg:mt-[100px] mt-[50px]">
        <img className="h-full w-full object-cover" src={imageUrl} alt="" />
      </div>
    </>
  );
};

export default NoteBanner;

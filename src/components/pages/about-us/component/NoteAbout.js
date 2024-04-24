import React from "react";
import NoteBanner from "../../../layout/NoteBanner";

const NoteAbout = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center my-[100px]">
      <div className="lg:w-[1140px] w-[350px] flex flex-col justify-center items-center">
        <NoteBanner
          title="About us"
          subtitle=" When you’re searching for a job, there are a few things you can do to get the most out of your search"
          imageUrl="/13.webp"
        ></NoteBanner>
      </div>
      <div className="lg:w-[940px] w-[350px] flex flex-col justify-center items-start mt-[100px] gap-3">
        <h3 className="text-[#a45ff1]">Our missions, goals, and values</h3>
        <h1 className="text-2xl font-extrabold">
          In any industry where the people behind a company are as important as
          the company itself, you’re likely to find a kind of expanded page that
          includes information on individual employees.
        </h1>
      </div>
      <div className="lg:h-[465px] lg:w-[945px] lg:grid lg:grid-cols-2 flex flex-col gap-5 mt-[70px] p-5">
        <div className="flex flex-col gap-5 h-full">
          <div className="bg-[#eef0fd] p-10 h-[220px] justify-center flex flex-col rounded-2xl ">
            <h3 className="font-extrabold">Our missions</h3>
            <h3>
              Certain things catch your eye, but pursue only those that capture
              the heart. We become what we think about. The person who says it
              cannot be done should
            </h3>
          </div>
          <div className="bg-[#eef0fd] p-10 h-[220px] justify-center flex flex-col rounded-2xl">
            <h3 className="font-extrabold">Our values</h3>
            <h3>
              Life is what happens to you while you’re busy making other plans.
              Build your own dreams, or someone else will hire you to build
              theirs.
            </h3>
          </div>
        </div>
        <div className="  rounded-3xl h-[465px] p-10 bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))]  from-[#f16c1b] via-[#b55688] to-[#8a2be5]">
          <h3 className="text-2xl font-extrabold text-white">
            I needed a change, to be able to make more money and have a life
            outside my job. Work App helped me discover something better.
          </h3>
          <div className=" flex gap-3 lg:mt-[180px] mt-[130px]">
            <div className="w-[45px] h-[45px]">
              <img
                className="w-full h-full object-cover rounded-full"
                src="/6.jpg"
                alt=""
              />
            </div>
            <div className="text-white">
              <h3 className="font-medium">Naseema Al Morad</h3>
              <h3>Developer at Dropbox Inc.</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NoteAbout;

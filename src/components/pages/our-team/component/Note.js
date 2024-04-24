import React from "react";
import NoteBanner from "../../../layout/NoteBanner";

const Note = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center lg:my-[100px] mt-[50px]">
      <div className="lg:w-[1140px] w-[350px] flex flex-col justify-center items-center">
        <NoteBanner
          title="Our Team"
          subtitle=" When you’re searching for a job, there are a few things you can do
            to  get the most out of your search"
          imageUrl="/12.webp"
        ></NoteBanner>
      </div>
      <div className="lg:w-[940px] w-[350px] p-3 flex flex-col gap-4 mt-[50px] text-[#404040]">
        <h3>
          In any industry where the people behind a company are as important as
          the company itself, you’re likely to find a kind of expanded “about”
          page that includes information on individual employees. “Meet the
          Team” pages are popular among web design and other creative firms, but
          are also found on sites within various other industries. These pages
          are a valuable addition to any site where human contact is an
          important part of the industry. It adds a personal touch to the
          company and can lend trust to visitors.
        </h3>
        <h3>
          Highlighting your team’s strengths and expressing your agency’s
          profile is always a good idea. Plus, detailing the responsibilities of
          your team members would be a great addition, as seeing the talents of
          your team might be something your visitors are especially interested
          in. Creating a page adds to your company’s brand value. Let your
          prospective clients know who you are and what you do best. While doing
          that, don’t forget to let your team members shine with their unique
          talents.
        </h3>
      </div>
      <div className="lg:w-[750px] lg:grid lg:grid-cols-3  flex flex-col gap-5 mt-[50px]">
        <div className="flex flex-col gap-3 border lg:p-0 p-5 lg:border-none rounded-lg w-[300px] lg:w-full lg:items-start lg:justify-start  justify-center items-center">
          <h3 className="text-[#a45ff1] font-medium">Founded</h3>
          <h3 className="text-6xl font-extrabold">2023</h3>
          <h3 className="text-[#404040]">When we founded</h3>
        </div>
        <div className="flex flex-col gap-3 border lg:p-0 p-5 lg:border-none rounded-lg w-[300px] lg:w-full lg:items-start lg:justify-start  justify-center items-center">
          <h3 className="text-[#a45ff1] font-medium">Customers</h3>
          <h3 className="text-6xl font-extrabold">16k+</h3>
          <h3 className="text-[#404040]">Merchants worldwide</h3>
        </div>
        <div className="flex flex-col gap-3 border lg:p-0 p-5 lg:border-none rounded-lg w-[300px] lg:w-full lg:items-start lg:justify-start  justify-center items-center">
          <h3 className="text-[#a45ff1] font-medium">Growth</h3>
          <h3 className="text-6xl font-extrabold">96%</h3>
          <h3 className="text-[#404040]">Revenue growth</h3>
        </div>
      </div>
    </div>
  );
};

export default Note;

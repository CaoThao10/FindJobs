import React from "react";
import { CalendarOutlined } from "@ant-design/icons";

const CardJobs = ({
  jobTitle,
  location,
  imageUrl,
  employmentType,
  avgSalary,
  categories,
  date,
}) => {
  return (
    <div className="lg:w-[940px] w-[350px] flex lg:flex-row flex-col justify-between lg:h-[150px] h-[200px] border border-gray-200 rounded-3xl">
      <div className="flex  lg:gap-3 gap-1 lg:p-5 p-2">
        <div className="lg:w-[50px] lg:h-[50px] h-[30px] w-[30px]">
          <img
            className="lg:w-[50px] lg:h-[50px] h-[30px] w-[30px] object-cover rounded-full"
            src={imageUrl}
            alt=""
          />
        </div>
        <div>
          <h3 className="font-bold text-md lg:text-lg">{jobTitle}</h3>
          <h3 className="text-sm lg:text-lg">
            {location} / {employmentType} / Avg.Salary ${avgSalary}
          </h3>
          <div className="flex text-[#8091c2] font-semibold gap-3 mt-3">
            {categories.map((category, index) => (
              <h3 key={index} className="bg-blue-50 p-3 rounded-full">
                {category}
              </h3>
            ))}
          </div>
        </div>
      </div>
      <div className="h-full flex items-end p-5 font-semibold">
        <div>
          <CalendarOutlined /> {date}
        </div>
      </div>
    </div>
  );
};

export default CardJobs;

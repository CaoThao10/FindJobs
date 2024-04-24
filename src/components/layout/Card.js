import React from "react";

const Card = ({ jobTitle, location, salary, imageUrl, author }) => {
  return (
    <div className="border border-gray-300 border-t-0 p-8 rounded-xl hover:shadow-lg flex flex-col gap-5">
      <div className="w-[60px] h-[60px]">
        <img
          className=" w-full h-full object-cover rounded-full"
          src={imageUrl}
          alt=""
        />
      </div>
      <div>
        <h2 className="text-lg font-extrabold">{jobTitle}</h2>
        <h3 className="text-[#8f8f8f]">{location}</h3>
      </div>
      <div className="flex gap-3 items-center">
        {salary && (
          <button className="border border-gray-300 rounded-full px-4 py-2 font-bold">
            {salary}
          </button>
        )}
        {!salary && (
          <button className="border border-gray-300 rounded-full  font-bold"></button>
        )}
        <h4 className="text-[#4e4e4e]">{author}</h4>
      </div>
    </div>
  );
};

export default Card;

import {
  FacebookOutlined,
  InstagramOutlined,
  TwitterOutlined,
} from "@ant-design/icons";
import React from "react";

const CardPerson = ({ imageUrl, name, role, description }) => {
  return (
    <div className="flex flex-col justify-center items-center text-center gap-3 mt-5  bg-slate-100 lg:bg-white rounded-2xl p-5">
      <div className="h-[80px] w-[80px]">
        <img
          className="h-full w-full object-cover rounded-full"
          src={imageUrl}
          alt=""
        />
      </div>
      <div>
        <h3 className="text-xl font-bold">{name}</h3>
        <h2 className="text-[#b370ff] font-medium">{role}</h2>
      </div>
      <h3 className="text-[#4e4d4d]">{description}</h3>
      <div className="flex gap-3">
        <a href="/">
          <FacebookOutlined />
        </a>
        <a href="/">
          {" "}
          <TwitterOutlined />
        </a>
        <a href="/">
          <InstagramOutlined />
        </a>
      </div>
    </div>
  );
};

export default CardPerson;

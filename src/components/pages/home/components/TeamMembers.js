import React from "react";
import Card from "../../../layout/Card";

const TeamMembers = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center my-[50px]">
      <div className="lg:w-[1140px] w-[350px]">
        <div className="flex justify-between">
          <h3 className="lg:text-2xl text-xl font-extrabold">Team members</h3>
          <button className="font-bold bg-blue-100 lg:px-3 lg:py-2 p-1 rounded-full hover:opacity-80">
            Learn more
          </button>
        </div>
        <div className="lg:grid lg:grid-cols-3 flex flex-col gap-8 mt-10">
          <Card
            jobTitle="Emmalynn Mazzia"
            location="London / Construction Manager"
            imageUrl="https://framerusercontent.com/images/5AR5WjJxyvJ43labZsGKHxyRNaw.jpg?scale-down-to=512"
          ></Card>
          <Card
            jobTitle="Tamas Bunce"
            location="New York / Fitness Trainer"
            imageUrl="https://framerusercontent.com/images/qDkrbsiOQl9xuHVKVOtkU89kjpg.jpg?scale-down-to=4096"
          ></Card>
          <Card
            jobTitle="Luis Calvillo"
            location="London / Teacher Assistant"
            imageUrl="https://framerusercontent.com/images/0HYYNftloDnxGMcOWJhKr7R1jQ.jpg?scale-down-to=4096"
          ></Card>
        </div>
      </div>
    </div>
  );
};

export default TeamMembers;

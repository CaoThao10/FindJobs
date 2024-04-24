import React from "react";
import CardPerson from "./CardPerson";

const MeetTeam = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center lg:my-[100px] my-[50px]">
      <div className="lg:w-[940px] w-[350px] flex justify-center items-center">
        <div className="h-[210px] w-full bg-[#f4f4fd] rounded-3xl flex flex-col justify-center items-center text-center gap-3">
          <h3 className="text-4xl font-extrabold">Meet the team</h3>
          <h3>
            Massive Media is an independent branding and experience design
            agency with a great variety of services, such as branding,
            marketing, and web design. The Vancouver-based agency has a modern
            and elegant website.
          </h3>
        </div>
      </div>
      <div className="lg:w-[940px] w-[350px] lg:grid lg:grid-cols-3 flex flex-col gap-5 my-[50px]">
        <CardPerson
          imageUrl="/4.jpg"
          name="Jurriaan Broek"
          role="Design"
          description="In any industry where the people a company are as the company"
        ></CardPerson>
        <CardPerson
          imageUrl="/2.jpg"
          name="Regina Pollastro"
          role="Development"
          description="Independent branding and experience agency and website"
        ></CardPerson>
        <CardPerson
          imageUrl="/6.jpg"
          name="Sukhnam Chander"
          role="Support"
          description="Massive Media and their core values full-service agency that combines

"
        ></CardPerson>
        <CardPerson
          imageUrl="/3.jpg"
          name="Indu Chakarvarti"
          role="Development"
          description="The page explains why you want to work with Major Tom and allows"
        ></CardPerson>
        <CardPerson
          imageUrl="/7.jpg"
          name="Alexa Richardson"
          role="Management"
          description="Embellished with retro illustrations, a short, to-the-point design explains"
        ></CardPerson>
        <CardPerson
          imageUrl="/1.jpg"
          name="Amelia Cabal"
          role="Photograph"
          description="Contains info about the members and the agency the services provided"
        ></CardPerson>
      </div>
    </div>
  );
};

export default MeetTeam;

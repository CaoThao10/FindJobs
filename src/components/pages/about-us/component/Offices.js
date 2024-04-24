import React from "react";

const Offices = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center my-[100px]">
      <div className="lg:w-[940px] lg:p-0 p-5 flex flex-col justify-center items-center">
        <div className="w-full flex flex-col ">
          <h3 className="text-[#a45ff1]">Our offices and locations</h3>
          <h1 className="text-2xl font-extrabold mt-3">
            The page displays hilarious images of the core team working from one
            of the team member’s while they still had no office space.
          </h1>
        </div>
        <div className="lg:grid lg:grid-cols-2 flex p-3 gap-5 h-[220px] justify-center items-center mt-[50px]">
          <div className="lg:h-[220px] lg:w-[450px] w-[200px]">
            <img
              className="h-full w-full object-cover rounded-2xl"
              src="14.webp"
              alt=""
            />
          </div>
          <div className="lg:pl-[50px] text-sm lg:text-lg">
            <div className="flex gap-3 font-extrabold">
              <div className="w-[25px] h-[25px]">
                <img
                  className="h-full w-full object-cover rounded-2xl"
                  src="15.webp"
                  alt=""
                />
              </div>
              <h3>Germany, Berlin</h3>
            </div>
            <h3>Storkower Strasse 41</h3>
            <h3>Rheinland-Pfalz</h3>
            <h3>+49 02608 95 88 47</h3>
            <h3>56379</h3>
          </div>
        </div>
        <div className="lg:grid lg:grid-cols-2 gap-5 p-3 flex lg:h-[220px] justify-center items-center mt-[50px]">
          <div className="lg:pl-[50px] text-sm lg:text-lg">
            <div className="flex gap-3 font-extrabold">
              <div className="w-[25px] h-[25px]">
                <img
                  className="h-full w-full object-cover rounded-2xl"
                  src="16.webp"
                  alt=""
                />
              </div>
              <h3>Spain, Madrid</h3>
            </div>
            <h3>Maestro Puig Valera 82</h3>
            <h3>Grandas De Salime</h3>
            <h3>+34 744 180 148</h3>
            <h3>33730</h3>
          </div>
          <div className="lg:h-[220px] lg:w-[450px] w-[200px]">
            <img
              className="h-full w-full object-cover rounded-2xl"
              src="18.webp"
              alt=""
            />
          </div>
        </div>
        <div className="lg:grid lg:grid-cols-2 gap-5 p-3 flex lg:h-[220px] justify-center items-center mt-[50px]">
          <div className="lg:h-[220px] lg:w-[450px] w-[200px]">
            <img
              className="h-full w-full object-cover rounded-2xl"
              src="19.webp"
              alt=""
            />
          </div>
          <div className="lg:pl-[50px] text-sm lg:text-lg">
            <div className="flex gap-3 font-extrabold">
              <div className="w-[25px] h-[25px]">
                <img
                  className="h-full w-full object-cover rounded-2xl"
                  src="17.png"
                  alt=""
                />
              </div>
              <h3> London</h3>
            </div>
            <h3>37 Telford Street</h3>
            <h3>Upper Rochford</h3>
            <h3>+44 070 4871 1731</h3>
            <h3>KA10 5FL</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Offices;

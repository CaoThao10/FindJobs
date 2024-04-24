import { MailOutlined, PhoneOutlined } from "@ant-design/icons";
import React from "react";

const Map = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center mt-[50px] mb-[100px]">
      <div className="lg:w-[1140px] w-[350px] lg:grid lg:grid-cols-2 gap-10 justify-center items-center">
        <div>
          <img className="rounded-2xl" src="20.png" alt="" />
        </div>
        <div className="flex flex-col gap-5  p-10">
          <div className="flex flex-col gap-3 text-center p-5">
            <h3 className="text-4xl font-extrabold">Contact Us</h3>
            <h3>
              Become our team member, apply for the job post today and send us
              your detailed CV.
            </h3>
          </div>
          <div className="flex flex-col bg-[#ebf6fe] rounded-2xl p-5">
            <h3 className="font-extrabold">Headquarter office</h3>
            <h3>Storkower Strasse 41</h3>
            <h3>Rheinland-Pfalz</h3>
            <h3>56379</h3>
            <h3>Germany, Berlin</h3>
          </div>
          <div className="flex border items-center gap-5 rounded-2xl p-5 h-[95px]">
            <PhoneOutlined />
            <div>
              <h3 className="font-extrabold">+49 02608 95 88 47</h3>
              <h3>Call us</h3>
            </div>
          </div>
          <div className="flex border items-center gap-5 rounded-2xl p-5 h-[95px]">
            <MailOutlined />
            <div>
              <h3 className="font-extrabold">support@workze.com</h3>
              <h3>Send your email</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Map;

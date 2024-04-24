import {
  FacebookOutlined,
  InstagramOutlined,
  LinkedinOutlined,
  PinterestOutlined,
  TwitterOutlined,
} from "@ant-design/icons";
import React from "react";

const Footerr = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center mt-[50px]">
      <div className="lg:w-[1140px] w-[350px]">
        <div className="w-full lg:grid lg:grid-cols-4 flex flex-col justify-center pl-10 lg:pl-0 gap-6">
          <div className="flex flex-col gap-3">
            <div className="h-[40px]">
              <img
                className="h-full  object-cover"
                src="https://framerusercontent.com/images/0mBgJmpKBfrVMW7TzdewceK3reg.png"
                alt=""
              />
            </div>
            <div className="list-none text-[#4e4e4e]">
              <li>
                <a href="/"> Workze Inc., </a>
              </li>
              <li>
                <a href="/"> Storkower Strasse </a>
              </li>
              <li>
                <a href="/"> 41Rheinland-Pfalz,56379, </a>
              </li>
              <li>
                <a href="/"> Germany </a>
              </li>
              <li>
                <a href="/"> Mail@workze.xyz </a>
              </li>
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <div className="h-[40px]">
              <h3 className="font-bold">Landing Pages</h3>
            </div>
            <div className="list-none text-[#4e4e4e]">
              <li>
                <a href="/"> Landing Page Startup </a>
              </li>
              <li>
                <a href="/"> Landing Page Corporate </a>
              </li>
              <li>
                <a href="/"> Landing Page Minimal </a>
              </li>
              <li>
                <a href="/"> Coming Soon </a>
              </li>
              <li>
                <a href="/"> Page 404 </a>
              </li>
              <li>
                <a href="/"> Apply for a job </a>
              </li>
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <div className="h-[40px]">
              <h3 className="font-bold">About Pages</h3>
            </div>
            <div className="list-none text-[#4e4e4e]">
              <li>
                <a href="/"> About Us </a>
              </li>
              <li>
                <a href="/"> Our Team </a>
              </li>
              <li>
                <a href="/"> User Profile Modern </a>
              </li>
              <li>
                <a href="/"> User Profile Centered </a>
              </li>
              <li>
                <a href="/"> Contact Us </a>
              </li>
              <li>
                <a href="/"> Style Guide </a>
              </li>
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <div className="h-[40px]">
              <h3 className="font-bold">Job Search</h3>
            </div>
            <div className="list-none text-[#4e4e4e]">
              <li>
                <a href="/"> Job List </a>
              </li>
              <li>
                <a href="/"> Job List Corporate </a>
              </li>
              <li>
                <a href="/"> Job List Sidebar </a>
              </li>
              <li>
                <a href="/"> Job List Minimal </a>
              </li>
              <li>
                <a href="/"> Job Overview </a>
              </li>
              <li>
                <a href="/"> Job Overview Centered </a>
              </li>
              <li>
                <a href="/"> Job Overview Minimal </a>
              </li>
            </div>
          </div>
        </div>
      </div>
      <div className="lg:w-[1140px] w-[350px] flex lg:flex-row flex-col items-center lg:justify-between mt-10 border-t-2 py-5">
        <div className="flex gap-5">
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
          <a href="/">
            <LinkedinOutlined />
          </a>
          <a href="/">
            <PinterestOutlined />
          </a>
        </div>
        <div>
          <h3 className="text-[#4e4e4e]">© 2023 All rights reserved</h3>
        </div>
      </div>
    </div>
  );
};

export default Footerr;

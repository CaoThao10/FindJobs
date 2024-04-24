// import React from "react";
// import { Link } from "react-router-dom";

// const Header = () => {
//   return (
//     <div className="flex justify-center w-full">
//       <div className="flex w-[1140px] h-[80px] justify-between  items-center">
//         <Link to="/" className="h-[60px] py-[10px]">
//           <img
//             className="h-full w-full"
//             src="https://framerusercontent.com/images/0mBgJmpKBfrVMW7TzdewceK3reg.png"
//             alt=""
//           />
//         </Link>
//         <div className="h-[60px] p-[10px] flex gap-5 items-center font-bold">
//           <Link to="/find-jobs">Find Jobs</Link>
//           <Link to="/our-team">Our Team</Link>
//           <Link to="/about-us">About Us</Link>
//           <Link to="/contact-us">Contact Us</Link>
//           <Link className="bg-[#f5f5fa] p-3 rounded-3xl" to="/purchase">
//             Purchase
//           </Link>
//           {/* <Link to="/pages">Pages</Link> */}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Header;

import React, { useState } from "react";
import { Link } from "react-router-dom";
import { MenuOutlined } from "@ant-design/icons";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className="flex justify-center w-full pl-3 lg:pl-0">
      <div className="flex w-[1140px] h-[80px] justify-between items-center">
        <Link to="/" className="h-[60px] py-[10px]">
          <img
            className="h-full w-full"
            src="https://framerusercontent.com/images/0mBgJmpKBfrVMW7TzdewceK3reg.png"
            alt=""
          />
        </Link>
        <div className="h-[60px] p-[10px] flex items-center justify-center font-bold">
          <div className="hidden lg:flex gap-5 lg:items-center lg:justify-center">
            <Link to="/find-jobs">Find Jobs</Link>
            <Link to="/our-team">Our Team</Link>
            <Link to="/about-us">About Us</Link>
            <Link to="/contact-us">Contact Us</Link>
            <Link className="bg-[#f5f5fa] p-3 rounded-3xl" to="/purchase">
              Purchase
            </Link>
          </div>
          <div className="lg:hidden">
            <MenuOutlined onClick={toggleMenu} style={{ fontSize: "24px" }} />
          </div>
        </div>
      </div>
      {showMenu && (
        <div className="lg:hidden absolute top-[80px] left-0 w-full bg-white">
          <div className="flex flex-col gap-3 items-center py-3">
            <Link to="/find-jobs">Find Jobs</Link>
            <Link to="/our-team">Our Team</Link>
            <Link to="/about-us">About Us</Link>
            <Link to="/contact-us">Contact Us</Link>
            <Link className="bg-[#f5f5fa] p-3 rounded-3xl" to="/purchase">
              Purchase
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;

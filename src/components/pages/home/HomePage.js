import React from "react";
import Header from "../../layout/Header";
import BannerHome from "./components/BannerHome";
import TrendingJobs from "./components/TrendingJobs";
import TeamMembers from "./components/TeamMembers";
import Platform from "./components/Platform";
import Footerr from "../../layout/Footerr";

const HomePage = () => {
  return (
    <>
      <Header></Header>
      <BannerHome></BannerHome>
      <TrendingJobs></TrendingJobs>
      <TeamMembers></TeamMembers>
      <Platform></Platform>
      <Footerr></Footerr>
    </>
  );
};

export default HomePage;

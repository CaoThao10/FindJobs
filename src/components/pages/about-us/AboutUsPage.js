import React from "react";
import Header from "../../layout/Header";
import NoteAbout from "./component/NoteAbout";
import Offices from "./component/Offices";
import Platform from "../home/components/Platform";
import Footerr from "../../layout/Footerr";

const AboutUsPage = () => {
  return (
    <>
      <Header></Header>
      <NoteAbout></NoteAbout>
      <Offices></Offices>
      <Platform></Platform>
      <Footerr></Footerr>
    </>
  );
};

export default AboutUsPage;

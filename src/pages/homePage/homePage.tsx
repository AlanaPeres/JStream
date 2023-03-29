import * as React from "react";
import NavBar from "../../components/navBar/navBar";
import { Homedesktop } from "../../components/homeDesktop/homeDesktop";
import { HomeMobile } from "../../components/homeMobile/homeMobile";

export const Homepage = () => {
  return (
    <>
      <NavBar />
      <Homedesktop />
      <HomeMobile />
    </>
  );
};

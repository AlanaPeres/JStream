import * as React from "react";
import imagedesktop from "../../assets/home_image.png";
import logo from "../../assets/logo dark.png";
import './homeDesktop.css';

export const Homedesktop = () => {
  return (
    <>
      <img className="imagem" src={imagedesktop} width="500rem" alt="" />
      <img className="logotipo" src={logo} width="250rem" alt="" />
    </>
  );
};

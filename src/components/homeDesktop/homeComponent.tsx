import * as React from "react";
import imagedesktop from "../../assets/home_image.png";
import logo from "../../assets/logo dark.png";
import "./homeComponent.css";

export const Homedesktop = () => {
  return (
    <>
      <div className="container">
        <img className="imagem" src={imagedesktop} width="500rem" alt="" />
        <img className="logotipo" src={logo} width="250rem" alt="" />
        <h1 className="soft">
          Soft <span>Finance</span>
        </h1>
      <button className="this_button">Entrar</button>
      <button className="this_button">Registrar</button>
      </div>
    </>
  );
};

import * as React from "react";
import imagedesktop from "../../assets/home_image.png";
import logo from "../../assets/logo dark.png";
import Style  from "../homeComponent/homepageComponent.module.css";

export const HomeComponent = () => {
  return (
    <>
      <div className={Style.container}>
        <img className={Style.imagem} src={imagedesktop} width="500rem" alt="" />
        <img className={Style.logotipo} src={logo} width="250rem" alt="" />
        <h1 className={Style.soft}>
          Soft <span>Finance</span>
        </h1>
      <button className={Style.btn}>Entrar</button>
      <button className={Style.btn}>Registrar</button>
      </div>
    </>
  );
};
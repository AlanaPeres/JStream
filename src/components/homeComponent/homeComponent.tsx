import imagedesktop from "../../assets/home_image.png";
import logo from "../../assets/logo dark.png";
import Style  from "../homeComponent/homeComponent.module.css";

export const HomeComponent = () => {
  return (
    <>
      <div className={Style.container}>
        <img className={Style.imagem} src={imagedesktop}  alt="" />
        <img className={Style.logotipo} src={logo} alt="" />
        <h1 className={Style.soft}>
          Soft <span>Finance</span>
        </h1>
      </div>
    </>
  );
};
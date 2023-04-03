import { Link } from "react-router-dom";
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
          Soft <span className={Style.spanfin}>Finance</span>
        </h1>
        <Link to={"login"}><button className={Style.btn}>Entrar</button></Link>
        <Link to={""}><button className={Style.btn}>Registrar</button></Link>
      </div>
    </>
  );
};
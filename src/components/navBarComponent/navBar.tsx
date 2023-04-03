import { Link } from "react-router-dom";
import Style from "../navBarComponent/navBarComponent.module.css";

function NavBar() {
  return (
    <>
      <nav className={Style.navbarnew}>
        <ul className={Style.ulis}>
          <li className={Style.texto_nav}>
            <a className={Style.alink} href="">Sobre</a>
          </li>
          <li className={Style.texto_nav}>
            <a className={Style.alink} href="">Contanto</a>
          </li>
          <li className={Style.texto_nav}>
            <a className={Style.alink} href="">Propostas</a>
          </li>
          <li className={Style.button_div}>
            <Link to={"login"}>
              <a className={Style.alink} href=""><button className={Style.btn}>Entrar</button></a>
            </Link>
          </li>
          <li className={Style.button_div}>
            <Link to={"registrar"}> <a className={Style.alink} href=""><button className={Style.btn}>registrar</button></a>  </Link>
           
          </li>
        </ul>
      </nav>
    </>
  );
}

export default NavBar;


import { Link } from "react-router-dom";
import Style from "../navBarComponent/navBarComponent.module.css";

function NavBar() {
  return (
    <>
      <nav>
        <ul>
          <li className={Style.texto_nav}>
            <a href="">Sobre</a>
          </li>
          <li className={Style.texto_nav}>
            <a href="">Contanto</a>
          </li>
          <li className={Style.texto_nav}>
            <a href="">Propostas</a>
          </li>
          <li>
            <Link to={"login"}>
              <button className={Style.btn}>Entrar</button>
            </Link>
          </li>
          <li>
            <Link to={"registrar"}>
              <button className={Style.btn}>Registrar</button>
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default NavBar;
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
            <a href="">
              <button className={Style.btn}>Entrar</button>
            </a>
          </li>
          <li>
            <a href="/registrar">
              <button className={Style.btn}>Registrar</button>
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default NavBar;
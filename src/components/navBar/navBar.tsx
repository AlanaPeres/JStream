import * as React from "react";
import "./navBar.css";

function NavBar() {
  return <>
  
  <nav>
      <ul>
        <li className="texto_nav"><a href="">Sobre</a></li>
        <li className="texto_nav"><a href="">Contanto</a></li>
        <li className="texto_nav"><a href="">Propostas</a></li>
        <li>
          <a href=""><button className="btn">Entrar</button></a>
        </li>
        <li>
          <a href=""><button className="btn">Registrar</button></a>
        </li>
      </ul>
    </nav>


  </>;
};

export default NavBar;

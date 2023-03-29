import * as React from "react";
import "./navBar.css";

function NavBar() {
  return <>
  
  <nav>
      <ul>
        <li className="texto_nav"><a href="">About</a></li>
        <li className="texto_nav"><a href="">Contact</a></li>
        <li className="texto_nav"><a href="">Propose</a></li>
        <li>
          <a href=""><button className="btnnav_desktop">Sign in</button></a>
        </li>
        <li>
          <a href=""><button className="btnnav_desktop">Sign up</button></a>
        </li>
      </ul>
    </nav>


  </>;
};

export default NavBar;

import { Link } from "react-router-dom";
import styles from "./navBarPrincipalComponent.module.css";
import img from "../../assets/logo dark.png"
import homebutton from "../../assets/home button.png"
import dollarbutton from "../../assets/dollar button.png"
import transferbutton from "../../assets/transfer button.png"
import profileicon from "../../assets/profile icon.png"


export const NavBarPrincipal = () => {
  return (
    <>
      <nav className={styles.navbar}>
      <img className={styles.perfil} src={profileicon} alt="" />
        <ul className={styles.ul}>
          <li className={styles.li}>
            <button className={styles.btn}><img className={styles.dollarbtn} src={dollarbutton} alt="" /></button>
          </li>
          <li className={styles.li}>
            <button className={styles.btn}><img className={styles.homebtn} src={homebutton} alt="" /></button>
          </li>
          <li className={styles.li}>
            <button className={styles.btn}><img className={styles.transferbtn} src={transferbutton} alt="" /></button>
          </li>
        </ul>
      <img className={styles.logotipo} src={img} alt=""/> 
      </nav>
    </>
  );
};

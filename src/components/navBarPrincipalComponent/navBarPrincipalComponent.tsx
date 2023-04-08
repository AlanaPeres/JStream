import { NavLink, NavLinkProps, useLocation } from "react-router-dom";
import styles from "./navBarPrincipalComponent.module.css";
import img from "../../assets/logo_dark.webp";
import homebutton from "../../assets/home_button.webp";
import dollarbutton from "../../assets/dollar_button.webp";
import transferbutton from "../../assets/transfer_button.webp";
import profileicon from "../../assets/profile_icon.webp";

interface NavButtonProps extends NavLinkProps {
  activeClassName?: string;
}

export const NavBarPrincipal = () => {
  const location = useLocation();

  const navButtonProps: NavButtonProps = {
    activeClassName: styles.active,
    to: "/saldo",
  };

  const ExtratoBtnClassName =
    location.pathname === "/extrato"
      ? `${styles.btn} ${styles.extratobtnActive}`
      : styles.btn;
  const SaldoBtnClassName =
    location.pathname === "/saldo"
      ? `${styles.btn} ${styles.saldobtnActive}`
      : styles.btn;
  const Transferclassname =
    location.pathname === "/transferencia"
      ? `${styles.btn} ${styles.transferbtnActive}`
      : styles.btn;

  return (
    <>
      <nav className={styles.navbar}>
        <img className={styles.perfil} src={profileicon} alt="" />
        <ul className={styles.ul}>
          <li className={styles.li}>
            <NavLink {...navButtonProps} to={"/extrato"}>
              <button className={ExtratoBtnClassName}>
                <img
                  className={styles.imagemdollar}
                  src={dollarbutton}
                  alt=""
                />
              </button>
            </NavLink>
          </li>
          <li className={styles.li}>
            <NavLink {...navButtonProps} to={"/saldo"}>
              <button className={SaldoBtnClassName}>
                <img className={styles.imagemsaldo} src={homebutton} alt="" />
              </button>
            </NavLink>
          </li>
          <li className={styles.li}>
            <NavLink {...navButtonProps} to={"/transferencia"}>
              <button className={Transferclassname}>
                <img
                  className={styles.imagemtranfer}
                  src={transferbutton}
                  alt=""
                />
              </button>
            </NavLink>
          </li>
        </ul>
        <img className={styles.logotipo} src={img} alt="" />
      </nav>
    </>
  );
};

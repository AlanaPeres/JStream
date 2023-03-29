import * as React from "react";
import logo from "../../assets/logo dark.png";
import "./homeMobile.css";

export const HomeMobile = () => {
  return (
    <>
      <div className="container_mobile">
        <img src={logo} width="100px" alt="" />
        <h1 className="soft">
          Soft <span>Finance</span>
        </h1>
        <button className="btn_mobile">sign in</button>

        <button className="btn_mobile">Sign up</button>
      </div>
    </>
  );
};

import React from "react";
import style from "../styles/pokePage.module.css";

const Footer = () => {
  return (
    <footer className={style.footer} style={{ color: "white" }}>
      {/* <img
          data-testid="footer-logo"
          src="https://www.flaticon.com/svg/vstatic/svg/188/188990.svg?token=exp=1612555692~hmac=a56462bf42fa99a90d51d8843f7f4f85"
          alt="Logo"
        />{" "}
        <img
          src="https://www.flaticon.com/svg/vstatic/svg/188/188988.svg?token=exp=1611772002~hmac=3508bfb947b23e7823c60e6f2b7d7237"
          alt="Logo"
        />
        <img
          src="https://www.flaticon.com/svg/vstatic/svg/188/188989.svg?token=exp=1612555692~hmac=fb978e233abf3fb38d0a7757b1b0399f"
          alt="Logo"
        /> */}
      <div>
        Icons provided by{" "}
        <a
          href="https://www.flaticon.com/br/autores/roundicons-freebies"
          title="Roundicons Freebies"
        >
          Roundicons Freebies
        </a>{" "}
        from{" "}
        <a href="https://www.flaticon.com/br/" title="Flaticon">
          www.flaticon.com
        </a>
      </div>
      {/* <img
          src="https://www.flaticon.com/svg/vstatic/svg/188/188989.svg?token=exp=1612555692~hmac=fb978e233abf3fb38d0a7757b1b0399f"
          alt="Logo"
        />
        <img
          src="https://www.flaticon.com/svg/vstatic/svg/188/188988.svg?token=exp=1611772002~hmac=3508bfb947b23e7823c60e6f2b7d7237"
          alt="Logo"
        />
        <img
          src="https://www.flaticon.com/svg/vstatic/svg/188/188990.svg?token=exp=1612555692~hmac=a56462bf42fa99a90d51d8843f7f4f85"
          alt="Logo"
        />{" "} */}
    </footer>
  );
};

export default Footer;

import React, { useContext, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logoPic from "../../assets/Images/logo.png";
import "../../Layouts/Header/Header.css";
import { BsTelephone } from "react-icons/bs";
import { Context } from "../../Context/Context";
import { useTranslation } from "react-i18next";

export default function Header() {
  const { changeHandle, play, takeLang } = useContext(Context);
  const location = useLocation();
  const { t } = useTranslation();
  const [showdrop, setShowdrop] = useState(false);

  const dropLang = localStorage.getItem("i18nextLng");

  const handleDown = () => {
    setShowdrop(!showdrop);
  }

  if(location.pathname !== "/") {
    window.scrollTo(0, 0)
  }


  return (
    <>
      <div
        className={`${
          location.pathname.slice(1, 8) === "proInfo" ||
          location.pathname.slice(1, 9) === "blogInfo" ||
          location.pathname.slice(1, 9) === "products"
            ? "bgWhite"
            : null
        } HeaderSy`}
        style={{background: play ? "transparent" : null}}
        id="topprd"
      >
        <div className="container">
          <div className="headerFlex">
            <Link to={"/"}>
              <img width={"87px"} height={"77px"} src={logoPic} alt="Logo" />
            </Link>
            <div className="headerNavbar">
              <a href="#products" className="navLink">
                {t("navbar")}
              </a>
              <a href="#about" className="navLink">
                {t("navbar2")}
              </a>
              <a href="#blog" className="navLink">
                {t("navbar3")}
              </a>
              <a href="#contact" className="navLink">
                {t("navbar4")}
              </a>
              

              <div className="dropDiv">
                <h3 className="selectedDown" onClick={handleDown}>{takeLang ? takeLang : dropLang}</h3>
              <div className={`${showdrop ? "viewDrop" : null} header_dropDown_box`} onClick={(e) => changeHandle(e)} >
                  <div lang="uz" className="dropDown" onClick={handleDown} >UZ</div>
                  <div lang="en" className="dropDown" onClick={handleDown} >EN</div>
                  <div lang="ru" className="dropDown" onClick={handleDown} >RU</div>
              </div>
              </div>
           
            </div>
            <div className="callBox">
              <div className="callIconBox">
                <BsTelephone className="phoneIconCall" />
              </div>
              <div className="phoneNumberBox">
                <a href="tel:+998994054000" className="phoneNumberAnker">
                  99-405-40-00
                </a>
                <a href="tel:+998946666155" className="phoneNumberAnker">
                  94-666-61-55
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

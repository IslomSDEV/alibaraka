import React from "react";
import { Link, NavLink } from "react-router-dom";
import footerLogo from "../../assets/Images/footerLogo.png";
import "../Footer/Footer.css";
import abbaCoding from '../../assets/Images/abbaCoding.svg';
import abbaMedia from "../../assets/Images/abbaMedia.svg";
import footerPic from "../../assets/Images/footerBotom.png";
import { useTranslation } from "react-i18next";

export default function Footer() {
  const {t, i18next} = useTranslation();

  return (
    <>
      <div className="footerSy">
        <div className="container">
          <div className="footerFlex">
            <div className="footerDesc">
              <Link className="foterLogoLink" to={"/"}>
                <img
                  width={"87px"}
                  height={"77px"}
                  src={footerLogo}
                  alt="footer logo"
                />
              </Link>
              <div className="fDescTitle">
                Tashkent, Mustakillik St, 15 <br />
                Tel: +998 99 000 00 00 <br />
                E-mail: hello@alibaraka.com <br />
              </div>
            </div>
            <div className="footerNavigation">
              <div className="footerAbout ftNavSy">
                <span className="foterSpanTitle">About us</span>
                  <NavLink className="ftLink">{t("footerleftrow1")}</NavLink>
                  <NavLink className="ftLink">{t("footerleftrow2")}</NavLink>
                  <NavLink className="ftLink">{t("footerleftrow3")}</NavLink>
                  <NavLink className="ftLink">{t("footerleftrow4")}</NavLink>
              </div>
              <div className="footerProduct ftNavSy">
                <span className="foterSpanTitle">Products</span>
                <NavLink to={"products/21"} className="ftLink">{t("footercenterrow1")}</NavLink>
                <NavLink to={"products/24"} className="ftLink">{t("footercenterrow2")}</NavLink>
                <NavLink to={"products/23"} className="ftLink">{t("footercenterrow3")}</NavLink>
                <NavLink to={"products/22"} className="ftLink">{t("footercenterrow4")}</NavLink>
              </div>
              <div className="footerBlog ftNavSy">
                <span className="foterSpanTitle">Blog</span>
                <NavLink className="ftLink">{t("footerrightrow1")}</NavLink>
                <NavLink className="ftLink">{t("footerrightrow2")}</NavLink>
                <NavLink className="ftLink">{t("footerrightrow3")}</NavLink>
                <NavLink className="ftLink">{t("footerrightrow4")}</NavLink>
              </div>
            </div>
          </div>
          <div className="fBotomFlex">
            <div className="btTitle">Все права защищены.</div>
            <div className="btLogos">
              <span className="btMinTitle">Разработано в</span>
              <img src={abbaCoding} alt="company logo" />
              <img src={abbaMedia} alt="company logo" />
            </div>
          </div>
        </div>
        <img className="footerBotomImg"  src={footerPic} alt="footer image" />
      </div>
    </>
  );
}

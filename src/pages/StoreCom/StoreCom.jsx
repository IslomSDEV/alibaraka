import Fade from "react-reveal/Fade";
import React from "react";
import { Link } from "react-router-dom";
import Stores from "../../Components/Stores/Stores";
import "./StoreCom.css";
import { useTranslation } from "react-i18next";

function StoreCom() {
  const [t, i18next] = useTranslation();
  return (
    <>
      <div className="storeSy" id="blog">
        <div className="container">
          <div className="storeFlexBox">
            <Fade left>
            <div className="storeLeft">
              <div className="storePicBox">
                <div className="storeDescriptionBox">
                  <h5 className="storeDescTitle">
                   {t("blog_card_title")}
                  </h5>
                  <p className="storeDescParag">
                   {t("blog_card_desc")}
                  </p>
                  <span className="storeFeedBackName">Sh.Mirziyoyev</span>
                </div>
              </div>
            </div>
            </Fade>
            <Fade left>
            <div className="storeRight">
              <h3 className="storeRightTitle">{t("blog_title")}</h3>
              <div className="moreStoreBox">
                <Stores />
              </div>
              <Link to={"../moreBlog"}>
                <button className="storeMoreBtn">{t("storyKoproqBtn")}</button>
              </Link>
            </div>
            </Fade>
          </div>
        </div>
      </div>
    </>
  );
}

export default StoreCom;

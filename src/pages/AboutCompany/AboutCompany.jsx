import React, { useState } from "react";
import track from "../../assets/Images/tractor.png";
import potato from "../../assets/Images/potato.png";
import teplitsa from "../../assets/Images/teplitsa.png";
import cloudPng from "../../assets/Images/cloud.png";
import { RiCloseFill } from "react-icons/ri";
import "./AboutCompany.css";
import { Link } from "react-router-dom";
import { Fade } from "react-reveal";
import { useTranslation } from "react-i18next";

function AboutCompany() {
  const [modal, setModal] = useState(false);
  const [t] = useTranslation();

  const handleModal = () => {
    setModal(true);
  };

  const closesModal = () => {
    setModal(false);
  };

  return (
    <>
      <div className="companyaboutSy" id="about">
        <div className="container">
          <div className="companyFlex">
            <Fade left>
              <div className="companyLeft">
                <h2 className="companyTitle">{t("about_tit")}</h2>
                <p className="companyParagraf">
                  {t("about_des")}
                </p>
                <div className="companyBtnsBox">
                  <Link to={"/moreBlog/"} style={{ textDecoration: "none" }}>
                    <button className="companyMoreBtn comStyleBtn">
                      {t("aboutPageButtonMore")}
                    </button>
                  </Link>
                  <button
                    className="companyYoutubeBtn comStyleBtn"
                    onClick={() => handleModal()}
                  >
                    {t("aboutPageButtonYoutube")}
                  </button>
                </div>
              </div>
            </Fade>
            <div className="companyRight">
              <div className="companyPicImg">
                <Fade right>
                <img
                  className="trackImg compPics"
                  src={track}
                  alt="track picture"
                />
                </Fade>
                <Fade left>
                <img
                  className="potatoImg compPics"
                  src={potato}
                  alt="potato picture"
                />
                </Fade>
                <Fade left>
                <img
                  className="teplitsaImg compPics"
                  src={teplitsa}
                  alt="teplitsa"
                />
                </Fade>
              </div>
            </div>
          </div>
        </div>
        <img className="companyClodPic" src={cloudPng} alt="cloud img" />
      </div>

      <div className={`${modal ? "viewModal" : "viewNoneModal"} modalDiv`}>
        <div className="modalVideoBox">
          <button className="modalCloseBtn" onClick={() => closesModal()}>
            <RiCloseFill className="modalCloseIcon" />
          </button>
          <iframe
            className="iframeVideo"
            src="https://www.youtube.com/embed/121obV8gsCk"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </>
  );
}

export default AboutCompany;

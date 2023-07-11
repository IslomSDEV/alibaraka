import React from "react";
import "./ComunicationPage.css";
import Fade from "react-reveal/Fade";
import { useTranslation } from "react-i18next";

function ComunicationPage() {
  const [t] = useTranslation();
  return (
    <>
      <div className="comunicationSy" id="contact">
        <div className="container">
          <Fade left>
            <div className="comnucationBox">
              <div className="circleEl sharps"></div>
              <div className="squareEl sharps"></div>
              <div className="comunCard">
                <div className="comunPicBox"></div>
                <div className="comunFormBox">
                  <h3 className="comunTitle">{t("contact_title")}</h3>
                  <p className="comunDesc">
                    {t("contact_des")}
                  </p>

                  <form className="comunForm">
                    <div
                      style={{
                        maxWidth: "480px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                      }}
                    >
                      <label>
                        <input
                          required
                          className="comunInput"
                          type="text"
                          placeholder="Ismingizni kiriting"
                        />
                      </label>
                      <label>
                        <input
                          required
                          className="comunInput"
                          type="text"
                          placeholder="+998932611712"
                        />
                      </label>
                    </div>
                    <textarea
                      required
                      className="comunLeterBox"
                      name="subject"
                      id="subject"
                      cols="5"
                      rows="6"
                      placeholder="Murojatni yozing"
                    ></textarea>
                    <button className="comunSendBtn">{t("contactsendbtn")}</button>
                  </form>
                </div>
              </div>
            </div>
          </Fade>
        </div>
      </div>
    </>
  );
}

export default ComunicationPage;

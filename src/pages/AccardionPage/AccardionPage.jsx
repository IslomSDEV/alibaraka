import React from "react";
import { useTranslation } from "react-i18next";
import { Fade } from "react-reveal";
import flag from "../../assets/Images/flag.png";
import SimpleAccordion from "../../Components/Accordion/Accordion";
import "./AccardionPage.css";

function AccardionPage() {
  const [t] = useTranslation()
  return (
    <>
      <div className="questionsSy">
        <div className="container">
          <div className="questionFlexBox">
            <Fade left>
              <img className="flagPic" src={flag} alt="flag picture" />
            </Fade>
            <div className="questionLeft"></div>
            <Fade left>
              <div className="questionRight">
                <div className="questionsTitleBox">
                  <h2 className="questionTitle">
                    {t("question_title")}
                  </h2>
                  <p className="questionParagraf">
                    {t("question_desc")}
                  </p>
                </div>
                <div className="accordionmenuBox">
                  <SimpleAccordion />
                </div>
              </div>
            </Fade>
          </div>
        </div>
      </div>
    </>
  );
}

export default AccardionPage;

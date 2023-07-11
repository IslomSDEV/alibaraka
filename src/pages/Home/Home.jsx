import React, { useContext, useRef, useState } from "react";
import { BiPlay } from "react-icons/bi";
import lineBig from "../../assets/Images/lineBig.png";
import "./Home.css";
import backgroundVideo from "../../assets/Video/homeBg.mp4";
import Fade from "react-reveal/Fade";
import { useTranslation } from "react-i18next";
import { Context } from "../../Context/Context";

function Home() {

  const { videoPlay, play, videoRef  } = useContext(Context);
  const [t,i18next] = useTranslation();
  // const [play, setPlay] = useState(false);
  // const videoRef = useRef();

  // const videoPlay = () => {
  //   videoRef.current.play();
  //   setPlay(!play);
  // };

  return (
    <>
      <div className="HomeSy">
        <div className="container homeCon">
          <div className="homeFlex">
            <Fade left>
            <div className="homeTheme">
              <h1 className="homeTitle">{t("main")}</h1>
              <p className="homeInfo">
                {t("main_desc")}
              </p>
              <a href="#products" style={{textDecoration: "none"}}>
              <button className="homeExplore">
                {t("mainbtn")}
              </button>
              </a>
            </div>
            </Fade>
            <div className="homePlayBtn">
              <BiPlay className="playBtn" onClick={() => videoPlay()} />
            </div>
            <div className="lineHome"></div>
          </div>
        </div>
        <div className={`${play ? "playVid" : null} homeVideoBox`}>
          <video
            className="homeVideo"
            autoPlay
            loop
            muted
            ref={videoRef}
            src={backgroundVideo}
          ></video>
        </div>
        <img
          className={`${play ? "bgNone" : null} homePic`}
          src="https://alibaraka.com/static/media/bg111.079871ffaf7db19b4455.png"
        />
        <img className="homeBigline" src={lineBig} />
      </div>
    </>
  );
}

export default Home;

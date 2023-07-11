import ComunicationPage from "../../pages/ComunicationPage/ComunicationPage";
import AllProSwiper from "../../Components/AllProSwiper/AllProSwiper";
import { TfiArrowCircleDown, TfiClose } from "react-icons/tfi";
import { FreeMode, Navigation, Thumbs } from "swiper";
import bgPng from "../../assets/Images/heropng.png";
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { useParams } from "react-router-dom";
import Fade from "react-reveal/Fade";
import "swiper/css/navigation";
import "swiper/css/free-mode";
import "swiper/css/thumbs";
import axios from "axios";
import "./ProInfo.css";
import "swiper/css";
import { useTranslation } from "react-i18next";

function ProInfo() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [proInfo, setProInfo] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const { id } = useParams();
  const [t, i18next] = useTranslation();

  const [nameValue, setNameValue] = useState("");
  const [numberValue, setNumberValue] = useState("");

  function changeNumber(item) {
    setNumberValue(item);
  }
  function changeName(item) {
    setNameValue(item);
  }

  let bot = {
    TOKEN: "6196010078:AAFp_QxzIIVposuwGiwr_39zFgS8uQS2MZA",
    chatID: "-1001877467590",
    message: `
      Assalomu alaykum sizga yangi buyurtma xabari!%0A
      %0AIsmi 👤: ${nameValue}; 
      %0ATelefon raqami ☎: ${numberValue}`,
  };

  function sendMessageL() {
    fetch(
      `https://api.telegram.org/bot${bot.TOKEN}/sendMessage?chat_id=${bot.chatID}&text=${bot.message} `,
      {
        method: "GET",
      }
    ).then(
      (success) => {
        if(success){
          // setNameValue("");
          // setNumberValue("");
          alert.log("Success product");
        }
      },
      (error) => {
        console.log(error);
      }
      );
      setNameValue("");
      setNumberValue("");
      setOpenModal(false);
  }

  const openModalFunc = () => {
    setOpenModal(true);
  };

  const closeModalFunc = () => {
    setOpenModal(false);
  };

  useEffect(() => {
    axios
      .get("https://api.alibaraka.com/api/product_by_category/")
      .then((res) => setProInfo(res?.data))
      .catch((err) => console.log(err));
  }, [id]);

  return (
    <>
      <div className="proInfoHeroSy">
        <div className="container">
          {proInfo.map((inf) => {
            if (Number(id) === inf?.id) {
              return (
                <div className="proInfoNameBox" key={inf?.id}>
                  <h3 className="proInfoHeroTitle">
                    {inf?.[`name_${i18next.language}`]}
                  </h3>
                </div>
              );
            }
          })}
          <div className="proInfoIconBox">
            <a href="#infoProduct">
              <TfiArrowCircleDown className="proInfoIcon" />
            </a>
          </div>
        </div>
        <img className="proInfoImage" src={bgPng} alt="heroimg" />
      </div>
      <div className="proInfoSy" id="infoProduct">
        <div className="container">
          {proInfo.map((data) => {
            if (Number(id) === data.id) {
              return (
                <div key={data?.id}>
                  <Fade left>
                    <div className="proInfoFlex">
                      <div className="proInfoLeft">
                        <h3 className="proInfoName">
                          {data?.[`name_${i18next.language}`]}
                        </h3>
                        <p className="proInfoParagraf">
                          {data?.[`sub_description_${i18next.language}`]}
                        </p>
                        <span className="proInfoPrice">
                          {t("productPrice")}
                        </span>
                        <div className="proButtonBox">
                          <button
                            className="byBtn btns"
                            onClick={() => openModalFunc()}
                          >
                            {t("byBtn")}
                          </button>
                          <button
                            className="connectBtn btns"
                            onClick={() => openModalFunc()}
                          >
                            {t("contactBtn")}
                          </button>
                        </div>
                      </div>
                      <div className="proInfoRight">
                        <Swiper
                          style={{
                            "--swiper-navigation-color": "#fff",
                            "--swiper-pagination-color": "#fff",
                          }}
                          spaceBetween={10}
                          navigation={true}
                          thumbs={{
                            swiper:
                              thumbsSwiper && !thumbsSwiper.destroyed
                                ? thumbsSwiper
                                : null,
                          }}
                          modules={[FreeMode, Navigation, Thumbs]}
                          className="mySwiper2"
                        >
                          <SwiperSlide className="swiperBox">
                            <img src={data?.image1} />
                          </SwiperSlide>
                          <SwiperSlide className="swiperBox">
                            <img src={data?.image2} />
                          </SwiperSlide>
                          <SwiperSlide className="swiperBox">
                            <img src={data?.image3} />
                          </SwiperSlide>
                        </Swiper>
                        <Swiper
                          onSwiper={setThumbsSwiper}
                          spaceBetween={10}
                          slidesPerView={3}
                          freeMode={true}
                          watchSlidesProgress={true}
                          modules={[FreeMode, Navigation, Thumbs]}
                          className="mySwiper"
                        >
                          <SwiperSlide
                            style={{ width: "122px", height: "65px" }}
                          >
                            <img
                              style={{ width: "100%", height: "100%" }}
                              src={data?.image1}
                            />
                          </SwiperSlide>
                          <SwiperSlide
                            style={{ width: "122px", height: "65px" }}
                          >
                            <img
                              style={{ width: "100%", height: "100%" }}
                              src={data?.image2}
                            />
                          </SwiperSlide>
                          <SwiperSlide
                            style={{ width: "122px", height: "65px" }}
                          >
                            <img
                              style={{ width: "100%", height: "100%" }}
                              src={data?.image3}
                            />
                          </SwiperSlide>
                        </Swiper>
                      </div>
                    </div>
                  </Fade>
                  <div className="descriptionSy">
                    <Fade left>
                      <h3 className="descriptionTitle">
                        {t("productDesText")}
                      </h3>
                    </Fade>
                    <Fade left>
                      <p className="descriptionParag">
                        {data?.[`description_${i18next.language}`]}
                      </p>
                    </Fade>
                  </div>
                </div>
              );
            }
          })}
          <h2
            className="allProductsName"
            style={{
              fontSize: "40px",
              textAlign: "center",
              margin: "150px 0 30px 0",
            }}
          >
            {t("anotherPro")}
          </h2>
        </div>
      </div>

      <AllProSwiper />
      <ComunicationPage />

      <div className={`${openModal ? "openModalView" : null} modalBoglanish`}>
        <div className="modalBogCard">
          <h3 className="modalBogTitle">Bog'lanish</h3>
          <form style={{ marginTop: "20px" }}>
            <label className="modalBogLabel">
              Ism
              <input
                required
                value={nameValue}
                className="modalBogInput"
                onChange={(e) => changeName(e.target.value)}
                type="text"
              />
            </label>
            <label className="modalBogLabel">
              Nomer
              <input
                required
                value={numberValue}
                className="modalBogInput"
                onChange={(e) => changeNumber(e.target.value)}
                type="number"
              />
            </label>
            {proInfo.map((con) => {
              if (Number(id) === con?.id) {
                return (
                  <h4 key={con?.id} className="modalBogName">
                    {con?.[`name_${i18next.language}`]}
                  </h4>
                );
              }
            })}
            <button onClick={sendMessageL} type="submit" className="modalBogSendBtn">Yuborish</button>
          </form>
          <button className="closeBtnModal" onClick={() => closeModalFunc()}>
            <TfiClose className="modalBogIcon" />
          </button>
        </div>
      </div>
    </>
  );
}

export default ProInfo;

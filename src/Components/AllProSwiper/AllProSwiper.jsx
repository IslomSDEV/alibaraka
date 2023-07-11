import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./AllProSwiper.css";
import { Autoplay, Pagination, Navigation } from "swiper";
import axios from "axios";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

function AllProSwiper() {
  const [allProduct, setAllProduct] = useState([]);
  const [t, i18next] = useTranslation();
  useEffect(() => {
    axios
      .get("https://api.alibaraka.com/api/product_by_category/")
      .then((res) => setAllProduct(res?.data))
      .catch((err) => console.log(err));
  }, []);
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  return (
    <>
      <Swiper
        slidesPerView={5}
        spaceBetween={30}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
        style={{ height: "320px", width: "88%" }}
      >
        {allProduct.map((data) => {
          return (
            <SwiperSlide
              style={{
                width: "200px",
                display: "flex",
                height: "290px",
                flexDirection: "column",
                alignItems: "center",
                padding: "5px 10px",
                opacity: "1",
                marginRight: "40px",
                border: "none",
              }}
              key={data?.id}
            >
              <Link className="allProswipLink" to={`/proInfo/${data?.id}`}>
                <div className="allProSwipImgBox">
                  <img className="allProSwipPicture" src={data?.image1} />
                </div>
                <h2 className="allProSwipName">
                  {data?.[`name_${i18next.language}`]}
                </h2>
                <span className="allProSwipPrice">
                  Narxi: Kelishilgan xolda
                </span>
              </Link>
            </SwiperSlide>
          );
        })}
        <div className="autoplay-progress" slot="container-end">
          <svg viewBox="0 0 48 48" ref={progressCircle}></svg>
          <span ref={progressContent}></span>
        </div>
      </Swiper>
    </>
  );
}

export default AllProSwiper;

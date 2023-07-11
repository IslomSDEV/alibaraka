import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./SwiperSl.css";

import { Autoplay, Pagination, Navigation } from "swiper";
import axios from "axios";
import { Link } from "react-router-dom";

function SwiperSl() {
  const [swiperEls, setSwiperEls] = useState([]);

  useEffect(() => {
    axios
      .get("https://api.alibaraka.com/api/partners/")
      .then((res) => setSwiperEls(res?.data))
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  return (
    <div className="swipDiv">
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {swiperEls.map((data) => {
          return (
            <SwiperSlide
              style={{
                width: "250px",
                height: "30px",
                border: "none",
                background: "transparent",
                opacity: "1",
              }}
              key={data?.id}
            >
              <Link className="companyPicLink">
                <img
                  className="companyImg"
                  style={{
                    width: "100%",
                    height: "100%",
                  }}
                  src={data?.image}
                  alt="companys images"
                />
              </Link>
            </SwiperSlide>
          );
        })}

        <div className="autoplay-progress" slot="container-end">
          <svg viewBox="0 0 48 48" ref={progressCircle}></svg>
          <span ref={progressContent}></span>
        </div>
      </Swiper>
    </div>
  );
}

export default SwiperSl;

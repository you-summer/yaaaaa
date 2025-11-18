import React, { useEffect, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-cards";
import "swiper/css/navigation";

import "./LeftContent.css";

import playBtn from "../../assets/icon_play.svg";
import pauseBtn from "../../assets/icon_pause.svg";

// import required modules
import { Autoplay, Pagination, Navigation, EffectCards } from "swiper/modules";

import { contentData } from "../../util/content_data.js";
import { Link } from "react-router";

const LeftContent = () => {
  const swiperRef = useRef(null);

  useEffect(() => {
    if (swiperRef.current) {
      swiperRef.current.autoplay.start();
    }
  });

  return (
    <div className="LeftContent">
      <Swiper
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        modules={[Autoplay, Pagination, Navigation, EffectCards]}
        effect={"cards"}
        cardsEffect={{
          perSlideRotate: 0, // 각 카드 기본 회전 각도
          rotate: 0, // 전체 회전 0
        }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          el: ".custom-pagination",
          clickable: true,
        }}
        className="LeftContent_swiper"
        navigation={{
          prevEl: ".leftcontent-button-prev",
          nextEl: ".leftcontent-button-next",
        }}
        loop={true}
      >
        {contentData.map((item) => {
          return (
            <SwiperSlide>
              <img src={item.img} className="swiper_img" />
              <div className="swiper_type">• {item.type}</div>
              <div className="swiper_text">{item.text}</div>
              <Link className="swiper_link" to={item.url}>
                자세히보기
              </Link>
            </SwiperSlide>
          );
        })}
      </Swiper>
      <div className="leftcontent_custom">
        <div className="leftcontent-button-prev"></div>
        <div className="custom-pagination"></div>
        <img
          src={playBtn}
          className="btnICon"
          onClick={() => swiperRef.current.autoplay.start()}
        />
        <img
          src={pauseBtn}
          className="btnICon"
          onClick={() => swiperRef.current.autoplay.stop()}
        />
        <div className="leftcontent-button-next"></div>
      </div>
    </div>
  );
};
export default LeftContent;

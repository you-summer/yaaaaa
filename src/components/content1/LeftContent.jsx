import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-cards";
import "swiper/css/navigation";

import "./LeftContent.css";

// import required modules
import { Autoplay, Pagination, Navigation, EffectCards } from "swiper/modules";

import { contentData } from "../../util/content_data.js";
import { Link } from "react-router";

import leftArrow from "../../assets/icon_arrow_left.svg";
import rightArrow from "../../assets/icon_arrow_right.svg";

const LeftContent = () => {
  const progressCircle = useRef(null);
  return (
    <div className="LeftContent">
      <Swiper
        effect={"cards"}
        spaceBetween={10}
        cardsEffect={{
          perSlideRotate: 0, // 각 카드 기본 회전 각도
          rotate: 0, // 전체 회전 0
        }}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, Pagination, Navigation, EffectCards]}
        className="mySwiper"
        navigation={{
          nextEl: ".swiper-button-next", //다음버튼
          prevEl: ".swiper-button-prev", //이전버튼
        }}
      >
        {contentData.map((item) => {
          return (
            <SwiperSlide>
              <img src={item.bgImg} className="swiper_img" />
              <div className="swiper_type">• {item.type}</div>
              <div className="swiper_text">{item.text}</div>
              <Link className="swiper_link" to={""}>
                자세히보기
              </Link>
            </SwiperSlide>
          );
        })}

        <div className="swiper-button-next">
          {/* <img src={rightArrow} /> */}
        </div>
        <div className="swiper-button-prev">
          {/* <img src={leftArrow} /> */}
        </div>
      </Swiper>
    </div>
  );
};
export default LeftContent;

import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/navigation";

import "./LeftCarousel.css";

// import required modules
import { Scrollbar, Navigation } from "swiper/modules";

import { contentData } from "../../util/content_data.js";

const LeftCarousel = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  return (
    <div className="LeftCarousel">
      <Swiper
        spaceBetween={25}
        slidesPerView={3.2} // 한 화면에 5개 보임
        slidesPerGroup={1} // 이동할 때 5개씩 이동
        // centeredSlides={false} // 왼쪽 시작 // true 중앙시작
        scrollbar={{
          hide: true,
        }}
        modules={[Scrollbar, Navigation]}
        navigation={{
          prevEl: ".leftcarousel-button-prev",
          nextEl: ".leftcarousel-button-next",
        }}
        className="leftCarousel"
      >
        {contentData.map((item) => {
          return (
            <SwiperSlide>
              <img src={item.bgImg} />
              <div className="leftCarousel_type">{item.type}</div>
              <div className="leftCarousel_text">{item.text}</div>
              <div className="leftCarousel_date">{item.date}</div>
            </SwiperSlide>
          );
        })}
      </Swiper>
      <div className="leftcarousel-button-next" ref={prevRef}></div>
      <div className="leftcarousel-button-prev" ref={nextRef}></div>
    </div>
  );
};
export default LeftCarousel;

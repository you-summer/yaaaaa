import "./RightCarousel.css";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper/modules";

import { trendsData } from "../../util/trends_data";

const RightCarousel = () => {
  return (
    <div className="RightCarousel">
      <Swiper
        pagination={{
          clickable: true,
          el: ".rightCarousel-custom-pagination",
        }}
        modules={[Pagination, Navigation]}
        className="mySwiper"
        loop={true}
        navigation={{
          prevEl: ".rightcarousel-button-prev",
          nextEl: ".rightcarousel-button-next",
        }}
      >
        {trendsData.map((item) => {
          return (
            <SwiperSlide>
              <img src={item.bgImg} className="rightCarousel_img" />
              <div className="rightCarosel_text_wrapper">
                <h3 className="rightCarousel_text">{item.text}</h3>
                <div className="rightCarousel_date">{item.date}</div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
      <div className="rightCarousel-custom-pagination"></div>
      <div className="rightcarousel-button-next"></div>
      <div className="rightcarousel-button-prev"></div>
    </div>
  );
};
export default RightCarousel;

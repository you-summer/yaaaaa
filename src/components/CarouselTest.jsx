import { Swiper, SwiperSlide } from "swiper/react";

import { reportData } from "../util/report_data";

// Import Swiper styles
import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/navigation";
// import required modules
import { Scrollbar, Navigation } from "swiper/modules";

import "./CarouselTest.css";

const CarouselTest = () => {
  return (
    <div className="CarouselTest">
      <Swiper
        className="CarouselTest_tt"
        slidesPerView={4.2} // 한 화면에 5개 보임
        slidesPerGroup={1} // 이동할 때 5개씩 이동
        scrollbar={{
          hide: true,
        }}
        modules={[Scrollbar, Navigation]}
      >
        <SwiperSlide>1</SwiperSlide>
        <SwiperSlide>2</SwiperSlide>
        <SwiperSlide>3</SwiperSlide>
        <SwiperSlide>4</SwiperSlide>
        <SwiperSlide>5</SwiperSlide>
      </Swiper>
    </div>
  );
};
export default CarouselTest;

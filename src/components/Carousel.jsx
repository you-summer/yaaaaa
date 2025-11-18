import { Swiper, SwiperSlide } from "swiper/react";

import { reportData } from "../util/report_data.js";
import { contentData } from "../util/content_data.js";
import { trendsData } from "../util/trends_data.js";

// Import Swiper styles
import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-cards";

// import required modules
import { Scrollbar, Navigation, Pagination } from "swiper/modules";

import "./Carousel.css";
import { useEffect, useState } from "react";
import { Link } from "react-router";

const Carousel = ({
  type,
  spaceBetween,
  slidesPerView,
  slidesPerGroup,
  scrollBarHide,
}) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    if (type === "report") {
      setData(reportData);
    } else if (type === "content") {
      setData(contentData);
    } else if (type === "trend") {
      setData(trendsData);
    }
  }, [type]);

  return (
    <div className="Carousel">
      <Swiper
        className="Carousel_tt"
        spaceBetween={spaceBetween} // 공간s
        slidesPerView={slidesPerView} // 한 화면에 n개 보임
        slidesPerGroup={slidesPerGroup} // 이동할 때 n개씩 이동
        scrollbar={scrollBarHide ? false : true}
        navigation={{
          nextEl: `.custom-button-next-${type}`,
          prevEl: `.custom-button-prev-${type}`,
        }}
        pagination={{
          clickable: true,
          el: `.custom-pagination-${type}`,
        }}
        modules={[Scrollbar, Navigation, Pagination]}
      >
        {data.map((item) => {
          return (
            <SwiperSlide>
              <Link to={item.url} className="carousel_link">
                <div className={`carousel_div type_${type}`}>
                  <img src={item.img} className={`carousel_img ${type}_img`} />
                  <div className={`carousel_type ${type}_content`}>
                    {item.type ? item.type : ""}
                  </div>
                  <div className={`${type}_text`}>
                    {item.text ? item.text : ""}
                  </div>
                  <div className={`carousel_date ${type}_date`}>
                    {item.date}
                  </div>
                </div>
              </Link>
            </SwiperSlide>
          );
        })}
      </Swiper>

      {/* 페이지네이션 trend에만 적용하기 */}
      {type === "trend" ? (
        <div className={`custom-pagination-${type}`}></div>
      ) : (
        ""
      )}
      <div className={`custom-button-next custom-button-next-${type}`}></div>
      <div className={`custom-button-prev custom-button-prev-${type}`}></div>
    </div>
  );
};
export default Carousel;

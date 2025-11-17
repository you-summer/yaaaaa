import { Swiper, SwiperSlide } from "swiper/react";

import { reportData } from "../util/report_data";
import { contentData } from "../util/content_data.js";
// Import Swiper styles
import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/navigation";
// import required modules
import { Scrollbar, Navigation } from "swiper/modules";

import "./CarouselTest.css";
import { useEffect, useState } from "react";
import { Link } from "react-router";

const CarouselTest = ({
  type,
  spaceBetween,
  slidesPerView,
  slidesPerGroup,
}) => {
  const [dataTest, setDataTest] = useState([]);

  useEffect(() => {
    if (type === "report") {
      setDataTest(reportData);
    } else if (type === "content") {
      setDataTest(contentData);
    }
  }, [type]);

  console.log(type);
  console.log(dataTest);
  return (
    <div className="CarouselTest">
      <Swiper
        className="CarouselTest_tt"
        spaceBetween={spaceBetween}
        slidesPerView={slidesPerView} // 한 화면에 5개 보임
        slidesPerGroup={slidesPerGroup} // 이동할 때 5개씩 이동
        scrollbar={{}}
        navigation={{
          nextEl: `.custom-button-next-${type}`,
          prevEl: `.custom-button-prev-${type}`,
        }}
        modules={[Scrollbar, Navigation]}
      >
        {dataTest.map((item) => {
          return (
            <SwiperSlide>
              <Link to={item.url} className="carouselTest_link">
                <div className={`carouselTest_div type_${type}`}>
                  <img
                    src={item.img}
                    className={`carouselTest_img ${type}_img`}
                  />
                  <div className={`carouselTest_type ${type}_content`}>
                    {item.type ? item.type : ""}
                  </div>
                  <div className={`${type}_text`}>
                    {item.text ? item.text : ""}
                  </div>
                  <div className={`carouselTest_date ${type}_date`}>
                    {item.date}
                  </div>
                </div>
              </Link>
            </SwiperSlide>
          );
        })}
      </Swiper>
      <div className={`custom-button-next custom-button-next-${type}`}></div>
      <div className={`custom-button-prev custom-button-prev-${type}`}></div>
    </div>
  );
};
export default CarouselTest;

# 야놀자 리서치 웹사이트 레이아웃 분석 및 구현
- 배포주소 -> https://yanolja-plum.vercel.app/


## 사용 기술
- React (Vite 기반)
  - react-router
- JavaScript (ES6+)
- 라이브러리
  - Swiper
  - framer-motion
    
---

### Swiper 사용 이유
이전 프로젝트에서 사용해본적이 있던 캐러셀 라이브러리였고 다양한 커스텀기능들이 있어서 사용하게 되었습니다.
기존 야놀자리서치 페이지를 보면 총 4개의 캐러셀을 사용중입니다. 이중에서 3개의 캐러셀을 하나의 컴포넌트로 사용하여 코드의 중복을 줄였습니다.

- 실제코드

#### 컴포넌트로 사용된 코드 (Carousel.jsx)
```
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
```

#### 컴포넌트 사용으로 인한 코드 단축 및 코드 중복 줄임
```
import Title from "../Title";
import Carousel from "../Carousel";
import "./ContentMid1.css";

const ContentMid1 = () => {
  return (
    <div className="ContentMid1 contentWrapper">
      <div className="contentMid1_left">
        <Title text={"인사이트 / 브리프"} url={"/"} />
        <Carousel
          type={"content"}
          spaceBetween={25}
          slidesPerView={3.2} // 한 화면에 5개 보임
          slidesPerGroup={1} // 이동할 때 5개씩 이동
        />
      </div>
      <div className="contentMid1_right">
        <div className="rightContent_wrapper">
          <Title text={"동향보고서"} url={"/"} />
          <Carousel
            type={"trend"}
            spaceBetween={0}
            slidesPerView={1}
            slidesPerGroup={1}
            scrollBarHide={true}
          />
        </div>
      </div>
    </div>
  );
};
export default ContentMid1;
```

```
import Carousel from "../Carousel";
import Title from "../Title";
import "./ContentMid2.css";
import "../ContentWrapper.css";

const ContentMid2 = () => {
  return (
    <div className="ContentMid2">
      <div className="contentWrapper">
        <Title text={"연구보고서"} url={"/"} />
        <Carousel
          type={"report"}
          spaceBetween={20}
          slidesPerView={4.5} // 한 화면에 x개 보임
          slidesPerGroup={1} // 이동할 때 x개씩 이동
        />
      </div>
    </div>
  );
};
export default ContentMid2;
```



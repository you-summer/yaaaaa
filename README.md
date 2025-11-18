# 야놀자 리서치 웹사이트 레이아웃 분석 및 구현
<img width="1501" height="612" alt="image" src="https://github.com/user-attachments/assets/1f6fd6b7-87f5-47cc-b086-fac104f128de" />
- 배포주소 -> https://yanolja-plum.vercel.app/


## 사용 기술
- React (Vite 기반)
  - react-router
- JavaScript (ES6+)
- 라이브러리
  - Swiper
  - framer-motion
- 반응형 제작
  
---

### Swiper 사용 이유
Swiper 라이브러리를 선택한 주된 이유는 다양한 커스텀 기능을 제공하여 원본 페이지의 복잡한 캐러셀 디자인을 쉽게 구현할 수 있었기 때문입니다. </br>
메인 페이지 내 4개의 캐러셀 중 유사한 구조를 가진 3개의 캐러셀을 하나의 컴포넌트로 통합하여 코드 중복을 최소화하고 유지보수 효율성을 높였습니다.

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

---
### Title.jsx 컴포넌트 사용
메인 페이지에서 자주 사용되고 있는 타이틀들을 (인사이트/브리프> , 동향보고서> , 연구보고서> , 데이터> , 더보기>) 하나의 컴포넌트로 사용하여 코드의 중복을 최소화하고 유지보수 효율성을 높였습니다.
```
import { Link } from "react-router";
import "./Title.css";
import arrow from "../assets/arrow_right.svg";

const Title = ({ text, url, size }) => {
  return (
    <Link className="Title" to={url}>
      <div className="title_wrapper">
        <div className="title_div">
          <h2>{text}</h2>
        </div>
        <div className="title_div2">
          <img src={arrow} className={size ? size : ""} />
        </div>
      </div>
    </Link>
  );
};
export default Title;
```

```
<Title text={"연구보고서"} url={"/"} />
```
이런식으로 제목과 url, size를 props로 보낸후 사용하고 있습니다

---
### frame-motion 사용 및 선정이유
기존의 야놀자리서치 페이지를 보면 스크롤을 내릴때 컴포넌트가 숨어있다가 나오는 모션이 취해집니다 </br>
그래서 사용자 인터랙션에 반응하는 동적인 요소를 추가하기 위해 Framer Motion을 사용했습니다 </br>
평소에도 깔끔하고 직관적인 홈페이지 레이아웃이나 모션에 관심이 많았는데 이번 프로젝트를 통해서 사용해볼수 있어서 좋았습니다 </br>
또한 커스텀이 편리해서 다음에도 또 써보며 계속 사용하며 더 복잡한 인터랙션을 시도해보고 싶습니다.

---

### 트러블슈팅

- < > 좌우 버튼 클릭시 캐러셀들이 한꺼번에 좌우로 이동하는 문제
```
      <div className={`custom-button-next custom-button-next-${type}`}></div>
      <div className={`custom-button-prev custom-button-prev-${type}`}></div>
```
< > 좌우 버튼으로 사용하는 div의 className이 동일하여 생긴 문제였습니다 </br>
기존 className 뒤에 props로 받아온 type을 붙여서 각자 다 다른이름을 주어 해결하였습니다.

- 페이지네이션 클릭시 페이지네이션 사용하는 모든 캐러셀이 다 같이 움직이는 문제
```
<div className={`custom-pagination-${type}`}></div>
```
위의 좌우버튼과 동일하게 className을 동일하게 주어 생긴 문제였습니다 </br>
기존 className 뒤에 props로 받아온 type을 붙여 각자 다 다른이름을 사용하여 해결하였습니다.

---

### 반응형 제작
<img width="400" height="8000" alt="야놀자리서치" src="https://github.com/user-attachments/assets/2117ae72-a303-4dc3-bf6b-74d9a87e438b" />




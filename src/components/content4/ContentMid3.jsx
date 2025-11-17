import "./ContentMid3.css";
import Title from "../Title";
import email from "../../assets/icon_mail.svg";
import { Link } from "react-router";
import { useState } from "react";

//뉴스데이터
import { newsData } from "../../util/news_data";

const ContentMid3 = () => {
  const [news, setNews] = useState(1);
  // 1 - 언론
  // 2 - 보도자료

  const onClickTitle = (num) => {
    return setNews(num);
  };

  return (
    <div className="ContentMid3 contentWrapper">
      <div className="contentMid3_left">
        <div className="contentMid3_title">
          <div className="contentMid3_subTitle">
            <div
              className={`news ${news === 1 ? "active" : ""}`}
              onClick={() => onClickTitle(1)}
            >
              언론보도
            </div>
            <span>|</span>
            <div
              className={`news ${news === 2 ? "active" : ""}`}
              onClick={() => onClickTitle(2)}
            >
              보도자료
            </div>
          </div>
          <div className="left_text">
            <Title text={"더보기"} size={"small"} />
          </div>
        </div>

        <div className="news_wrapper">
          {newsData
            .filter((item) => item.type === news) // type을 news 값으로 필터링
            .slice(0, 5)
            .map((item, index) => (
              <Link className="news_link">
                <div className="news_content" key={index}>
                  <div className="news_title">{item.title}</div>
                  <div className="news_date">{item.date}</div>
                </div>
              </Link>
            ))}
        </div>
      </div>

      <div className="contentMid3_right">
        <Title text={"데이터"} url={"/"} />
        <Link to={"/"} className="right_link">
          <div className="right_wrapper">
            <div className="right_img">
              <img src={email} />
            </div>
            <div className="right_content">
              <p>
                야놀자리서치가 활용한 데이터를 <br />
                편하게 사용해보세요!
              </p>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};
export default ContentMid3;

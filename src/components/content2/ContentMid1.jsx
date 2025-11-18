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

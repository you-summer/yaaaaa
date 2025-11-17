import CarouselTest from "../CarouselTest";
import Title from "../Title";
import "./ContentMid2.css";
// import MidContentCarousel from "./MidContentCarousel";
import "../ContentWrapper.css";

const ContentMid2 = () => {
  return (
    <div className="ContentMid2">
      <div className="contentWrapper">
        <Title text={"연구보고서"} url={"/"} />
        <CarouselTest
          type={"report"}
          spaceBetween={20}
          slidesPerView={4.5} // 한 화면에 5개 보임
          slidesPerGroup={1} // 이동할 때 5개씩 이동
        />
      </div>
    </div>
  );
};
export default ContentMid2;

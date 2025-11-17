import CarouselTest from "../CarouselTest";
import Title from "../Title";
import "./MidRightContent1.css";

const MidRightContent1 = () => {
  return (
    <div className="MidRightContent1">
      <Title text={"동향보고서"} url={""} />
      <CarouselTest
        type={"trend"}
        spaceBetween={0}
        slidesPerView={1}
        slidesPerGroup={1}
        scrollBarHide={true}
      />
    </div>
  );
};
export default MidRightContent1;

import CarouselTest from "../CarouselTest";
import Title from "../Title";
import "./ContentMid2.css";
import MidContentCarousel from "./MidContentCarousel";

const ContentMid2 = () => {
  return (
    <div className="ContentMid2">
      <Title text={"연구보고서"} url={"/"} />
      {/* <MidContentCarousel /> */}
      <CarouselTest />
    </div>
  );
};
export default ContentMid2;

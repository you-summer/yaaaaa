import Title from "../Title";
import "./MidRightContent1.css";
import RightCarousel from "./RightCarousel";

const MidRightContent1 = () => {
  return (
    <div className="MidRightContent1">
      <Title text={"동향보고서"} url={""} />
      <RightCarousel />
    </div>
  );
};
export default MidRightContent1;

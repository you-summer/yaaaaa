import "./MidLeftContent1.css";
import Title from "../Title";
import LeftCarousel from "./LeftCarousel.jsx";

const MidLeftContent1 = () => {
  return (
    <div className="MidLeftContent1">
      <Title text={"인사이트 / 브리프"} url={"/"} />
      <LeftCarousel />
    </div>
  );
};
export default MidLeftContent1;

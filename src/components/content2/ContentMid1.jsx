import MidLeftContent1 from "./MidLeftContent1";
import MidRigthContent1 from "./MidRightContent1";
import "./ContentMid1.css";

const ContentMid1 = () => {
  return (
    <div className="ContentMid1">
      <div className="contentMid1_left">
        <MidLeftContent1 />
      </div>
      <div className="contentMid1_right">
        <MidRigthContent1 />
      </div>
    </div>
  );
};
export default ContentMid1;

import "./ContentTop.css";
import LeftContent from "./LeftContent";
import RightContent from "./RightContent";

const ContentTop = () => {
  const rightContent = [
    { text: "야놀자 매력도 지수", url: "", type: "chart" },
    { text: "야놀자 브랜드자산 지수", url: "", type: "glass" },
    { text: "데이터랩", url: "", type: "datalab" },
  ];

  return (
    <div className="ContentTop">
      <div className="contentTop_left">
        <LeftContent />
      </div>
      <div className="contentTop_right">
        {rightContent.map((item) => {
          return <RightContent item={item} />;
        })}
      </div>
    </div>
  );
};
export default ContentTop;

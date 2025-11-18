import { Link } from "react-router";
import "./ContentMid4.css";
import { snsIcon } from "../../util/snsIcon_data";

const ContentMid4 = () => {
  return (
    <div className="ContentMid4">
      <div className="contentWrapper">
        <div className="mid4_title">
          <div className="mid4_subTitle">
            야놀자리서치의 더 많은 소식을 SNS로 만나보세요.
          </div>
          <div className="mid4_sns_wrapper">
            {snsIcon.map((item) => {
              return (
                <Link>
                  <img src={item.name} />
                </Link>
              );
            })}
          </div>
        </div>
        <Link to={"/"}>
          <div className="mid4_sub">구독신청하기</div>
        </Link>
      </div>
    </div>
  );
};
export default ContentMid4;

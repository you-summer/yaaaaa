import { Link } from "react-router";
import "./RightContent.css";

const RightContent = ({ item }) => {
  return (
    <div className={`RightContent ${item.type}`}>
      <div>{item.text}</div>
      <Link to={item.url}>바로가기 {`>`}</Link>
    </div>
  );
};
export default RightContent;

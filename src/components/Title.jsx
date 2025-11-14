import { Link } from "react-router";
import "./Title.css";
import arrow from "../assets/arrow_right.svg";

const Title = ({ text, url }) => {
  return (
    <div className="Title">
      <Link className="title_link">
        <div className="title_div">
          <h2>{text}</h2>
        </div>
        <div className="title_div2">
          <img src={arrow} />
        </div>
      </Link>
    </div>
  );
};
export default Title;

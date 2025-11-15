import { Link } from "react-router";
import "./Title.css";
import arrow from "../assets/arrow_right.svg";

const Title = ({ text, url }) => {
  return (
    <Link className="Title" to={url}>
      <div className="title_wrapper">
        <div className="title_div">
          <h2>{text}</h2>
        </div>
        <div className="title_div2">
          <img src={arrow} />
        </div>
      </div>
    </Link>
  );
};
export default Title;

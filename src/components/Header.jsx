import { Link } from "react-router";
import "./Header.css";
import logo from "../assets/logo.svg";
import { headerMenuData } from "../util/header_menu.js";
import { useState } from "react";

const Header = () => {
  const [showContent, setShowContent] = useState(false);

  return (
    <div className="Header">
      <div className="header_top">
        <div className="header_left">
          <Link to={"/"}>
            <img src={logo} />
          </Link>
        </div>
        <div
          className="header_center"
          onMouseEnter={() => setShowContent(true)}
        >
          <Link to={"/"}>Research</Link>
          <Link to={"/"}>Datalab</Link>
          <Link to={"/"}>Indexes</Link>
          <Link to={"/"}>About</Link>
        </div>
        <div className="header_rigth">
          <select name="language" value="KR">
            <option value="KR">KR</option>
            <option value="EN">EN</option>
          </select>
        </div>
      </div>

      <div
        className={`header_content ${showContent ? "show" : ""}`}
        onMouseLeave={() => setShowContent(false)}
      >
        {headerMenuData.map((menuGroup, index) => {
          return (
            <ul key={index}>
              {menuGroup.map((item) => {
                return (
                  <li>
                    <Link to={item.url}>{item.text}</Link>
                  </li>
                );
              })}
            </ul>
          );
        })}
      </div>
    </div>
  );
};
export default Header;

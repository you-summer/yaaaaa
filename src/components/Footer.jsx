import "./Footer.css";
import { familySiteData } from "../util/footer_family_data.js";
import whiteLogo from "../assets/logo_white.svg";
import { Link } from "react-router";
import { companyInfo } from "../util/company_info.js";

const Footer = () => {
  const onChangeSelect = (e) => {
    let value = e.target.value;
    if (value) {
      window.open(value);
    }
  };

  return (
    <div className="Footer">
      <div className="footer_left">
        <img src={whiteLogo} />
        <h3>
          <Link>개인정보 처리방침</Link>
        </h3>
        <div className="footer_companyInfo">
          {companyInfo.map((item) => {
            return (
              <div className={item.label === "Y-Siren" ? "hilight" : ""}>
                {item.text}
                {item.value}
              </div>
            );
          })}
        </div>

        <div className="footer_reserved">
          © YANOLJA RESEARCH. All rights reserved.
        </div>
      </div>

      <div className="footer_right">
        <select name="footerSelected" onChange={onChangeSelect}>
          {familySiteData.map((item) => {
            return <option value={item.url}>{item.text}</option>;
          })}
        </select>
      </div>
    </div>
  );
};
export default Footer;

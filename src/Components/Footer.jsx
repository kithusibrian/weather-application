import React from "react";
import "./Footer.css";

import { SocialIcon } from "react-social-icons";

function Footer() {
  return (
    <div className="footer">
      <div className="socialMedi">
        <SocialIcon
          url="https://twitter.com/StreetPresenter"
          className="mr-4"
          target="_blank"
          fgColor="#fff"
          style={{ height: 35, width: 35 }}
        />
        <SocialIcon
          url="https://www.instagram.com/__.sensei._.scott.___/"
          className="mr-4"
          target="_blank"
          fgColor="#fff"
          style={{ height: 35, width: 35 }}
        />
        <SocialIcon
          url="https://web.facebook.com/BrianKithusi/"
          className="mr-4"
          target="_blank"
          fgColor="#fff"
          style={{ height: 35, width: 35 }}
        />
        <SocialIcon
          url="https://www.linkedin.com/in/brian-kithusi-9a2a42198/"
          className="mr-4"
          target="_blank"
          fgColor="#fff"
          style={{ height: 35, width: 35 }}
        />
      </div>
      <p>&copy; 2023 Brian Kithusi Tech</p>
    </div>
  );
}

export default Footer;

import React from "react";
import "./Footer.css";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

const Footer = () => {
  return (
    <div className="footer-container">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13254.014664887185!2d35.5075371!3d33.8509084!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151f17c30750c5eb%3A0xb4e387149e97bf6c!2sBazzi%20Jewellery!5e0!3m2!1sen!2slb!4v1684077555851!5m2!1sen!2slb"
        width="600"
        height="450"
        style={{ border: "0" }}
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
      <div class="logos">
        <h2>BAZZI JEWELRY</h2>
      </div>

      <div class="links">
        <ul>
          <li>
            <InstagramIcon />
          </li>
          <li>
            <FacebookIcon />
          </li>
          <li>
            <WhatsAppIcon />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;

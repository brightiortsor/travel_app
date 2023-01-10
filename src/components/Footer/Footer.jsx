import React, { useEffect } from "react";
import { BsInstagram, BsReddit, BsTwitter } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";
import { SiYourtraveldottv } from "react-icons/si";
import "./Footer.css";
import Aos from "aos";
import "aos/dist/aos.css";

const Footer = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div id="footer" className="footer">
      <div className="sec-container container grid">
        <div className="footer-content flex">
          <div className="icons-div">
            <div className="logo-div">
              <div className="footer-logo">
                <a href="/" className="logo">
                  <h1
                    className="flex"
                    data-aos="fade-up"
                    data-aos-duration="2000"
                  >
                    <SiYourtraveldottv className="icon" />
                    PointX
                  </h1>
                </a>
              </div>
            </div>

            <div
              className="socials flex"
              data-aos="fade-up"
              data-aos-duration="2000"
            >
              <FaFacebook className="icon" />
              <BsInstagram className="icon " />
              <BsTwitter className="icon " />
              <BsReddit className="icon " />
            </div>
          </div>

          <div className="footer-links flex">
            <div
              className="helpful-links"
              data-aos="fade-up"
              data-aos-duration="2000"
            >
              <span className="link-title">Helpful Links</span>
              <li>
                <a href="/">Destination</a>
              </li>
              <li>
                <a href="/">Hotels</a>
              </li>
              <li>
                <a href="/">Flights</a>
              </li>
              <li>
                <a href="/">Reviews</a>
              </li>
            </div>

            <div
              className="other-links"
              data-aos="fade-up"
              data-aos-duration="2500"
            >
              <span className="link-title">Others</span>
              <li>
                <a href="/">About us</a>
              </li>
              <li>
                <a href="/">Support</a>
              </li>
              <li>
                <a href="/">Contact us</a>
              </li>
              <li>
                <a href="/">Tour</a>
              </li>
            </div>
          </div>
        </div>
        <p data-aos="fade-up" data-aos-duration="6000">
          &copy; 2022. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;

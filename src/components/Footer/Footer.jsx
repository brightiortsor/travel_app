import React from "react";
import { BsInstagram, BsReddit, BsTwitter } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";
import { SiYourtraveldottv } from "react-icons/si";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="sec-container container grid">
        <div className="footer-content flex">
          <div className="icons-div">
            <div className="logo-div">
              <div className="footer-logo">
                <a href="/" className="logo">
                  <h1 className="flex">
                    <SiYourtraveldottv className="icon" />
                    PointX
                  </h1>
                </a>
              </div>
            </div>

            <div className="socials flex">
              <FaFacebook className="icon fb-icon" />
              <BsInstagram className="icon insta-icon" />
              <BsTwitter className="icon twit-icon" />
              <BsReddit className="icon red-icon" />
            </div>
          </div>

          <div className="footer-links flex">
            <div className="helpful-links">
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

            <div className="other-links">
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
      </div>
    </div>
  );
};

export default Footer;

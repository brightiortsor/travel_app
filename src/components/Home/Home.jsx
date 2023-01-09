/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect } from "react";
import "./Home.css";
import Aos from "aos";
import "aos/dist/aos.css";

const Home = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <section id="home" className="home">
      <div className="sec-container container">
        <div className="home-text">
          <h1 data-aos="fade-down" className="title">
            Plan Your Trip with Point X!
          </h1>

          <p
            data-aos="fade-down"
            data-aos-duration="2500"
            className="sub-title"
          >
            Travel with Point X and get the best deals on your next trip!
          </p>

          <button
            className="btn explore-btn"
            data-aos="fade-down"
            data-aos-duration="3000"
          >
            <a href="#">Explore Now</a>
          </button>
        </div>

        <div className="home-card grid">
          <div
            className="location-div"
            data-aos="fade-right"
            data-aos-duration="2000"
          >
            <label htmlFor="location">Location</label>
            <input type="text" placeholder="Dream Destination" />
          </div>

          <div
            className="distance-div"
            data-aos="fade-right"
            data-aos-duration="2500"
          >
            <label htmlFor="distance">Distance</label>
            <input type="text" placeholder="16 / Miles" />
          </div>

          <div
            className="price-div"
            data-aos="fade-right"
            data-aos-duration="3000"
          >
            <label htmlFor="price">Price</label>
            <input type="text" placeholder="$250 - $1000" />
          </div>

          <button className="btn">Search</button>
        </div>
      </div>
    </section>
  );
};

export default Home;

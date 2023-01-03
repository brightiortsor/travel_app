/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <section className="home">
      <div className="sec-container container">
        <div className="home-text">
          <h1 className="title">Plan Your Trip with Point X!</h1>

          <p className="sub-title">
            Travel with Point X and get the best deals on your next trip!
          </p>

          <button className="btn explore-btn">
            <a href="#">Explore Now</a>
          </button>
        </div>

        <div className="home-card grid">
          <div className="location-div">
            <label htmlFor="location">Location</label>
            <input type="text" placeholder="Dream Destination" />
          </div>

          <div className="distance-div">
            <label htmlFor="distance">Distance</label>
            <input type="text" placeholder="16 / Miles" />
          </div>

          <div className="price-div">
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

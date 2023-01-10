import React, { useEffect } from "react";
import "./About.css";
import Mountain from "../../assets/mountain1.svg";
import Hikers from "../../assets/hiker.svg";
import Customers from "../../assets/customers1.svg";
import Img from "../../assets/gif.gif";
import Aos from "aos";
import "aos/dist/aos.css";

const About = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <section id="about" className="about section">
      <div className="sec-container">
        <div className="title" data-aos="fade-up" data-aos-duration="2000">
          <h2>Why Hiking?</h2>
        </div>
        <div className="main-content container grid">
          <div
            className="single-item"
            data-aos="fade-up"
            data-aos-duration="2000"
          >
            <img src={Mountain} alt="mount fiji" />
            <h3>100+ Mountains</h3>
            <p>
              Research shows that hiking can help you lose weight, lower your
              risk of heart disease, and even improve your mood. There are
              tonnes of mountains to hike at choiced locations.
            </p>
          </div>

          <div
            className="single-item"
            data-aos="fade-up"
            data-aos-duration="2500"
          >
            <img src={Hikers} alt="hikers on mountain top" />
            <h3>5000+ Hikings</h3>
            <p>
              With the right gear and a little know-how, you can enjoy the great
              outdoors and get a good workout at the same time. Hiking is a
              great way to get outside and enjoy nature.
            </p>
          </div>

          <div
            className="single-item"
            data-aos="fade-up"
            data-aos-duration="3000"
          >
            <img src={Customers} alt="satisfied customers" />
            <h3>2000+ Tourists</h3>
            <p>
              Hiking is a great way to get outside and enjoy nature. With over
              2000+ satisfied customers, we are the best hiking company in the
              world.
            </p>
          </div>
        </div>

        <div className="img-card container">
          <div className="card-content grid">
            <div
              className="card-text"
              data-aos="fade-right"
              data-aos-duration="2000"
            >
              <h2>Wonderful house experience in the middle of nature.</h2>
              <p>
                The adventure subranking is based on the number of trips that
                include the activity. The more trips that include the activity,
                the higher the ranking.
              </p>
            </div>

            <div
              className="card-img"
              data-aos="fade-left"
              data-aos-duration="2500"
            >
              <img src={Img} alt="lighting img" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

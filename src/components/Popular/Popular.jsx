import React from "react";
import "./Popular.css";
import { BsArrowLeftShort, BsArrowRightShort, BsDot } from "react-icons/bs";
import Img1 from "../../assets/img1.avif";
import Img2 from "../../assets/img2.avif";
import Img3 from "../../assets/img3.avif";
import Img4 from "../../assets/img4.avif";
import Img5 from "../../assets/img5.avif";
import Img6 from "../../assets/img6.avif";

const data = [
  {
    id: 1,
    image: Img1,
    title: "The Royal Palace",
    subtitle: "Home to King Charles II",
    city: "London",
  },
  {
    id: 2,
    image: Img2,
    title: "Machu Picchu",
    subtitle: "Cultural wonder of the world",
    city: "Peru",
  },
  {
    id: 3,
    image: Img3,
    title: "The Great Wall of China",
    subtitle: "One of the seven wonders of the world",
    city: "China",
  },
  {
    id: 4,
    image: Img4,
    title: "The Colosseum",
    subtitle: "The largest amphitheater in the world",
    city: "Rome",
  },
  {
    id: 5,
    image: Img5,
    title: "The Eiffel Tower",
    subtitle: "Symbol of Paris",
    city: "Paris",
  },
  {
    id: 6,
    image: Img6,
    title: "The Taj Mahal",
    subtitle: "A symbol of love",
    city: "India",
  },
];

const Popular = () => {
  return (
    <section className="popular container">
      <div className="sec-container">
        <div className="sec-header flex">
          <div className="text-div">
            <h2 className="sec-title">Popular Destination</h2>
            <p>
              From historical cities to beaches, come let's travel the world
              together!
            </p>
          </div>

          <div className="icons-div">
            <BsArrowLeftShort className="icon" />
            <BsArrowRightShort className="icon" />
          </div>
        </div>
        {data.map(({ id, image, title, subtitle, city }) => {
          return (
            <div className="main-content grid">
              <div key={id} className="single-dest">
                <div className="dest-image">
                  <img src={image} alt="destination" />

                  <div className="overlay-info">
                    <h3>{title}</h3>
                    <p>{subtitle}</p>
                    <BsArrowRightShort className="icon" />
                  </div>
                </div>

                <div className="dest-footer">
                  <div className="number">{id}</div>
                  <div className="dest-text flex">
                    <h6>{city}</h6>
                    <span className="flex">
                      <span className="dot">
                        <BsDot className="icon" />
                      </span>
                      PointX
                    </span>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Popular;

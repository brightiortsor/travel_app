import React, { useEffect } from "react";
import "./Offers.css";
import {
  MdAirportShuttle,
  MdBathtub,
  MdKingBed,
  MdLocationOn,
} from "react-icons/md";
import { FaWifi } from "react-icons/fa";
import { BsArrowRightShort } from "react-icons/bs";
import Img1 from "../../assets/1.avif";
import Img2 from "../../assets/2.avif";
import Img3 from "../../assets/3.avif";
import Img4 from "../../assets/4.avif";
import Img5 from "../../assets/5.avif";
import Img6 from "../../assets/6.avif";
import Aos from "aos";
import "aos/dist/aos.css";

const offers = [
  {
    id: 1,
    img: Img1,
    discount: "30% Off",
    oldPrice: "$1000",
    discountPrice: "$700",
    beds: "2 Beds",
    bath: "2 Baths",
    destination: "Machu Picchu",
    location: "Peru",
  },
  {
    id: 2,
    img: Img2,
    discount: "20% Off",
    oldPrice: "$700",
    discountPrice: "$560",
    beds: "1 Bed",
    bath: "1 Bath",
    destination: "The Great Pyramid of Giza",
    location: "Egypt",
  },
  {
    id: 3,
    img: Img3,
    discount: "10% Off",
    oldPrice: "$500",
    discountPrice: "$450",
    beds: "1 Bed",
    bath: "1 Bath",
    destination: "The Bahai Gardens",
    location: "Iran",
  },
  {
    id: 4,
    img: Img4,
    discount: "15% Off",
    oldPrice: "$800",
    discountPrice: "$680",
    beds: "2 Beds",
    bath: "2 Baths",
    destination: "The Forbidden City",
    location: "China",
  },
  {
    id: 5,
    img: Img5,
    discount: "25% Off",
    oldPrice: "$900",
    discountPrice: "$675",
    beds: "2 Beds",
    bath: "2 Baths",
    destination: "The Bahamas",
    location: "Bahamas",
  },
  {
    id: 6,
    img: Img6,
    discount: "30% Off",
    oldPrice: "$1000",
    discountPrice: "$700",
    beds: "2 Beds",
    bath: "2 Baths",
    destination: "Bora Bora",
    location: "French Polynesia",
  },
];

const Offers = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <section id="offers" className="offer container section">
      <div className="sec-container">
        <div className="sec-intro" data-aos="fade-up" data-aos-duration="2000">
          <h2 className="sec-title">Special Offers</h2>
          <p>
            From historic sites to modern art, there's something for everyone!
          </p>
        </div>

        <div className="main-content grid">
          {offers.map(
            ({
              id,
              img,
              discount,
              oldPrice,
              discountPrice,
              beds,
              bath,
              destination,
              location,
            }) => {
              return (
                <div
                  key={id}
                  className="single-offer"
                  data-aos="fade-up"
                  data-aos-offset="300"
                  data-aos-easing="ease-in-sine"
                  data-aos-duration="3500"
                >
                  <div className="dest-image">
                    <img src={img} alt="destination" />
                    <span className="discount">{discount}</span>
                  </div>

                  <div className="offer-body">
                    <div className="price-div flex">
                      <div className="flex">
                        <span className="old-price">{oldPrice}</span>
                        <h4 className="discount-price">{discountPrice}</h4>
                      </div>
                      <p className="for-rent">For Rent</p>
                    </div>

                    <div className="amenities flex">
                      <div className="amenity flex">
                        <MdKingBed className="icon" />
                        <small>{beds}</small>
                      </div>

                      <div className="amenity flex">
                        <MdBathtub className="icon" />
                        <small>{bath}</small>
                      </div>

                      <div className="amenity flex">
                        <FaWifi className="icon" />
                        <small>Free WiFi</small>
                      </div>

                      <div className="amenity flex">
                        <MdAirportShuttle className="icon" />
                        <small>Bus Shuttle</small>
                      </div>
                    </div>

                    <div className="location flex">
                      <MdLocationOn className="icon" />
                      <small>
                        {destination}, {location}
                      </small>
                    </div>

                    <button className="btn">
                      <span className="btn-view">
                        View details <BsArrowRightShort className="icon" />
                      </span>
                    </button>
                  </div>
                </div>
              );
            }
          )}
        </div>
      </div>
    </section>
  );
};
export default Offers;

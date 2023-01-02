/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./Navbar.css";
import { SiYourtraveldottv } from "react-icons/si";
import { AiFillCloseCircle } from "react-icons/ai";
import { CgMenuGridR } from "react-icons/cg";

const Navbar = () => {
  return (
    <section className="navSection">
      <div className="header">
        <div className="logoDiv">
          <a href="#" className="logo">
            <h1 className="flex">
              <SiYourtraveldottv className="icon" />
              Spot.
            </h1>
          </a>
        </div>

        <div className="navBar">
          <ul className="navList flex">
            <li className="navItem">
              <a href="#" className="navLink">
                Home
              </a>
            </li>

            <li className="navItem">
              <a href="#" className="navLink">
                Products
              </a>
            </li>

            <li className="navItem">
              <a href="#" className="navLink">
                Resources
              </a>
            </li>

            <li className="navItem">
              <a href="#" className="navLink">
                Contact
              </a>
            </li>

            <li className="navItem">
              <a href="#" className="navLink">
                Blog
              </a>
            </li>

            <div className="headerBtn">
              <button className="btn login-btn">Login</button>
            </div>

            <div className="headerBtn">
              <button className="btn signup-btn">Sign Up</button>
            </div>
          </ul>

          <div className="closeNav">
            <AiFillCloseCircle className="icon" />
          </div>
        </div>

        <div className="toggleNav">
          <CgMenuGridR className="icon" />
        </div>
      </div>
    </section>
  );
};

export default Navbar;

/* eslint-disable jsx-a11y/img-redundant-alt */
import { Splide, SplideSlide } from "@splidejs/react-splide";
import React from "react";
import image3 from "./images/Slide3.JPG";
// import image4 from "./images/image2.jpg";
import "./App.css";

const Slider = () => {
  const options = {
    type: "fade",
    // type: "loop",
    rewind: true,
    gap: "1rem",
    autoplay: true,
    pauseOnHover: true,
    resetProgress: false,
    height: "100vh",
    pagination: false,
    arrows: false,
    speed: 1000,
    interval: 2000,
  };

  return (
    <div className="container">
      <Splide options={options} aria-label="My Favorite Images">
        <SplideSlide>
          <img className="slide" src={image3} alt="Picture 1" />
        </SplideSlide>
        {/* <SplideSlide>
          <img className="slide" src={image4} alt="Picture 2" />
        </SplideSlide> */}
      </Splide>
    </div>
  );
};

export default Slider;

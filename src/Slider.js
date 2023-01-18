/* eslint-disable jsx-a11y/img-redundant-alt */
import { Splide, SplideSlide } from "@splidejs/react-splide";
import React from "react";
// import image1 from "./images/Slide1.PNG";
// import image2 from "./images/Slide2.PNG";
// import image3 from "./images/Slide3.PNG";
import { client, urlFor } from "./client";
import { useEffect, useState } from "react";
import "./App.css";

const Slider = () => {
  const [images, setImages] = useState(null);
  const slides = `*[_type == "slides"]`;

  const options = {
    // type: "fade",
    type: "loop",
    // rewind: true,
    gap: "1rem",
    autoplay: true,
    pauseOnHover: false,
    resetProgress: false,
    height: "100vh",
    pagination: false,
    arrows: false,
    speed: 2000,
    interval: 15000,
  };

  useEffect(() => {
    client
      .fetch(slides)
      .then((images) => {
        setImages(images);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [slides]);

  return (
    <div className="container">
      <Splide options={options} aria-label="My Favorite Images">
        <SplideSlide>
          {/* <img className="slide" src={image1} alt="Picture 1" /> */}
          {images && (
            <img
              className="slide"
              src={urlFor(images[2].image).url()}
              alt={images[2].title}
            />
          )}
        </SplideSlide>
        <SplideSlide>
          {/* <img className="slide" src={image2} alt="Picture 2" /> */}
          {images && (
            <img
              className="slide"
              src={urlFor(images[1].image).url()}
              alt={images[1].title}
            />
          )}
        </SplideSlide>
        <SplideSlide>
          {/* <img className="slide" src={image3} alt="Picture 2" /> */}
          {images && (
            <img
              className="slide"
              src={urlFor(images[0].image).url()}
              alt={images[0].title}
            />
          )}
        </SplideSlide>
      </Splide>
    </div>
  );
};

export default Slider;

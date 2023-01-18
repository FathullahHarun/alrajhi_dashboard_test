/* eslint-disable jsx-a11y/img-redundant-alt */
import { Splide, SplideSlide } from "@splidejs/react-splide";
import React from "react";
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
  }, [slides, images]);

  images && images.sort((a, b) => (a._createdAt > b._createdAt ? 1 : -1));

  return (
    <div className="container">
      <Splide options={options} aria-label="My Favorite Images">
        {images &&
          images.map((image, index) => (
            <SplideSlide key={index}>
              <img
                className="slide"
                src={urlFor(image.image).url()}
                alt={image.title}
              />
            </SplideSlide>
          ))}
      </Splide>
    </div>
  );
};

export default Slider;

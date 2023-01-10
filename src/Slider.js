/* eslint-disable jsx-a11y/img-redundant-alt */
import { Splide, SplideSlide } from "@splidejs/react-splide";
import React from "react";
import image1 from "./images/Slide1.JPG";
import image2 from "./images/Slide2.JPG";
import "./App.css";

const Slider = () => {
	const options = {
		type: "fade",
		// type : "loop"
		rewind: true,
		gap: "1rem",
		autoplay: true,
		pauseOnHover: true,
		resetProgress: true,
		height: "100vh",
		pagination: true,
		arrows: false,
		speed: 3000,
		interval: 10000,
	};

	return (
		<div className="container">
			<Splide options={options} aria-label="My Favorite Images">
				<SplideSlide>
					<img className="slide" src={image1} alt="Picture 1" />
				</SplideSlide>
				<SplideSlide>
					<img className="slide" src={image2} alt="Picture 2" />
				</SplideSlide>
			</Splide>
		</div>
	);
};

export default Slider;

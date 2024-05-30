import React from 'react'
import "./Hero.css"
import hero from "../../assets/hero.png"
const Hero = () => {
  return (
		<div className="hero">
			<div className="heroLeft">
				<div className="heroImage">
					<img src={hero} alt="" />
				</div>
			</div>
			<div className="heroRight">
				<h1>Choose Laptop</h1>
				<p>
					Discover the Latest Models and Best Deals Tailored to Suit Every Need
				</p>
				<button>More</button>
			</div>
		</div>
	);
}

export default Hero
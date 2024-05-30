import React from 'react'
import "./Navbar.css"
import { FaLaptop } from "react-icons/fa";
const Navbar = () => {
  return (
		<div className="header">
			<div className="logo">
				<p>LAPMART</p>
                <FaLaptop className='laptop'/>
			</div>
			<ul className="links">
				<li>Home</li>
				<li>About</li>
				<li>Contact</li>
				<li>Connect Us</li>
			</ul>
			<div className="cart">
				<button className='cartbtn'>SIgnIn</button>
				<button className='login'>SignUp</button>
			</div>
			
		</div>
	);
}

export default Navbar
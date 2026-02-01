'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	return (
		<nav className="navbar">
		<div className="navbar-container">
			<Link href="/" className="navbar-logo">
				<img src="images/logo.svg" alt="Get-ED"/>
			</Link>

			<button className="navbar-toggle" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
				<i className={`fa-solid ${isMenuOpen ? 'fa-xmark' : 'fa-bars'}`}></i>
			</button>

			<ul className={`navbar-menu ${isMenuOpen ? 'active' : ''}`}>
			<li><Link href="/" onClick={() => setIsMenuOpen(false)}>Home</Link></li>
			<li><Link href="#about" onClick={() => setIsMenuOpen(false)}>About Us</Link></li>
			<li><Link href="#services" onClick={() => setIsMenuOpen(false)}>Services</Link></li>
			<li><Link href="#destinations" onClick={() => setIsMenuOpen(false)}>Destinations</Link></li>
			<li>
				<Link href="/apply" className="btn-apply" onClick={() => setIsMenuOpen(false)}>
				Apply Now
				</Link>
			</li>
			</ul>
		</div>
		</nav>
	);
}

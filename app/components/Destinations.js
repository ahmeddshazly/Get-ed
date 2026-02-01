'use client';

import { useState, useEffect, useCallback } from 'react';

const destinations = [
	{
		id: 1,
		country: 'United Kingdom',
		image: '/images/Countries/Uk.jpg',
		tuition: '£10,000 - £35,000',
		description: 'World-renowned universities with centuries of academic excellence.'
	},
	{
		id: 2,
		country: 'Germany',
		image: '/images/Countries/Germany.jpg',
		tuition: '€9,500 - €20,000',
		description: 'High-quality education at affordable tuition rates.'
	},
	{
		id: 3,
		country: 'United States',
		image: '/images/Countries/Usa.jpg',
		tuition: '$16,000 - $45,000',
		description: 'Diverse programs and cutting-edge research opportunities.'
	},
	{
		id: 4,
		country: 'Canada',
		image: '/images/Countries/Canada.jpg',
		tuition: 'CAD 15,000 - CAD 35,000',
		description: 'High quality education with excellent post-study work options.'
	},
	{
		id: 5,
		country: 'Spain',
		image: '/images/Countries/Spain.jpg',
		tuition: '€2,000 - €12,900',
		description: 'Vibrant culture with affordable European education.'
	},
	{
		id: 6,
		country: 'France',
		image: '/images/Countries/France.jpg',
		tuition: '€9,000 - €15,500',
		description: 'Rich culture combined with prestigious academic programs.'
	},
	{
		id: 7,
		country: 'UAE',
		image: '/images/Countries/Uae.jpg',
		tuition: '$15,000 - $20,000',
		description: 'Modern campuses with international degree programs.'
	},
	{
		id: 8,
		country: 'Italy',
		image: '/images/Countries/Italy.jpg',
		tuition: '€3,500 - €5,500',
		description: 'Historic universities with world-class art and design programs.'
	}
];

export default function Destinations() {
	const [currentIndex, setCurrentIndex] = useState(0);
	const [isAutoPlaying, setIsAutoPlaying] = useState(true);

	const nextSlide = useCallback(() => {
		setCurrentIndex((prev) => (prev + 1) % destinations.length);
	}, []);

	const prevSlide = () => {
		setCurrentIndex((prev) => (prev - 1 + destinations.length) % destinations.length);
	};

	const goToSlide = (index) => {
		setCurrentIndex(index);
		setIsAutoPlaying(false);
	};

	useEffect(() => {
		if (!isAutoPlaying) return;
		const interval = setInterval(nextSlide, 4000);
		return () => clearInterval(interval);
	}, [isAutoPlaying, nextSlide]);

	const getVisibleCards = () => {
		const cards = [];
		for (let i = -1; i <= 2; i++) {
		const index = (currentIndex + i + destinations.length) % destinations.length;
		cards.push({ ...destinations[index], position: i });
		}
		return cards;
	};

	return (
		<section id="destinations" className="destinations section">
		<div className="container">
			<div className="section-title">
			<h2>Study <span>Destinations</span></h2>
			<p>Explore top countries for your international education journey</p>
			</div>

			<div className="carousel-container">
			<button className="carousel-btn prev" onClick={prevSlide} aria-label="Previous">
				<i className="fa-solid fa-chevron-left"></i>
			</button>

			<div className="carousel-track">
				{getVisibleCards().map((dest, idx) => (
				<div
					key={`${dest.id}-${idx}`}
					className={`destination-card position-${dest.position}`}
				>
					<div className="card-image">
					<img src={dest.image} alt={dest.country} />
					</div>
					<div className="card-content">
					<h3>{dest.country}</h3>
					<p>{dest.description}</p>
					<div className="card-stats">
						<span><i className="fa-solid fa-coins"></i> {dest.tuition}/year</span>
					</div>
					</div>
				</div>
				))}
			</div>

			<button className="carousel-btn next" onClick={nextSlide} aria-label="Next">
				<i className="fa-solid fa-chevron-right"></i>
			</button>
			</div>

			<div className="carousel-dots">
			{destinations.map((_, index) => (
				<button
				key={index}
				className={`dot ${index === currentIndex ? 'active' : ''}`}
				onClick={() => goToSlide(index)}
				aria-label={`Go to slide ${index + 1}`}
				/>
			))}
			</div>
		</div>
		</section>
	);
}

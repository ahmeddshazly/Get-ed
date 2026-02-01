import Link from 'next/link';

export default function Hero() {
	return (
		<section className="hero">
		<div className="hero-background">
			<div className="hero-gradient"></div>
			<div className="hero-pattern"></div>
		</div>

		<div className="hero-content container">
			<div className="hero-text">
			<h1>
				Your Gateway to <br/>
				<span className="highlight">Global Education</span>
			</h1>
			<p>
				Start your journey to study abroad with Get-ED. We guide students through
				every step of their international education journey, from application to arrival.
			</p>
			<div className="hero-cta">
				<Link href="/apply" className="btn btn-accent">
				Start Your Journey
				<i className="fa-solid fa-arrow-right"></i>
				</Link>
				<Link href="#about" className="btn btn-outline">
				Learn More
				</Link>
			</div>
			</div>

			<div className="hero-visual">
			<div className="hero-card">
				<div className="card-icon"><i className="fa-solid fa-plane"></i></div>
				<h3>1000+</h3>
				<p>Universities</p>
			</div>
			<div className="hero-card">
				<div className="card-icon"><i className="fa-solid fa-graduation-cap"></i></div>
				<h3>3000+</h3>
				<p>Students Placed</p>
			</div>
			<div className="hero-card">
				<div className="card-icon"><i className="fa-solid fa-globe"></i></div>
				<h3>15+</h3>
				<p>Countries</p>
			</div>
			</div>
		</div>

		<div className="hero-scroll">
			<span>Scroll to explore</span>
			<div className="scroll-indicator"></div>
		</div>
		</section>
	);
}

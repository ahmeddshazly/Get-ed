const services = [
	{
		icon: 'fa-solid fa-book-open-reader',
		title: 'Academic Counselling & Country Guidance',
		description: 'Personalized advice to help you choose the right program and destination.'
	},
	{
		icon: 'fa-solid fa-graduation-cap',
		title: 'University Admission Support',
		description: 'Complete assistance with applications and documentation.'
	},
	{
		icon: 'fa-solid fa-passport',
		title: 'Visa File Preparation',
		description: 'Expert guidance through the visa application process for higher success rates.'
	},
	{
		icon: 'fa-solid fa-hand-holding-dollar',
		title: 'Scholarships & Financial Planning',
		description: 'Find funding opportunities and create a financial roadmap for your studies.'
	},
	{
		icon: 'fa-solid fa-house',
		title: 'Accommodation Arrangement',
		description: 'Secure safe and comfortable housing before you arrive.'
	},
	{
		icon: 'fa-solid fa-plane-arrival',
		title: 'Airport Pickup Coordination',
		description: 'Seamless arrival experience with arranged transportation.'
	},
	{
		icon: 'fa-solid fa-chalkboard-user',
		title: 'Pre-Departure Orientation',
		description: 'Everything you need to know before starting your journey abroad.'
	}
];

export default function About() {
	return (
		<>
		{/* About Section */}
		<section id="about" className="about section">
		<div className="container">
			{/* Why Choose Get-ED */}
			<div className="why-choose">
			<div className="why-choose-header">
				<h2>
				<span className="highlight-gold">Why choose</span><br/>
				<img src="/images/logo-yellow-plane.svg" alt="GET-ED" className="why-choose-logo" />
				<span className="question-mark">?</span>
				</h2>
			</div>
			<div className="why-choose-content">
				<p>
				Get-ED offers unmatched personalized, transparent, and professional guidance.
				We tailor every study plan to your goals, ensure higher admission and visa
				success, and provide clear, honest advice with no hidden fees.
				</p>
				<p>
				Our team delivers fast processing, continuous follow-up, expert visa preparation,
				scholarship support, and full assistance from admission to post-arrival. With
				strong global university partnerships and a commitment to student success.
				</p>
			</div>
			</div>

			<div className="tagline">
				<p>Get-ED is not just an agency,</p>
				<p><strong>it is a trusted partner dedicated to your future.</strong></p>
			</div>
		</div>
		</section>

		{/* Services Section */}
		<section id="services" className="services section">
		<div className="container">
			<div className="section-title">
				<h2>Our <span>Services</span></h2>
				<p>Comprehensive support for every step of your study abroad journey</p>
			</div>

			<div className="services-grid">
				{services.map((service, index) => (
				<div key={index} className="service-card">
					<div className="service-icon"><i className={service.icon}></i></div>
					<h3>{service.title}</h3>
					<p>{service.description}</p>
				</div>
				))}
			</div>
		</div>
		</section>
		</>
	);
}

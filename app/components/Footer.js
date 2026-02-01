import Link from 'next/link';

export default function Footer() {
return (
	<footer className="footer">
	<div className="container">
		<div className="footer-grid">
		<div className="footer-brand">
			<Link href="/" className="footer-logo">
				<img src="images/logo.svg" alt="Get-ED"/>
			</Link>
			<p>Empowering Minds, Creating Futures.</p>
			<div className="social-links">
				<a href="#" aria-label="Facebook" target="_blank">
					<i className="fa-brands fa-facebook-f"></i>
				</a>
				<a href="https://www.instagram.com/getedglobal" aria-label="Instagram" target="_blank">
					<i className="fa-brands fa-instagram"></i>
				</a>
				<a href="https://www.linkedin.com/company/getedglobal" aria-label="LinkedIn" target="_blank">
					<i className="fa-brands fa-linkedin-in"></i>
				</a>
			</div>
		</div>

		<div className="footer-links">
			<h4>Quick Links</h4>
			<ul>
			<li><Link href="/">Home</Link></li>
			<li><Link href="#about">About Us</Link></li>
			<li><Link href="#services">Services</Link></li>
			<li><Link href="#destinations">Destinations</Link></li>
			<li><Link href="/apply">Apply Now</Link></li>
			</ul>
		</div>

		<div className="footer-contact">
			<h4>Contact Us</h4>
			<ul>
			<li>
				<i className="fa-solid fa-envelope"></i>
				<a href="mailto:admissions@get-ed.com">admissions@get-ed.com</a>
			</li>
			<li>
				<i className="fa-solid fa-envelope"></i>
				<a href="mailto:srh@get-ed.com">srh@get-ed.com</a>
			</li>
			<li>
				<i className="fa-solid fa-phone"></i>
				<span><a href="tel:+201553551711">+201553551711</a> / <a href="tel:+201145656561">+201145656561</a></span>
			</li>
			<li>
				<i className="fa-solid fa-location-dot"></i>
				<span>Building GH18, Ground Floor (Separate Entrance)
					Golden Square, Teseen Street, Fifth Settlement,
					Cairo, Egypt</span>
			</li>
			</ul>
		</div>
		</div>

		<div className="footer-bottom">
			<p>&copy; {new Date().getFullYear()} Get-ED. All rights reserved.</p>
			<div className="footer-legal">
				<Link href="/privacy">Privacy Policy</Link>
			</div>
		</div>
	</div>
	</footer>
);
}

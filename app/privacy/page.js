import Link from 'next/link';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export const metadata = {
  title: 'Privacy Policy | Get-ED',
};

export default function PrivacyPolicy() {
	return (
		<>
		<Navbar/>
		<main style={{ paddingTop: '100px', paddingBottom: '60px' }}>
			<div className="container" style={{ maxWidth: '800px' }}>
			<h1 style={{ marginBottom: '10px' }}>Privacy Policy</h1>

			<section style={{ marginBottom: '30px' }}>
				<h2>1. Information We Collect</h2>
				<p>When you submit an application through our website, we collect:</p>
				<ul style={{ marginLeft: '20px', marginTop: '10px', color: '#666' }}>
				<li>• Full name</li>
				<li>• Email address</li>
				<li>• Phone number</li>
				<li>• Current grade/year</li>
				<li>• Current school/university</li>
				<li>• Preferred university (if provided)</li>
				</ul>
			</section>

			<section style={{ marginBottom: '30px' }}>
				<h2>2. How We Use Your Information</h2>
				<p>We use the information you provide to:</p>
				<ul style={{ marginLeft: '20px', marginTop: '10px', color: '#666' }}>
				<li>• Contact you regarding your study abroad inquiry</li>
				<li>• Provide educational counselling services</li>
				<li>• Send relevant information about programs and universities</li>
				</ul>
			</section>

			<section style={{ marginBottom: '30px' }}>
				<h2>3. Data Sharing</h2>
				<p>We do not sell your personal information. We may share your data with:</p>
				<ul style={{ marginLeft: '20px', marginTop: '10px', color: '#666' }}>
				<li>• Universities you are interested in (with your consent)</li>
				<li>• Service providers who assist our operations</li>
				</ul>
			</section>

			<section style={{ marginBottom: '30px' }}>
				<h2>4. Data Security</h2>
				<p>We implement appropriate security measures to protect your personal information from unauthorized access, alteration, or disclosure.</p>
			</section>

			<section style={{ marginBottom: '30px' }}>
				<h2>5. Your Rights</h2>
				<p>You have the right to:</p>
				<ul style={{ marginLeft: '20px', marginTop: '10px', color: '#666' }}>
				<li>• Access your personal data</li>
				<li>• Request correction of inaccurate data</li>
				<li>• Request deletion of your data</li>
				<li>• Withdraw consent at any time</li>
				</ul>
			</section>

			<section style={{ marginBottom: '30px' }}>
				<h2>6. Contact Us</h2>
				<p>For any privacy-related questions, contact us at:</p>
				<p><strong>Email:</strong> <a href="mailto:admissions@get-ed.com" style={{ color: '#00AEEF' }}>admissions@get-ed.com</a></p>
			</section>
			</div>
		</main>
		<Footer />
	</>
	);
}

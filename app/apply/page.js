'use client';

import { useState, useEffect } from 'react';
import { supabase } from '../../lib/supabase';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function ApplyPage() {
const [formData, setFormData] = useState({
	name: '',
	email: '',
	phone: '',
	grade: '',
	school: '',
	interestedCountry: '',
	studyArea: '',
	university: '',
	questions: ''
});
const [universities, setUniversities] = useState([]);
const [isSubmitting, setIsSubmitting] = useState(false);
const [submitStatus, setSubmitStatus] = useState(null);
const [errors, setErrors] = useState({});

useEffect(() => {
	fetchUniversities();
}, []);

const fetchUniversities = async () => {
	try {
	const { data, error } = await supabase
		.from('universities')
		.select('id, name, country')
		.order('name');

	if (error) throw error;
	setUniversities(data || []);
	} catch (error) {
		console.log('No universities found or error fetching:', error.message);
	}
};

const handleChange = (e) => {
	const { name, value } = e.target;
	setFormData(prev => ({ ...prev, [name]: value }));
	// Clear error when user starts typing
	if (errors[name]) {
		setErrors(prev => ({ ...prev, [name]: '' }));
	}
};

const validateForm = () => {
	const newErrors = {};

	// Name validation
	if (!formData.name.trim()) {
		newErrors.name = 'Full name is required';
	} else if (formData.name.trim().length < 2) {
		newErrors.name = 'Name must be at least 2 characters';
	}

	// Email validation
	const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
	if (!formData.email.trim()) {
		newErrors.email = 'Email is required';
	} else if (!emailRegex.test(formData.email)) {
		newErrors.email = 'Please enter a valid email address';
	}

	// Phone validation
	const phoneRegex = /^[\d\s\-\+\(\)]{8,}$/;
	if (!formData.phone.trim()) {
		newErrors.phone = 'Phone number is required';
	} else if (!phoneRegex.test(formData.phone)) {
		newErrors.phone = 'Please enter a valid phone number';
	}

	// Grade validation
	if (!formData.grade.trim()) {
		newErrors.grade = 'Grade/Year is required';
	}

	// School validation
	if (!formData.school.trim()) {
		newErrors.school = 'Current school is required';
	}

	// Country validation
	if (!formData.interestedCountry) {
		newErrors.interestedCountry = 'Please select a country';
	}

	setErrors(newErrors);
	return Object.keys(newErrors).length === 0;
};

const handleSubmit = async (e) => {
	e.preventDefault();
	setSubmitStatus(null);

	// Validate form before submitting
	if (!validateForm()) {
		return;
	}

	setIsSubmitting(true);

	try {
	const response = await fetch('/api/send-application', {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify(formData)
	});

	const result = await response.json();

	if (!response.ok) throw new Error(result.error);

	setSubmitStatus('success');
	setFormData({
		name: '',
		email: '',
		phone: '',
		grade: '',
		school: '',
		interestedCountry: '',
		studyArea: '',
		university: '',
		questions: ''
	});
	setErrors({});
	} catch (error) {
	setSubmitStatus('error');
	console.error('Submit error:', error);
	} finally {
	setIsSubmitting(false);
	}
};

return (
	<>
	<Navbar />
	<main className="apply-page" style={{ paddingTop: '100px', paddingBottom: '60px' }}>
		<div className="apply-container">
		<div className="apply-header">
			<h1>Start Your <span>Journey</span></h1>
			<p>Fill out the form below and our team will get in touch with you shortly.</p>
		</div>

		<form className="apply-form" onSubmit={handleSubmit}>
			<div className="form-group">
				<label htmlFor="name">
					<i className="fa-solid fa-user"></i> Full Name*
				</label>
				<input type="text" id="name" name="name" value={formData.name} onChange={handleChange}
					placeholder="Enter your full name" className={errors.name ? 'input-error' : ''}/>
				{errors.name && <span className="error-message">{errors.name}</span>}
			</div>

			<div className="form-row">
			<div className="form-group">
				<label htmlFor="email">
					<i className="fa-solid fa-envelope"></i> Email Address*
				</label>
				<input type="email" id="email" name="email" value={formData.email} onChange={handleChange}
					placeholder="Enter email address" className={errors.email ? 'input-error' : ''}/>
				{errors.email && <span className="error-message">{errors.email}</span>}
			</div>

			<div className="form-group">
				<label htmlFor="phone">
				<i className="fa-solid fa-phone"></i> Phone Number*
				</label>
				<input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange}
					placeholder="Enter your phone number" className={errors.phone ? 'input-error' : ''}/>
				{errors.phone && <span className="error-message">{errors.phone}</span>}
			</div>
			</div>

			<div className="form-row">
			<div className="form-group">
				<label htmlFor="grade">
				<i className="fa-solid fa-graduation-cap"></i> Current Grade/Year*
				</label>
				<input type="text" id="grade" name="grade" value={formData.grade} onChange={handleChange}
					placeholder="Enter your current grade/year" className={errors.grade ? 'input-error' : ''}/>
				{errors.grade && <span className="error-message">{errors.grade}</span>}
			</div>

			<div className="form-group">
				<label htmlFor="school">
					<i className="fa-solid fa-school"></i> Current School/University*
				</label>
				<input type="text" id="school" name="school" value={formData.school} onChange={handleChange}
					placeholder="Enter your current institution's name" className={errors.school ? 'input-error' : ''}/>
				{errors.school && <span className="error-message">{errors.school}</span>}
			</div>
			</div>

			<div className="form-group">
				<label htmlFor="interestedCountry">
					<i className="fa-solid fa-globe"></i> Preferred Study Destination*
				</label>
				<select id="interestedCountry" name="interestedCountry" value={formData.interestedCountry}
					onChange={handleChange} className={`${errors.interestedCountry ? 'input-error' : ''} ${!formData.interestedCountry ? 'placeholder-selected' : ''}`}>
					<option value="">Select a country</option>
					<option value="United Kingdom">United Kingdom</option>
					<option value="Germany">Germany</option>
					<option value="United States">United States</option>
					<option value="Canada">Canada</option>
					<option value="Spain">Spain</option>
					<option value="France">France</option>
					<option value="UAE">UAE</option>
					<option value="Italy">Italy</option>
					<option value="other">Other</option>
				</select>
				{errors.interestedCountry && <span className="error-message">{errors.interestedCountry}</span>}
			</div>

			<div className="form-group">
				<label htmlFor="studyArea">
					<i className="fa-solid fa-book"></i> What area(s) of study are you most interested in?
				</label>
				<input type="text" id="studyArea" name="studyArea" value={formData.studyArea} onChange={handleChange}
					placeholder="e.g. Engineering, Medicine, Business"/>
			</div>

			{universities.length > 0 && (
				<div className="form-group">
					<label htmlFor="university">
					<i className="fa-solid fa-university"></i> Preferred University (Optional)
					</label>
					<select id="university" name="university" value={formData.university} onChange={handleChange}>
					<option value="">Select a university (optional)</option>
					{universities.map(uni => (
						<option key={uni.id} value={uni.name}>
						{uni.name} - {uni.country}
						</option>
					))}
					</select>
				</div>
			)}

			{/* Other Information Section */}
			<div className="form-section">
				<h3 className="section-heading">Other Information</h3>
				<div className="form-group">
				<label htmlFor="questions">
					Do you have any specific questions for us right now?
				</label>
				<textarea
					id="questions"
					name="questions"
					value={formData.questions}
					onChange={handleChange}
					placeholder="Enter your questions"
					rows={4}
				/>
				</div>
			</div>

			{submitStatus === 'success' && (
				<div className="alert success">
					<i className="fa-solid fa-circle-check"></i>
					Application submitted successfully! We&apos;ll contact you soon.
				</div>
			)}

			{submitStatus === 'error' && (
				<div className="alert error">
					<i className="fa-solid fa-circle-xmark"></i>
					Something went wrong. Please try again.
				</div>
			)}

			<button type="submit" className="btn btn-accent submit-btn" disabled={isSubmitting}>
			{isSubmitting ? (
				<>
				<i className="fa-solid fa-spinner fa-spin"></i>
				Submitting...
				</>
			) : (
				<>
				Submit Application
				<i className="fa-solid fa-paper-plane"></i>
				</>
			)}
			</button>
		</form>
		</div>
	</main>
	<Footer />
	</>
);
}

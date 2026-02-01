import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
try {
	const body = await request.json();
	const { name, email, phone, grade, school, interestedCountry, studyArea, university, questions } = body;

	// Validate required fields
	if (!name || !email || !phone || !grade || !school || !interestedCountry) {
	return NextResponse.json(
		{ error: 'Missing required fields' },
		{ status: 400 }
	);
	}

	const { data, error } = await resend.emails.send({
	from: 'Get-ED Applications <onboarding@resend.dev>',
	to: [process.env.NOTIFICATION_EMAIL || 'test@example.com'],
	subject: `New Application: ${name}`,
	html: `
		<div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
		<div style="background: linear-gradient(135deg, #00AEEF 0%, #0090C5 100%); padding: 30px; text-align: center;">
			<h1 style="color: white; margin: 0;">New Student Application</h1>
		</div>

		<div style="padding: 30px; background: #f7f7f7;">
			<h2 style="color: #333; border-bottom: 2px solid #00AEEF; padding-bottom: 10px;">
			Applicant Details
			</h2>

			<table style="width: 100%; border-collapse: collapse;">
			<tr>
				<td style="padding: 12px 0; border-bottom: 1px solid #ddd; font-weight: bold; width: 40%;">Name:</td>
				<td style="padding: 12px 0; border-bottom: 1px solid #ddd;">${name}</td>
			</tr>
			<tr>
				<td style="padding: 12px 0; border-bottom: 1px solid #ddd; font-weight: bold;">Email:</td>
				<td style="padding: 12px 0; border-bottom: 1px solid #ddd;">
				<a href="mailto:${email}" style="color: #00AEEF;">${email}</a>
				</td>
			</tr>
			<tr>
				<td style="padding: 12px 0; border-bottom: 1px solid #ddd; font-weight: bold;">Phone:</td>
				<td style="padding: 12px 0; border-bottom: 1px solid #ddd;">
				<a href="tel:${phone}" style="color: #00AEEF;">${phone}</a>
				</td>
			</tr>
			<tr>
				<td style="padding: 12px 0; border-bottom: 1px solid #ddd; font-weight: bold;">Grade/Year:</td>
				<td style="padding: 12px 0; border-bottom: 1px solid #ddd;">${grade}</td>
			</tr>
			<tr>
				<td style="padding: 12px 0; border-bottom: 1px solid #ddd; font-weight: bold;">Current School:</td>
				<td style="padding: 12px 0; border-bottom: 1px solid #ddd;">${school}</td>
			</tr>
			<tr>
				<td style="padding: 12px 0; border-bottom: 1px solid #ddd; font-weight: bold;">Interested Country:</td>
				<td style="padding: 12px 0; border-bottom: 1px solid #ddd;">${interestedCountry}</td>
			</tr>
			${studyArea ? `
				<tr>
					<td style="padding: 12px 0; border-bottom: 1px solid #ddd; font-weight: bold;">Area(s) of Study:</td>
					<td style="padding: 12px 0; border-bottom: 1px solid #ddd;">${studyArea}</td>
				</tr>
			` : ''}
			${university ? `
				<tr>
					<td style="padding: 12px 0; font-weight: bold;">Preferred University:</td>
					<td style="padding: 12px 0;">${university}</td>
				</tr>
			` : ''}
			</table>

			${questions ? `
				<h2 style="color: #333; border-bottom: 2px solid #00AEEF; padding-bottom: 10px; margin-top: 30px;">
				Questions from Applicant
				</h2>
				<p style="color: #555; line-height: 1.6;">${questions}</p>
				`
			: ''}
		</div>

		<div style="background: #333; color: #fff; padding: 20px; text-align: center;">
			<p style="margin: 0; font-size: 14px;">
			This application was submitted through the Get-ED website.
			</p>
		</div>
		</div>
	`
	});

	if (error) {
		console.error('Resend error:', error);
		return NextResponse.json({ error: error.message }, { status: 500 });
	}

	return NextResponse.json({ success: true, id: data?.id });
} catch (error) {
	return NextResponse.json(
	{ error: 'Failed to send application' },
	{ status: 500 }
	);
}
}

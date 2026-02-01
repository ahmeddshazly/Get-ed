import "./style.css";

export const metadata = {
	title: "Get-ED | Study Abroad Consultancy",
	description: "Your trusted partner for international education. Get-ED helps students achieve their dreams "
		+ "of studying abroad with expert guidance.",
	keywords: "study abroad, international education, university admission, visa preparation, scholarships",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<head>
			<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
				integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA=="
				crossOrigin="anonymous" referrerPolicy="no-referrer"	/>
			</head>
			<body>{children}</body>
		</html>
	);
}

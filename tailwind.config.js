/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: ["class"],
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		container: {
			center: true, // কনটেইনারকে সেন্টার করতে
			padding: {
			  DEFAULT: '1rem', // ডিফল্ট padding
			  sm: '2rem', // ছোট স্ক্রীনে padding
			  lg: '3rem', // বড় স্ক্রীনে padding
			},
			screens: {
			  sm: '640px',
			  md: '768px',
			  lg: '1024px',
			  xl: '1280px',
			  '2xl': '1536px',
			},
		  },
		extend: {
			colors: {
				primary: "#00bffe",
				secondary: "#ff4d6d",
				"text-gray": "#ebeef6",
				"bg-gray": "#f5f5f5",
				"bg-blue": "#00bffe",
			},
		},
	},
	plugins: [require('daisyui'), require("tailwindcss-animate")],
};

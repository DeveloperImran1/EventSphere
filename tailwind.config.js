/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ["class"],
    content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
  		fontFamily: {
  			sans: ['Space Grotesk"', 'sans-serif']
  		},
  		colors: {
  			background: 'var(--background)',
  			foreground: 'var(--foreground)'
  		},
  		keyframes: {
  			'top-down': {
  				'0%': {
  					transform: 'translateY(-10px)'
  				},
  				'50%': {
  					transform: 'translateY(10px)'
  				},
  				'100%': {
  					transform: 'translateY(-10px)'
  				}
  			}
  		},
  		animation: {
  			'top-down': 'top-down 3s infinite ease-in-out'
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	}
  },
  plugins: [require('daisyui'), require("tailwindcss-animate")],
};

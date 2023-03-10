/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{ts,tsx}"],
	theme: {
		screens: {
			sm: "480px",
			md: "768px",
			lg: "1025px",
			xl: "1280px",
			xl2: "1360px",
		},
		extend: {},
	},
	darkMode: "class",
	plugins: [require("daisyui")],
	daisyui: {
		styled: true,
		themes: ["emerald", "dark", "forest", "synthwave"],
		base: true,
		utils: true,
		logs: true,
		rtl: false,
		darkTheme: "dark",
	},
};

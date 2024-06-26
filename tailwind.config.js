/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    
		fontFamily:{
			'poppins':['"Poppins"', 'sans-serif'],
				'axiforma': ['"Axiforma"','sans-serif']
				},
		extend: {
			colors: {
				'antiflash': '#f1f7f6', 
				'caribbean': '#00df81', 
				'mountain': '#2cc295', 
				'bangladesh': '#03624c', 
				'dgreen': '#032221', 
				'mint': '#2fa98c', 
				'frog': '#17876d', 
				'forest': '#095544', 
				'basil': '#0b453a', 
				'pine': '#06302b', 
				'pistachio': '#aacbc4', 
				'stone': '#7d7d7d', 
				'rblack': '#021A1A', 
				'danger': '#d42a34', 
				'warning': '#ffd827', 
				'primary': '#0677ba', 
			},
		},
  },
  plugins: [],
}


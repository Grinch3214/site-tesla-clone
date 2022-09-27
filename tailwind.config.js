module.exports = {
  content: ["./app/**/*.{html,js}"],
  theme: {
		screens: {
			'tablet': '600px',
			'desktop': '1200px',
			// 'portrait': {'raw': '{orientation: portrait}'},
		},
    extend: {
			backgroundImage: theme => ({
				'model-3': 'url("/images/m3-desktop.jpg")',
				'mobile-model-3': 'url("/images/m3-mobile.jpg")'
			}),
		},
  },
  plugins: [],
}
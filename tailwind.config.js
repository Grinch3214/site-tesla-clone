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
				'model-3': 'url("../images/m3-desktop.jpg")',
				'mobile-model-3': 'url("../images/m3-mobile.jpg")',
				'model-s': 'url("../images/model-s.jpeg")',
				'mobile-model-s': 'url("../images/mobile-model-s.jpeg")',
				'model-y': 'url("../images/model-y.jpeg")',
				'mobile-model-y': 'url("../images/mobile-model-y.jpeg")',
				'model-x': 'url("../images/model-x.jpeg")',
				'mobile-model-x': 'url("../images/mobile-model-x.jpeg")',
				'solar-panels': 'url("../images/solar-panels.jpeg")',
				'mobile-solar-panels': 'url("../images/mobile-solar-panels.jpeg")',
				'solar-roof': 'url("../images/solar-roof.jpeg")',
				'mobile-solar-roof': 'url("../images/mobile-solar-roof.jpeg")',
				'accessories': 'url("../images/accessories.jpeg")',
				'mobile-accessories': 'url("../images/mobile-accessories.jpeg")',
			}),
		},
  },
  plugins: [],
}
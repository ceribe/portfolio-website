const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			fontFamily: {
				quicksand: ['Quicksand']
			}
		},
		screens: {
			mobile: { max: '767px' }
		}
	},

	plugins: []
};

module.exports = config;

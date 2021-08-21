module.exports = {
	  publicPath: process.env.NODE_ENV === 'production'
    ? '/pokedex-vue-dio/'
    : '/',
	lintOnSave: false,

	css: {
		loaderOptions: {
			sass: {
				additionalData: `
					@import "@/styles/functions";
					@import "@/styles/colors";
					@import "@/styles/variables";
				`,
			},
		},
	},
};

module.exports = {
	lintOnSave: false,
        publicPath: '/pokedex-dio/',
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

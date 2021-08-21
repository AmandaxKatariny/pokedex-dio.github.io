module.exports = {
	lintOnSave: false,
	publicPath:'/pokedex-vue-dio/',

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

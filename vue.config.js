module.exports = {
  lintOnSave: false,
  css:{
		loaderOption: {
			sass:{
				additionsData: `
				@import "@/styles/functions";
				@import "@/styles/colors";
				`,
			},
		},
	},
};

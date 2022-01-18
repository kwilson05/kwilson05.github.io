module.exports = (eleventyConfig) => {

    eleventyConfig.addLayoutAlias('home', 'layouts/home.html');
    eleventyConfig.setLiquidOptions({
        root: [
          '_includes',
          '.'
        ]
      });

    return {
        dir: {
            input: "./",
            output: "./_site",
        },
    };
};

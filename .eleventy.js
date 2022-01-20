module.exports = (eleventyConfig) => {
    eleventyConfig.addPassthroughCopy("css");
    eleventyConfig.addPassthroughCopy("images");
    eleventyConfig.addLayoutAlias("home", "layouts/home.html");
    eleventyConfig.setLiquidOptions({
        root: ["_includes", "."],
    });

    return {
        dir: {
            input: "./",
            output: "./_site",
        },
        passthroughFileCopy: true,
    };
};

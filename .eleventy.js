module.exports = (eleventyConfig) => {
    // Copy the contents of the `public` folder to the output folder
    // For example, `./public/css/` ends up in `_site/css/`
    eleventyConfig.addPassthroughCopy({
        "./public/": "/",
    });
    eleventyConfig.addLayoutAlias("home", "layouts/home.html");

    return {
        // Control which files Eleventy will process
        // e.g.: *.md, *.html, *.liquid
        templateFormats: ["md", "html", "liquid"],
        dir: {
            input: "content",
            data: "../_data", // default: "_data"
            includes: "../_includes", // default: "_includes"
            output: "./_site",
        },
        // -----------------------------------------------------------------
        // Optional items:
        // -----------------------------------------------------------------

        // If your site deploys to a subdirectory, change `pathPrefix`.
        // Read more: https://www.11ty.dev/docs/config/#deploy-to-a-subdirectory-with-a-path-prefix

        // When paired with the HTML <base> plugin https://www.11ty.dev/docs/plugins/html-base/
        // it will transform any absolute URLs in your HTML to include this
        // folder name and does **not** affect where things go in the output folder.
        pathPrefix: "/",
    };
};

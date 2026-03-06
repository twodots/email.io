export default function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/css");
  eleventyConfig.addPassthroughCopy("src/favicon.svg");
  eleventyConfig.addWatchTarget("src/css/");

  return {
    pathPrefix: "/github.io/",
    dir: {
      input: "src",
      output: "_site",
    },
  };
}

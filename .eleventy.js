module.exports = function (config) {
  config.addPassthroughCopy("src/js")
  config.addPassthroughCopy("src/css")

  return {
    dir: {
      output: "dist",
      input: "src",
      data: "_data",
    },
  }
}

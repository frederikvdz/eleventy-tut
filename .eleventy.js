
const { DateTime } = require('luxon');


module.exports = function(eleventyConfig){
//take source files and serve them
eleventyConfig.addPassthroughCopy('./src/style.css');
eleventyConfig.addPassthroughCopy('./src/assets');
eleventyConfig.addPassthroughCopy('./src/admin');
eleventyConfig.addFilter("postDate", (dateObj) =>{
  return DateTime.fromJSDate(dateObj).toLocaleString(DateTime.DATE_MED);
});

// Return your Object options:
return {
    dir: {
      input: "src",
      output: "public"
    }
  }
}
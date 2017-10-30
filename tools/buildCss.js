const less = require("less");
const { readFile, writeFile } = require("./lib/fs");

async function buildCss() {
  let lessContents = await readFile("src/components/resources/less/style.keepOriginalLess");
  lessContents = lessContents.replace("@import \"~", "@import \"");
  lessContents = lessContents.replace("@import '~", "@import '");
  //   console.log("lessContents", lessContents);
  await less
    .render(lessContents, {
      paths: ["src/components/resources/less/", "node_modules/"], // Specify search paths for @import directives
      compress: true,
    })
    .then(
      async output => {
        // console.log("output", output.css);
        await writeFile("public/css/styles.min.css", output.css);
        // output.css = string of css
        // output.map = string of sourcemap
        // output.imports = array of string filenames of the imports referenced
      },
      error => {
        console.error("buildCss error", error);
      },
    );
}

export default buildCss;

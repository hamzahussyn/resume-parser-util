"use strict";

var resumeParser = require("./resume-parser/src");

/* Change the name of the file stored in resume directory */
var resume = "HamzaHussain-CV.pdf";

function parser(name, cb) {
  resumeParser.parseResumeFile(`./resume/${name}`, "./parsed")
    .then((res) => cb(res))
    .catch((error) => console.log(error));
}

function main() {
  parser(resume, function(file) {
    console.log("parsed file -> ", file);
  });
}

main()
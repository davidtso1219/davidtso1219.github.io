var marked = require('marked');
var fs = require('fs');

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const quarter = urlParams.get('quarter');
const course = urlParams.get("class");
const md_path = "./notes/" + quarter + "/" + course + ".md"
document.getElementsByTagName("title")[0].innerHTML = course.replace(/_/, ' ').toUpperCase()

var readMe = fs.readFileSync('README.md', 'utf-8');
var markdownReadMe = marked(readMe);

console.log(markdownReadMe)
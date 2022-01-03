const queryString = window.location.search
const urlParams = new URLSearchParams(queryString)
const quarter = urlParams.get('quarter')
const course = urlParams.get("class")
const md_path = "./notes/" + quarter + "/" + course + ".md"
const content = document.getElementsByClassName("content")[0]
document.getElementsByTagName("title")[0].innerHTML = course.replace(/_/, ' ').toUpperCase()

var md = new Remarkable({
    // Modify the generated HTML by highlighting the code directly
    highlight: function (str, lang) {
        if (lang && hljs.getLanguage(lang)) {
            try {
                return hljs.highlight(lang, str).value;
            } catch (err) {}
        }

        try {
            return hljs.highlightAuto(str).value;
        } catch (err) {}

        return ''; // use external default escaping
    }
});

// rest of your code

async function fill_content(file_path) {
    const response = await fetch(file_path)
    const txt = await response.text()
    content.innerHTML = md.render(txt)
}

fill_content(md_path)
const queryString = window.location.search
const urlParams = new URLSearchParams(queryString)
const quarter = urlParams.get('quarter')
const course = urlParams.get("class")
const md_path = "./notes/" + quarter + "/" + course + ".md"
const content = document.getElementsByClassName("content")[0]
document.getElementsByTagName("title")[0].innerHTML = course.replace(/_/, ' ').toUpperCase()

async function fill_content(file_path) {
    const response = await fetch(file_path)
    const txt = await response.text()
    const conv = new showdown.Converter()
    content.innerHTML = conv.makeHtml(txt)
}

fill_content(md_path)
const queryString = window.location.search
const urlParams = new URLSearchParams(queryString)
const quarter = urlParams.get('quarter')
const course = urlParams.get("class")
const md_path = "./notes/" + quarter + "/" + course + ".md"
const content = document.getElementsByClassName("content")[0]
const body = document.getElementsByTagName('body')[0]
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

function sleep(milliseconds) {
    const date = Date.now();
    let currentDate = null;
    do {
      currentDate = Date.now();
    } while (currentDate - date < milliseconds);
  }


async function main() {
    await fill_content(md_path)

    const ps = document.getElementsByTagName('p')
    for (var i = 0; i < ps.length; i++) {
        var p = ps[i]
        if (typeof p.previousElementSibling !== 'undefined' && p.previousElementSibling && (p.previousElementSibling.tagName.toLowerCase() === 'p' || p.previousElementSibling.tagName.toLowerCase() == 'ol' || p.previousElementSibling.tagName.toLowerCase() == 'ul')){
            p.style.margin = 0;
        }
    }

    window.onload = function() {
        var header = document.getElementsByTagName('h1')[0]
        header.setAttribute('data-text', '-' + header.textContent)

        header.onclick = function() {
            content.classList.add('shake')
            setTimeout(() => { content.classList.remove('shake') }, 500)
        }
    }
}

main()


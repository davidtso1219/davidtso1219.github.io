function sleep(milliseconds) {
    const date = Date.now();
    let currentDate = null;
    do {
      currentDate = Date.now();
    } while (currentDate - date < milliseconds);
}

function decodeHtml(html) {
    var txt = document.createElement("textarea");
    txt.innerHTML = html;
    return txt.value;
}

async function main() {

    window.onload = function() {
        var header = document.getElementsByTagName('h1')[0]
        var content = document.querySelector('.content')
        header.setAttribute('data-text', '-' + header.textContent)

        header.onclick = function() {
            content.classList.add('shake')
            setTimeout(() => { content.classList.remove('shake') }, 500)
        }

        var tds = document.getElementsByTagName('td')
        for (var i = 0; i < tds.length; i++) {
            td = tds[i]
            td.innerHTML = decodeHtml(td.innerHTML);
        }
    }
}

main()


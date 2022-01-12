function sleep(milliseconds) {
    const date = Date.now();
    let currentDate = null;
    do {
      currentDate = Date.now();
    } while (currentDate - date < milliseconds);
}

function decodeHtml(html) {
    let txt = document.createElement("textarea");
    txt.innerHTML = html;
    return txt.value;
}

async function main() {

    window.onload = function() {
        let header = document.getElementsByTagName('h1')[0]
        let content = document.querySelector('.content')
        header.setAttribute('data-text', '-' + header.textContent)

        header.onclick = function() {
            content.classList.add('shake')
            setTimeout(() => { content.classList.remove('shake') }, 500)
        }

        let tds = document.getElementsByTagName('td')
        for (let i = 0; i < tds.length; i++) {
            let td = tds[i]
            td.innerHTML = decodeHtml(td.innerHTML);
        }

        let bqs = document.getElementsByTagName('blockquote')
        for (let i = 0; i < bqs.length; i++) {
            let blockquote = bqs[i]
            if (blockquote.previousElementSibling.tagName == 'BLOCKQUOTE')
                blockquote.style.marginTop = '10px'
        }
    }
}

main()


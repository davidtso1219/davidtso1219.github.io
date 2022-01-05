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


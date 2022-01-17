const main_list = document.querySelector(".main-list")

function toggle_classes(quarter) {
    var classes = quarter.nextElementSibling.children

    for (var j = 0; j < classes.length; j++) {
        classes[j].classList.toggle("show")
    }
}

async function fetch_database() {
    let response = await fetch('./database.json')

    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }
    try {
        return await response.json()
    }
    catch (err) {
        throw new Error("json() failed");
    }
}

async function main() {
    let data = await fetch_database()

    for (let i = 0; i < data.length; i++) {
        let quarter = data[i].quarter
        let courses = data[i].courses
        let items = []

        for (let j = 0; j < courses.length; j++) {
            items.push(`<li class="item" quarter="${quarter.replace(/\ /, '_').toLowerCase()}">${courses[j].name}</li>`)
        }

        let outer_list = `
        <li>
            <div class="list">
                <div class="arrow">></div>
                <div class="list-text">${quarter}</div>
            </div>
            <ul>
                ${items.join('\n')}
            </ul>
        </li>
        `

        main_list.insertAdjacentHTML('beforeend', outer_list)
    }

    const quarters = document.querySelectorAll(".list")
    const classes = document.querySelectorAll(".item")
    for (var i = 0; i < quarters.length; i++) {
        quarters[i].onclick = function() {

            this.classList.toggle("active")
            this.children[0].classList.toggle("rotate")
            toggle_classes(this)

            for (var j = 0; j < quarters.length; j++) {
                if (this != quarters[j] && quarters[j].classList.contains("active")) {
                    quarters[j].classList.remove("active")
                    quarters[j].children[0].classList.toggle("rotate")
                    toggle_classes(quarters[j])
                }
            }
        }
    }

    for (var i = 0; i < classes.length; i++) {
        classes[i].onclick = function() {
            window.location.href = "./class.html?class=" + this.textContent.replace(/\ /, '_').toLowerCase() + "&quarter=" + this.getAttribute("quarter")
        }
    }

}

main()
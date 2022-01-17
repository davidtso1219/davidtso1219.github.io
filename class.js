const queryString = window.location.search
const urlParams = new URLSearchParams(queryString)
const quarter = urlParams.get('quarter')
const course = urlParams.get('class')
const main_list = document.querySelector('.main-list')
const name = course.replace(/_/, ' ')
document.querySelector('.class').textContent = name.toUpperCase()

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

function get_num_courses(data) {
    for (let i = 0; i < data.length; i++) {

        if (data[i].quarter.toLowerCase() === quarter.replace(/_/, ' ')) {

            for (let j = 0; j < data[i].courses.length; j++) {

                let course = data[i].courses[j]
                if (course.name.toLowerCase() === name.toLowerCase())
                    return course.weeks

            }
        }
    }
}

async function main() {
    let data = await fetch_database()
    let num_courses = get_num_courses(data)

    for (let i = 0; i < num_courses; i++) {
        let html_to_insert = `
        <li>
            <div class="list">
                <div class="arrow">></div>
                <div class="list-text">week${i+1}</div>
            </div>
        </li>
        `
        main_list.insertAdjacentHTML('beforeend', html_to_insert)
    }

    const lists = document.querySelectorAll('.list')
    for (let i = 0; i < lists.length; i++) {
        list = lists[i]

        list.addEventListener('click', function() {
            window.location.href = "./notes/" + quarter + "/" + course + "/week_" + (i + 1)
        })
    }

}

main()
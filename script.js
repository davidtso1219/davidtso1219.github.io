const quarters = document.querySelectorAll(".quarter")
const classes = document.querySelectorAll(".class")

function toggle_classes(quarter) {
    var classes = quarter.nextElementSibling.children

    for (var j = 0; j < classes.length; j++) {
        classes[j].classList.toggle("show")
    }
}

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
        window.location.href = "./notes/" + this.getAttribute("quarter") + "/" + this.innerHTML.replace(/\ /, '_').toLowerCase()
        // window.location.href = "./notes.html?class=" + this.innerHTML.replace(/\ /, '_').toLowerCase() + "&quarter=" + this.getAttribute("quarter")
    }
}
quarters = document.querySelectorAll(".quarter")

function toggle_classes(quarter) {
    classes = quarter.nextElementSibling.children

    for (var j = 0; j < classes.length; j++) {
        classes[j].classList.toggle("show")
        console.log(classes[j])
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
                toggle_classes(quarters[j])
            }
        }
    }
}
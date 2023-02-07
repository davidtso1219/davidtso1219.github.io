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

async function fetch_database() {
  let response = await fetch("/database.json");

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  try {
    return await response.json();
  } catch (err) {
    throw new Error("json() failed");
  }
}

async function load_nav_links() {
  let data = await fetch_database();
  let max_week = 0;
  let nav_links = document.querySelectorAll(".nav-link");

  // For course page
  for (let i = 0; i < data.length; i++) {
    quarter = data[i].quarter;
    courses = data[i].courses;

    for (let j = 0; j < courses.length; j++) {
      if (courses[j].name == document.title) {
        max_week = courses[j].weeks;
        nav_links[1].href =
          "/class.html?class=" +
          document.title.replace(/\ /, "_").toLowerCase() +
          "&quarter=" +
          quarter.replace(/\ /, "_").toLowerCase();
      }
    }
  }

  // For next and previous pages
  let url = window.location.href;
  let week = Number(url[url.length - 1]);
  if (week < max_week) {
    nav_links[2].href = url.slice(0, -1) + (week + 1);
  }

  if (week > 1) {
    nav_links[3].href = url.slice(0, -1) + (week - 1);
  }
}

async function main() {
  window.onload = function () {
    let header = document.getElementsByTagName("h1")[0];
    let content = document.querySelector(".content");
    header.setAttribute("data-text", "-" + header.textContent);

    header.onclick = function () {
      content.classList.add("shake");
      setTimeout(() => {
        content.classList.remove("shake");
      }, 500);
    };

    let tds = document.getElementsByTagName("td");
    for (let i = 0; i < tds.length; i++) {
      let td = tds[i];
      td.innerHTML = decodeHtml(td.innerHTML);
    }

    let bqs = document.getElementsByTagName("blockquote");
    for (let i = 0; i < bqs.length; i++) {
      let blockquote = bqs[i];
      if (blockquote.previousElementSibling.tagName == "BLOCKQUOTE")
        blockquote.style.marginTop = "10px";
    }
  };

  await load_nav_links();
}

main();

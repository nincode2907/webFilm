import films from "./storageFilms.js"

const user = window.localStorage.getItem('user');
const listFilms = document.querySelector(".list-film")
const nameFilm = document.querySelector(".film-name")
const contentFilm = document.querySelector(".film-content")
const dateFilm = document.querySelector(".book-date")

window.addEventListener("load", function () {
    listFilms.setAttribute("src", `./assets/img/films/${films[JSON.parse(user)].img}.jpg`)
    nameFilm.innerText = films[JSON.parse(user)].name
    contentFilm.innerText = films[JSON.parse(user)].content
    const rand = Math.floor(Math.random() * 6 + 1)
    renderDate(rand)
})

// Date

function renderDate(randNum){
    for (let i = 0; i < randNum; i++) {
        dateFilm.innerHTML += `<div class="display col-lg-2 col-md-2 col-sm-2">
        <div class="display__date">${nextDate(i)}</div>
        <div class="display__day">${vnDate(i)}</div>
      </div>`
    }
}

function nextDate(num) {
    const d = new Date()
    const date = d.getDate()
    const month = d.getMonth() + 1
    const nextDate = d.setDate(date + num)
    const nextMonth = d.setMonth(month)
    return d.getDate(nextDate).toString() + " / " + d.getMonth(nextMonth).toString()

}

function vnDate(num) {
    const d = new Date()
    const next = new Date(d)
    next.setDate(d.getDate()+num)

    switch (next.getDay()) {
        case 0: return "Chủ Nhật"
            break;
        case 1: return "Thứ Hai"
            break;
        case 2: return "Thứ Ba"
            break;
        case 3: return "Thứ Tư"
            break;
        case 4: return "Thứ Năm"
            break;
        case 5: return "Thứ Sáu"
            break;
        case 6: return "Thứ Bảy"
            break;
    }
}


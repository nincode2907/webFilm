import films from "./storageFilms.js"

const user = window.localStorage.getItem('user');
const listFilms = document.querySelector(".list-film")
const nameFilm = document.querySelector(".film-name")
const contentFilm = document.querySelector(".film-content")
const dateFilm = document.querySelector(".book-date")
const timeFilm = document.querySelector(".book-time")
// Render
window.addEventListener("load", function () {
    listFilms.setAttribute("src", `./assets/img/films/${films[JSON.parse(user)].img}.jpg`)
    nameFilm.innerText = films[JSON.parse(user)].name
    contentFilm.innerText = films[JSON.parse(user)].content
    const rand = Math.floor(Math.random() * 5 + 2)
    renderDate(rand)
    renderTime()
    applyPrice()
})

// Date

function renderDate(randNum) {
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
    next.setDate(d.getDate() + num)

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

// Time

const listTime = ["09:30", "10:30", "13:00", "13:45", "14:00", "14:40", "15:00", "16:50", "19:00", "19:45", "20:00", "20:30", "21:30", "22:00"]

function renderTime() {
    listTime.forEach(time => {
        if (isMissing(time)) {
            timeFilm.innerHTML += `<div class="display__time fade col-lg-1 col-md-1 col-sm-1">${time}</div>`
        } else {
            timeFilm.innerHTML += `<div class="display__time col-lg-1 col-md-1 col-sm-1">${time}</div>`
        }
    })
}

function isMissing(timeFilm) {
    const d = new Date()
    const currentHour = d.getHours()
    const currentMin = d.getMinutes()
    // console.log(currentHour);
    let hourFilm = parseInt(timeFilm.slice(0, 2))
    let minFilm = parseInt(timeFilm.slice(-2))
    if (hourFilm < currentHour) {
        return true
    } else if (hourFilm == currentHour) {
        return minFilm < currentMin ? true : false
    }else {
        return false
    }
}

// Price 

const price = ["90000","120000"]
const priceSale = document.querySelector(".sales")
const priceRegular = document.querySelector(".no-sales")
const currencyFormat = new Intl.NumberFormat("vi-VN", {style: 'currency', currency: "VND"})
function applyPrice(){
    const d = new Date()
    const day = d.getDate()
    if(day === 0 || day === 6){
        priceRegular.innerText += " " + currencyFormat.format(parseInt(price[1]))
        priceSale.innerText += " " + currencyFormat.format(parseInt(price[1]) / 2)
    }else {
        priceRegular.innerText += " " + currencyFormat.format(parseInt(price[0]))
        priceSale.innerText += " " + currencyFormat.format(parseInt(price[0]) / 2)
    }
}

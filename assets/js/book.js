import films from "./storageFilms.js"
import { handleChooseDate, handleChooseTime, listSeat, vnDate, nextDate, isMissing } from "./handleBook.js"

const user = window.localStorage.getItem('user');
const listFilms = document.querySelector(".list-film")
const nameFilm = document.querySelector(".film-name")
const contentFilm = document.querySelector(".film-content")
const dateFilm = document.querySelector(".book-date")
const timeFilm = document.querySelector(".book-time")
// Render
window.addEventListener("load", function () {
    const rand = Math.floor(Math.random() * 5 + 2)

    listFilms.setAttribute("src", `./assets/img/films/${films[JSON.parse(user)].img}.jpg`)
    nameFilm.innerText = films[JSON.parse(user)].name
    contentFilm.innerText = films[JSON.parse(user)].content
    renderDate(rand)
    renderTime()
    applyPrice()
    renderSeat()
})

// Date

function renderDate(randNum) {
    for (let i = 0; i < randNum; i++) {
        dateFilm.innerHTML += `<div class="display col-lg-2 col-md-2 col-sm-2">
        <div class="display__date">${nextDate(i)}</div>
        <div class="display__day">${vnDate(i)}</div>
      </div>`
    }
    const chooseDate = document.querySelectorAll(".display")
    handleChooseDate(chooseDate)
}

// Time

const listTime = ["09:30", "10:30", "13:00", "13:45", "14:00", "14:40", "15:00", "16:50", "19:00", "19:45", "20:00", "20:30", "21:30", "22:00"]

function renderTime() {
    listTime.map(time => {
        if (isMissing(time)) {
            timeFilm.innerHTML += `<div class="display__time fade col-lg-1 col-md-1 col-sm-1">${time}</div>`
        } else {
            timeFilm.innerHTML += `<div class="display__time col-lg-1 col-md-1 col-sm-1">${time}</div>`
        }
    })
    const chooseTime = document.querySelectorAll(".display__time")
    handleChooseTime(chooseTime)
}

// Seat

const arrRow = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"]
const theater = document.querySelector(".theater")
function renderSeat() {
    arrRow.forEach((item, index) => {
        theater.innerHTML += `<div id="${item}" class="seat-cinema row">
        <span class="class col-lg-1">${item}</span>
        <div class="seat__left col-lg-2">
          <div class="seat__left-item row"></div>
        </div>
        <div class="seat__middle col-lg-6">
            <div class="seat__middle-item row"></div>
        </div>
        <div class="seat__right col-lg-2">
            <div class="seat__right-item row"></div>
        </div>
      </div>`
    })
    listSeat(arrRow)
}

// Price 

const price = ["90000", "120000"]
const priceSale = document.querySelector(".sales")
const priceRegular = document.querySelector(".no-sales")
const currencyFormat = new Intl.NumberFormat("vi-VN", { style: 'currency', currency: "VND" })
function applyPrice() {
    const d = new Date()
    const day = d.getDay()
    if (day === 0 || day === 6) {
        priceRegular.innerText += " " + currencyFormat.format(parseInt(price[1]))
        priceSale.innerText += " " + currencyFormat.format(parseInt(price[1]) / 2)
    } else {
        priceRegular.innerText += " " + currencyFormat.format(parseInt(price[0]))
        priceSale.innerText += " " + currencyFormat.format(parseInt(price[0]) / 2)
    }
}

const apply = document.querySelector("#apply")
const unapply = document.querySelector("#no-apply")
const idCard = document.querySelector('.id-card')
apply.addEventListener('click', function () {
    idCard.setAttribute('style', 'display:flex')
})

unapply.addEventListener('click', function () {
    idCard.removeAttribute('style')
    idCard.removeEventListener('change', upload, true)
})

// Handle Upload image
const frontImage = document.querySelector("#front-img")
const behindImage = document.querySelector("#behind-img")

function upload(e) {
    const image = document.createElement('img')
    image.src = URL.createObjectURL(e.target.files[0])
    this.parentElement.appendChild(image);
}

frontImage.addEventListener('change', upload)
behindImage.addEventListener('change', upload)

export { user }
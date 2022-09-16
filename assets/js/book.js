import films from "./storageFilms.js"

const user = window.localStorage.getItem('user');
const listFilms = document.querySelector(".list-film")
const nameFilm = document.querySelector(".film-name")
const contentFilm = document.querySelector(".film-content")
const dateFilm = document.querySelector(".book-date")
const timeFilm = document.querySelector(".book-time")
// Render
window.addEventListener("load", function () {
    const rand = Math.floor(Math.random() * 5 + 2)
    const displayTimes = document.getElementsByClassName("display__time ")

    listFilms.setAttribute("src", `./assets/img/films/${films[JSON.parse(user)].img}.jpg`)
    nameFilm.innerText = films[JSON.parse(user)].name
    contentFilm.innerText = films[JSON.parse(user)].content
    renderDate(rand)
    renderTime()
    applyPrice()
    renderSeat()

    for (const displayTime of displayTimes) {
        displayTime.addEventListener('click', function () {
            console.log(displayTime);
        })
    }
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



// document.addEventListener('click', function(e){
//     console.log([e.target]);
// })

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
    } else {
        return false
    }
}
// Price 

const price = ["90000", "120000"]
const priceSale = document.querySelector(".sales")
const priceRegular = document.querySelector(".no-sales")
const currencyFormat = new Intl.NumberFormat("vi-VN", { style: 'currency', currency: "VND" })
function applyPrice() {
    const d = new Date()
    const day = d.getDate()
    if (day === 0 || day === 6) {
        priceRegular.innerText += " " + currencyFormat.format(parseInt(price[1]))
        priceSale.innerText += " " + currencyFormat.format(parseInt(price[1]) / 2)
    } else {
        priceRegular.innerText += " " + currencyFormat.format(parseInt(price[0]))
        priceSale.innerText += " " + currencyFormat.format(parseInt(price[0]) / 2)
    }
}

// Seat

const arrRow = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"]
const theater = document.querySelector(".theater")
function renderSeat() {
    arrRow.forEach((item, index) => {
        theater.innerHTML += `<div class="seat-cinema row">
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

function listSeat(arr) {
    const seatLeft = document.querySelectorAll(".seat__left-item")
    const seatMiddle = document.querySelectorAll(".seat__middle-item")
    const seatRight = document.querySelectorAll(".seat__right-item")
    arr.forEach((item, index) => {
        if (item != arr[arr.length - 1]) {
            for (let i = 0; i < 18; ++i) {
                if (i < 4) {
                    seatLeft[index].innerHTML += `<div class="seat col-lg-1">${i + 1}</div>`
                } else if (i >= 4 && i < 14) {
                    seatMiddle[index].innerHTML += `<div class="seat col-lg-1">${i + 1}</div>`
                } else {
                    seatRight[index].innerHTML += `<div class="seat col-lg-1">${i + 1}</div>`
                }
            }
        }
        else {
            for (let i = 0; i < 10; ++i) {
                seatMiddle[index].innerHTML += `<div class="seat col-lg-1">${i + 1}</div>`
            }
        }
    })
    const seat = document.querySelectorAll(".seat")
    // handleChoose(seat)
    for (const element of seat) {
        element.addEventListener('click', function () {
            // console.log(element)
            element.classList.add("check")
        })
    }
}

// Handle
const closeRoom = document.querySelector(".close-choosing")
const room = document.querySelector(".room")
const openRoom = document.querySelector(".form-seat")
const chooseTime = document.querySelectorAll(".display")
const chooseDate = document.querySelectorAll(".display__time")

closeRoom.addEventListener('click', function () {
    room.classList.remove("open")
})

openRoom.addEventListener('click', function () {
    room.classList.add("open")
})

function handleChoose(arrElement) {
    
}

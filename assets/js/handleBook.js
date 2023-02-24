import films from "./storageFilms.js"
import { user } from "./book.js"
// Use common

function handleChooseCommon(arr) {
    for (const element of arr) {
        element.addEventListener('click', (e) => {
            element.classList.toggle("check")
        })
    }
}

function handleChooseOnly(arr) {
    for (const element of arr) {
        element.addEventListener('click', () => {
            arr.forEach(item => {
                if (item.classList.contains('check')) {
                    item.classList.remove('check')
                }
            })
            element.classList.add('check')
        })
    }
}

// Date

function handleChooseDate(arr) {
    for (const element of arr) {
        element.addEventListener('click', () => {
            arr.forEach(item => {
                if (item.classList.contains('check')) {
                    item.classList.remove('check')
                }
            })
            element.classList.add('check')
        })
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
        default: return "Thứ Bảy"
            break;
    }
}

// Time

function handleChooseTime(arr) {
    for (const element of arr) {
        element.addEventListener('click', (e) => {
            if (!element.classList.contains("fade")) {
                element.classList.toggle("check")
            } else {
                e.stopProgation()
            }
        })
    }
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
    } else {
        return false
    }
}

// Seat

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
    handleChooseSeat(seat)

}

// Handle

const closeRoom = document.querySelector(".close-choosing")
const room = document.querySelector(".room")
const openRoom = document.querySelector(".form-seat")

openRoom.addEventListener('click', function () {
    room.classList.add("open")
})

function handleChooseSeat(arrElement) {
    const choseThis = document.querySelector(".done")
    const showSeat = document.querySelector(".show-seat__item")
    var arrSeat = []
    for (const element of arrElement) {
        const getRow = element.parentElement.parentElement.parentElement.getAttribute("id")
        element.addEventListener('click', function () {
            element.classList.toggle("check")

        })
        choseThis.addEventListener("click", function () {
            if (element.classList.contains("check")) {
                element.classList.remove("check")
                element.classList.add("chosen")
            }
            if (element.classList.contains("chosen")) {
                if (!arrSeat.includes(getRow + element.innerText)) {
                    arrSeat.push(getRow + element.innerText)
                    arrSeat.sort()
                    console.log(arrSeat);
                    return arrSeat
                }
            }
            showSeat.innerText = " "
            showSeat.innerText += " " + arrSeat.join(" ")

            if (arrSeat.length > 0) {
                renderForm(arrSeat.join(" "), arrSeat.length)
            }
        })
    }
}

closeRoom.addEventListener('click', function () {
    room.classList.remove("open")
})

// Payment

const bank = document.querySelectorAll(".bank")
handleChooseOnly(bank)

const payment = document.querySelector('.payment-tickets')

function renderForm(seat, quantity,) {
    const d = new Date()
    const day = d.getDay()
    const currencyFormat = new Intl.NumberFormat("vi-VN", { style: 'currency', currency: "VND" })
    const time = document.querySelectorAll('.display__time.check')
    const date = document.querySelector('.display.check')


    let totalMoney = 0
    if (day == 0 || day == 6) {
        totalMoney += quantity * 120000 * time.length
    }
    else {
        totalMoney += quantity * 90000 * time.length
    }
    payment.innerHTML = `<div class="payment-film__name">Tên phim: ${films[JSON.parse(user)].name}</div>
    <img src="./assets/img/films/${films[JSON.parse(user)].img}.jpg" class="payment-img" alt="" />
    <div class="payment-date">Ngày: ${date.children[0].innerText + " - " + date.children[1].innerText}</div>
    <div class="payment-time">Thời gian: ${addNodeItem(time)}</div >
    <div class="payment-seat">Vé ghế: ${seat}</div>
    <div class="payment-total">Tổng tiền: ${currencyFormat.format(parseInt(totalMoney))}</div>`
}

function addNodeItem(node) {
    let arr = []
    for (let index = 0; index < node.length; index++) {
        arr.push(node.item(index).innerText);
    }
    return arr.join(" | ")
}

export { handleChooseDate, handleChooseTime, listSeat, vnDate, nextDate, isMissing }
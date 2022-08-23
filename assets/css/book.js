const seats = document.getElementsByClassName('seat')
const seat = document.getElementsByClassName('seat-empty')
const buyBtn = document.querySelector('.buy-btn')
const quantity = document.querySelector('.display')
const inc = document.querySelector('.up')
const dec = document.querySelector('.down')
const bill = document.querySelector('.contain-bill')
const priceFilms = document.querySelectorAll('.price')
const priceCore = document.querySelector('.price-core')
const movieApi = 'http://localhost:3000/movies'


var price = [90000, 150000]
var i = 0
var seatAll = document.querySelector('.seat-all')
var dem = 0
window.addEventListener('load', function () {
    var j = 1
    for (j; j < 60; j++) {
        seatAll.innerHTML += `<div class="seat col-lg-1">
        <label class="seat-empty" for="${j + 1}">${j + 1}</label>
        <input type="checkbox" name="" id="${j + 1}">
        </div>`
    }

    for (const ASeat of seat) {
        ASeat.addEventListener('click', function () {
            ASeat.classList.toggle('check')
        })
    }
    bill.style.display = "none"
    buyBtn.addEventListener('click', function () {
        dem = 0;
        for (const ASeat of seat) {
            if (ASeat.classList.contains('check')) {
                ASeat.innerHTML = "X"
                dem++
            }
        }
        i = dem;

        if (dem > 0) {
            bill.style.display = "flex"
            quantity.innerHTML = dem

        } else {
            bill.style.display = "none"
        }
        for (const priceFilm of priceFilms) {
            if (getDay == 0 || getDay == 6) {
                priceFilm.innerHTML = (price[1] * quantity.innerHTML).toLocaleString('it-IT', { style: 'currency', currency: 'VND' });
            }
            else {
                priceFilm.innerHTML = (price[0] * quantity.innerHTML).toLocaleString('it-IT', { style: 'currency', currency: 'VND' });
            }
        }
    })

    // price


    var d = new Date()
    var getDay = d.getDay()
    if (getDay == 0 || getDay == 6) {
        priceCore.innerHTML = price[1].toLocaleString('it-IT', { style: 'currency', currency: 'VND' });
    }
    else {
        priceCore.innerHTML = price[0].toLocaleString('it-IT', { style: 'currency', currency: 'VND' });
    }

    // quantity

    inc.addEventListener('click', function () {
        quantity.innerHTML = ++i
        for (const priceFilm of priceFilms) {
            if (getDay == 0 || getDay == 6) {
                priceFilm.innerHTML = (price[1] * i).toLocaleString('it-IT', { style: 'currency', currency: 'VND' });
            }
            else {
                priceFilm.innerHTML = (price[0] * i).toLocaleString('it-IT', { style: 'currency', currency: 'VND' });
            }
        }
    })
    dec.addEventListener('click', function () {
        if (i > 0) {
            quantity.innerHTML = --i
            for (const priceFilm of priceFilms) {
                if (getDay == 0 || getDay == 6) {
                    priceFilm.innerHTML = (price[1] * i).toLocaleString('it-IT', { style: 'currency', currency: 'VND' });
                }
                else {
                    priceFilm.innerHTML = (price[0] * i).toLocaleString('it-IT', { style: 'currency', currency: 'VND' });
                }

            }

        }
    })

})

fetch(movieApi)
.then(response => response.json())
.then(data => console.log(data[0].name))
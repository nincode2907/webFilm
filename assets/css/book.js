const seats = document.getElementsByClassName('seat')
const seat = document.getElementsByClassName('seat-empty')
const buyBtn = document.querySelector('.buy-btn')
const quantity = document.querySelector('.display')
const inc =document.querySelector('.up')
const dec = document.querySelector('.down')
var seatAll = document.querySelector('.seat-all')
window.addEventListener('load', function () {
    var i = 1
    for (i; i < 60; i++) {
        seatAll.innerHTML += `<div class="seat col-lg-1">
        <label class="seat-empty" for="${i + 1}">${i + 1}</label>
        <input type="checkbox" name="" id="${i + 1}">
        </div>`
    }

    for (const ASeat of seat) {
        ASeat.addEventListener('click', function () {
            ASeat.classList.toggle('check')
        })
    }

    buyBtn.addEventListener('click', function () {
        for (const ASeat of seat) {
            if (ASeat.classList.contains('check')) {
                ASeat.innerHTML = "X"
                localStorage.setItem('seat-booked', JSON.stringify(ASeat.innerHTML))
            }
        }
    })
})

// quantity
var i = 1
quantity.innerHTML = i
inc.addEventListener('click', function() {
    if(i<=0){
        i = 0
    }
    quantity.innerHTML = i++

})
dec.addEventListener('click', function() {
    quantity.innerHTML = i--
    if (i < 0){
        quantity.innerHTML = 0 
    }
})

// price
const priceFilms = document.querySelectorAll('.price')
var price = [90000, 150000]

var d = new Date()
var getDay = d.getDay()
for (const priceFilm of priceFilms) {
    if (getDay == 0 || getDay == 6) {
        priceFilm.innerHTML = price[1].toLocaleString('it-IT', { style: 'currency', currency: 'VND' });
    }
    else {
        priceFilm.innerHTML = price[2].toLocaleString('it-IT', { style: 'currency', currency: 'VND' });
    }

}